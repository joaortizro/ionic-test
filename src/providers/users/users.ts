import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import {HttpClient , HttpResponseBase} from '@angular/common/http'
import "rxjs/Rx";

@Injectable()
export class UsersProvider {
  private apiURL = "https://randomuser.me/api/?results=10";

  constructor(public http: HttpClient) {}

  getUsers() {
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiURL).toPromise().then((response: any)=>{
          resolve(response.results)
      }).catch((exception)=>{
          reject(exception)
      })
    });
  }
}
