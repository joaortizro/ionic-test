import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-user-edit",
  templateUrl: "user-edit.html"
})
export class UserEditPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
