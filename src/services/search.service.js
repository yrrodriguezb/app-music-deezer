import { of } from 'rxjs';
import { switchMap, catchError, debounceTime } from 'rxjs/operators';
import { fromFetch } from "rxjs/fetch";
import { fetchUrls } from "@/enviroments";
import { times } from "@/enviroments";
import serviceKeys from "@/utils/service.keys";

const URLService = `${fetchUrls.apis.deezer}/search/`;

export default {
  find(value) {
    let _URL = new URL(URLService);
    _URL.search = new URLSearchParams({ q: value })

    return fromFetch(_URL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": serviceKeys.HOST,
        "x-rapidapi-key": serviceKeys.KEY
      }
    })
    .pipe(
      debounceTime(times.lazyLoding),
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