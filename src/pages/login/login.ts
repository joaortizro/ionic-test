import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public pushPage: any;
  public userPermissions: string[] = ["public_profile", "user_friends", "email"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationProvider) {}

  public login(userPermissions) {
    this.auth.login(userPermissions);
  }
  public logout() {
    this.auth.logout();
  }
}
