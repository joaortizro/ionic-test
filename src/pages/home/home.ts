import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page1Page} from '../page1/page1';
import {UsersProvider} from '../../providers/users/users'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users:any;
  public info:any;


  constructor(public navCtrl: NavController , public usersProvider : UsersProvider) {

  }



  loadUser(){
    return this.usersProvider.getUsers().subscribe( (response)=>{
      this.users=response.results;
      this.info=response.info;
      console.log(this.users);
      console.log(this.info);
    }
    )
  }

  ngOnInit(){
    this.loadUser();
  }

}
