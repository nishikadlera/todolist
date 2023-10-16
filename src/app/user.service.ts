import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  jsonUrl = 'assets/user.json';

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]> (this.jsonUrl)
    .pipe(catchError(this.handleError));

  }

  private handleError(err : HttpErrorResponse){
    let errmsg = ''
    if(err.error instanceof ErrorEvent){
      errmsg = 'An error occured: ${err.error.message}';
    }else{
      errmsg = 'Server Returned code: ${err.status}, error message is: ${err.message}'
    }
    console.error(errmsg);
    return throwError(errmsg);

  }

}
