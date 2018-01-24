import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@IonicPage()
@Component({
  selector: "page-user-edit",
  templateUrl: "user-edit.html"
})
export class UserEditPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.myForm = this.createUserForm();
  }

  private createUserForm() {
    return this.formBuilder.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      dateBirth: ["", Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ["", Validators.required],
        passwordConfirmation: ["", Validators.required]
      })
    });
  }
  public saveData() {
    console.log(this.myForm.value);
  }
}
