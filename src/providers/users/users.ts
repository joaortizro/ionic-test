import { Injectable } from "@angular/core";
import { HttpClient, HttpResponseBase } from "@angular/common/http";

@Injectable()
export class UsersProvider {
  private apiURL = "https://randomuser.me/api/?results=10";

  constructor(public http: HttpClient) {}

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe(
        (response: any) => {
          resolve(response)
        },
        (exception:any) => {
          reject(exception)
        }
        );
    });
    /* return new Promise((resolve,reject)=>{
      this.http.get(this.apiURL).toPromise().then((response: any)=>{
          resolve(response.results)
      }).catch((exception)=>{
          reject(exception)
      })
    }); */
  }
}
