import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions } from "@ionic-native/native-page-transitions";
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from "../login/login";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, private nativePageTransitions: NativePageTransitions) {}

  ionViewWillLeave() {
    this.nativePageTransitions.slide({
      direction: 'down',
      duration: 500,
    });
  }

  Back(){
    this.navCtrl.push(LoginPage);
  }

}
