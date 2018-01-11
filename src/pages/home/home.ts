import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { UserPage } from "../user/user";
import { UserProvider } from "../../providers/user/user";
import { NavParams } from "ionic-angular/navigation/nav-params";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public users: any;
  public info: any;
  public pushPage: any;
  constructor(public navParams: NavParams, public usersProvider: UserProvider) {
    this.pushPage = UserPage;
    this.loadUser();
  }

  public loadUser() {
    this.usersProvider.getUsers().then(res => {
      this.users = res;
    });
  }
}
