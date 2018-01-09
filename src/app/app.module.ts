import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { Page1PageModule } from "../pages/page1/page1.module";
import { UsersProvider } from "../providers/users/users";
import { HttpClientModule } from "@angular/common/http";

import { UserPageModule } from "../pages/user/user.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    Page1PageModule,
    UserPageModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider
  ]
})
export class AppModule {}
