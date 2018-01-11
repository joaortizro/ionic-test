import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { HomePageModule } from "../pages/home/home.module";
import { UserProvider } from "../providers/user/user";
import { HttpClientModule } from "@angular/common/http";
import { UserPageModule } from "../pages/user/user.module";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, HomePageModule, UserPageModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, UserProvider]
})
export class AppModule {}
