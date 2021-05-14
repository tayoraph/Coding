import { Injectable } from '@angular/core';
import { ErrorService } from '../../Business/error/error.service';
import { HttpErrorHandler } from '../../Business/error/http-error-handler.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { environment } from '../.././../environments/environment';
import { Constants } from '../../Business/constants/constants';
import { ResponseModel } from '../../Business/models/Response';



@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  public httpErrorHandler: HttpErrorHandler;
  public const: any;
  public theHeader: any;
  public errorHandle: any;
  public errorService: ErrorService;
  constructor(
    public httpClient: HttpClient,
    public constants: Constants,
  ) {

    this.httpErrorHandler = new HttpErrorHandler(this.errorService);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
  }

  getCountryResults(data) {
      let connect = environment.baseUrl  + environment.RequestTypeCountry + data
     let header = this.constants.httpHeader();
      return this.httpClient.get(connect, {headers : header, responseType: 'json'})
        .pipe(map((data:any) => {
          return data;
        }),
          retry(3),


        );
  }

  getTotalResultOfACountry(data) {
    let connect = environment.baseUrl + environment.RequestTypeTotal + data
   let header = this.constants.httpHeader();
    return this.httpClient.get(connect, {headers : header, responseType: 'json'})
      .pipe(map((data:any) => {
        return data;
      }),
        retry(3),


      );
}
}
