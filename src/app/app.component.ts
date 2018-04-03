import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.notificationSetUp();
    });
  }
  public notificationSetUp() {
    this.oneSignal.startInit('d51b157d-7af7-479f-957e-57d84427eb0d', 'NGE1MjgyY2MtMzg1NC00OTFlLTk5YjUtMDBhMGE2MDUzZDli');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(data));
      // do something when a notification is opened
    });

    console.log(this.oneSignal.getIds());
    this.oneSignal.endInit();
  }
}
