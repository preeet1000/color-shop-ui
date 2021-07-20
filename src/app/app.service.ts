import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiURL = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this._httpClient.get<any>(this.apiURL + '/employee')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error?:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
  //  window.alert(errorMessage);
    return throwError(errorMessage);
}
}
