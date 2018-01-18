import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public pushPage: any;
  public isLoginSuccessful: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {

  }

  public login() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res)
        this.isLoginSuccessful = true;
        this.pushPage = HomePage;

      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
