import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { HomePage } from "../home/home";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public pushPage: any;
  public userPermissions: string[] = ["public_profile", "user_friends", "email"];
  public isLogged: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthenticationProvider,
    public alerCtrl: AlertController
  ) {}

  public login(userPermissions: string[]) {
    let status: string;
    this.auth.login(userPermissions).then(
      response => {
        status = response.status;
        this.isLogged = true;
        this.navCtrl.push(HomePage);
      },
      exception => {
        this.showLoginAlert();
      }
    );
  }
  public logout() {
    this.auth.logout();
  }

  public showLoginAlert() {
    let alert = this.alerCtrl.create({
      title: "Error",
      subTitle: "No esas autorizado para entrar",
      buttons: ["OK"]
    });
    alert.present();
  }
}
