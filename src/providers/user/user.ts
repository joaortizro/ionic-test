import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserProvider {
  private apiURL: string = "https://randomuser.me/api/?results=10";

  constructor(public http: HttpClient) {}

  public getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe(
        (response: any) => {
          resolve(response.results);
        },
        (exception: any) => {
          reject(exception);
        }
      );
    });
  }
}
