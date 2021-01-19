import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { composeAPI } from '@iota/core';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {


    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      let seed = this.generateSession()
      this.userData.loadSeed(seed);
      this.router.navigateByUrl('/chats');
    }
  }

  generateSession(): string {
    // generate real seeds from a phraseword: https://github.com/robertlie/ledger_recovery_words_to_iota_seed TODO
    let join = 'TTPWPUYGWINZLPELEMKBDBQULRHPFQGNECDVPKLGKJTOQTDXEFNOHH9YCOEKCJWLHGCT9EFGVWQEZXYOD';
    const userpass = this.login.password.toUpperCase();
    const username = this.login.username.toUpperCase();
    const seed = `${userpass}${username}${join}`.substr(0, 81)

    const iota = composeAPI({
      provider: 'https://nodes.thetangle.org:443'
    });
    
    iota.getAccountData(seed)
      .then(acc => {
        console.log(acc)
        this.userData.setAddress(acc.latestAddress)
        return iota.wereAddressesSpentFrom([acc.latestAddress])
      })
      .then(a => {
        console.log("wereAddressesSpentFrom: ", a)
      })
      .catch(a => console.log(a))

      return seed
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
