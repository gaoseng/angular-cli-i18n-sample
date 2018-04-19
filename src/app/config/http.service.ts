import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { retry, catchError ,switchMap} from 'rxjs/operators';

@Injectable()
export class HttpService {
    private configUrl = 'assets/config.json';
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      }
    constructor(private http : HttpClient){
        
    }
    getConfig():Observable<any>{
        return this.http.get(this.configUrl).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    getConfigResponse(): Observable<HttpResponse<any>>{
        return this.http.get(this.configUrl,{observe:'response'})
    }
    addConfigData(data):Observable<any>{
        return this.http.post(this.configUrl,data,this.httpOptions).pipe(
            catchError(this.handleError)
        )
    }
    private handleError(error:HttpErrorResponse){
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return Observable.of('Something bad happened; please try again later.')
    }
}