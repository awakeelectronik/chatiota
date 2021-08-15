import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;
  wallet: string;


  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    private clipboard: Clipboard
  ) { }

  ionViewWillEnter(){
    this.userData.getAddress().then(wallet => {
      this.wallet = wallet
      console.log(wallet)
    })
  }

  ngAfterViewInit() {
    this.getUsername();
  }
  
  copyAddress(){
    this.clipboard.copy(this.wallet);
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
