import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserProvider {
  public apiURL = "https://randomuser.me/api/?results=10";

  constructor(public http: HttpClient) {}

  public getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe(
        (response: any) => {
          resolve(response);
        },
        (exception: any) => {
          reject(exception);
        }
      );
    });
  }
}
