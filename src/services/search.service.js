import { of } from 'rxjs';
import { switchMap, catchError, debounceTime } from 'rxjs/operators';
import { fromFetch } from "rxjs/fetch";
import { fetchUrls } from "@/enviroments";
import { API_DEEZER } from "@/secrets";
import { times } from "@/enviroments";

const URLService = `${fetchUrls.apis.deezer}/search/`;

export default {
  find(value) {
    let _URL = new URL(URLService);
    _URL.search = new URLSearchParams({ q: value })

    return fromFetch(_URL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_DEEZER.X_RAPIDAPI_HOST,
        "x-rapidapi-key": API_DEEZER.X_RAPIDAPI_KEY
      }
    })
    .pipe(
      debounceTime(times.lazyLoding),
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError(err => {
        return of({ error: true, message: err.message })
      })
    );
  }
}