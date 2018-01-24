import { Component } from "@angular/core";
import { IonicPage, NavParams } from "ionic-angular";
import { UserEditPage } from "./user-edit/user-edit";
@IonicPage()
@Component({
  selector: "page-user",
  templateUrl: "user.html"
})
export class UserPage {
  public user: any;
  public selectedUser: any;
  public editPage: any;
  constructor(public navParams: NavParams) {
    this.user = this.navParams.get("selectedUser");
    this.editPage = UserEditPage;
  }
}
