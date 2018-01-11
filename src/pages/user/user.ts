import { Component } from "@angular/core";
import { IonicPage, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-user",
  templateUrl: "user.html"
})
export class UserPage {
  public user: any;
  public selectedUser: any;
  constructor(public navParams: NavParams) {
    this.user = this.navParams.get("selectedUser");
  }
}
