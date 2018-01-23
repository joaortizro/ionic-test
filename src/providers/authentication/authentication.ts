import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
@Injectable()
export class AuthenticationProvider {
  constructor(public http: HttpClient, private facebook: Facebook) {}

  public login(permissions: string[]) {
    return new Promise<FacebookLoginResponse>((resolve, reject) => {
      this.facebook
        .login(permissions)
        .then((res: FacebookLoginResponse) => {
          resolve(res);
        })
        .catch(exeption => {
          console.log("Error loggin into Facebook", exeption);
          reject(exeption);
        });
    });
  }

  public logout() {
    this.facebook.logout();
  }
}
