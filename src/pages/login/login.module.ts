import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginPage } from "./login";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage)],
  providers: [AuthenticationProvider]
})
export class LoginPageModule {}
