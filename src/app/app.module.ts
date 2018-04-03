import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { UserPageModule } from '../pages/user/user.module';
import { LoginPageModule } from '../pages/login/login.module';
import { Facebook } from '@ionic-native/facebook';
import { OneSignal } from '@ionic-native/onesignal';
@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, HomePageModule, UserPageModule, LoginPageModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, UserProvider, Facebook, OneSignal]
})
export class AppModule {}
