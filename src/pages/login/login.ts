import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {} as User;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth
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

  async Register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage, {});
      }
    } catch (e) {
      console.error(e);
    }
  }

}
