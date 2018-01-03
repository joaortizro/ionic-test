import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page1Page} from '../page1/page1';
import {UsersProvider} from '../../providers/users/users'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private users:any;

  constructor(public navCtrl: NavController , public usersProvider : UsersProvider) {

  }

  goToPage1(){
    this.navCtrl.push(Page1Page);
  }

  loadUsers(){
    return this.usersProvider.getUsers().subscribe( (result)=>{
      this.users=result;
      console.log(this.users)
    }
    )
  }

  ngOnInit(){
    this.loadUsers();
  }

}
