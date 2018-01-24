import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UserPage } from "./user";
import { UserEditPageModule } from "./user-edit/user-edit.module";
@NgModule({
  declarations: [UserPage],
  imports: [UserEditPageModule, IonicPageModule.forChild(UserPage)],
  exports: [UserPage]
})
export class UserPageModule {}
