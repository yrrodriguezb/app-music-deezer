import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { fromFetch } from "rxjs/fetch";
import { fetchUrls } from "@/enviroments";
import serviceKeys from "@/utils/service.keys";

const URLService = `${fetchUrls.apis.deezer}`;

export default {
  getById(trackId) {
    let _URL = new URL(`/track/${trackId}/`, URLService);

    var headers = new Headers();
    headers.append("x-rapidapi-host", serviceKeys.HOST);
    headers.append("x-rapidapi-key", serviceKeys.KEY);

    var request = new Request(_URL, { headers });

    return fromFetch(request).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}`, status: response.status });
        }
      }),
      catchError(err => {
        return of({ error: true, message: err.message, status: 500 })
      })
    );
  }
}