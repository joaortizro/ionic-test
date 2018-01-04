import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserPage } from "../user/user";
import { UsersProvider } from "../../providers/users/users";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public users: any;
  public info: any;

  constructor(
    public navCtrl: NavController,
    public usersProvider: UsersProvider
  ) {
    this.loadUser();
  }

  public loadUser() {
    this.usersProvider.getUsers().subscribe(response => {
      this.users = response.results;
      this.info = response.info;
      console.log(this.users);
      console.log(this.info);
    });
  }


  public goToProfile(selectedUser) {
    this.navCtrl.push(UserPage, { selectedUser });
  }
}
