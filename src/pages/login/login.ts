import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { NativePageTransitions, NativeTransitionOptions } from "@ionic-native/native-page-transitions";

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {} as User;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private nativePageTransitions: NativePageTransitions,
    private events: Events
  ) {}

  async Login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email.trim(), this.user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage, {});
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  Register(user: User){
    this.nativePageTransitions.slide({
      direction: 'up',
      duration: 500,
    });
    this.navCtrl.push(RegisterPage);
  }

  // async Register(user: User) {
  //   try {
  //     const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  //     if (result) {
  //       this.navCtrl.setRoot(TabsPage, {});
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

}
