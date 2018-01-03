
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";


/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UsersProvider {

  private usersURL="https://jsonplaceholder.typicode.com/users"

  constructor(public http: Http) {

  }

  getUsers(){
    return this.http.get(this.usersURL).map((response : Response )=>{
      return response.json();

    }
    ).catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    // alert(errMsg);
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}


}
