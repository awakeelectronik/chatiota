import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { composeAPI, createGetAccountData } from '@iota/core';
import { asciiToTrytes } from '@iota/converter';


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
    const iota = composeAPI({
        provider: 'https://nodes.thetangle.org:443'
    });


    // generate real seeds from a phraseword: https://github.com/robertlie/ledger_recovery_words_to_iota_seed TODO
    let join = 'TTPWPUYGWINZLPELEMKBDBQULRHPFQGNECDVPKLGKJTOQTDXEFNOHH9YCOEKCJWLHGCT9EFGVWQEZXYOD';
    const userpass = this.login.password.toUpperCase();
    const username = this.login.username.toUpperCase();
    const seed = `${userpass}${username}${join}`.substr(0, 81)

    iota.getAccountData(seed)
    .then(a => {
        console.log(a)
        return iota.wereAddressesSpentFrom([a.latestAddress])
    })
    .then(a => {
        console.log("Answer: ", a)
    })
    .catch(a => console.log(a))
        
    


    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.userData.loadSeed(seed);
      this.router.navigateByUrl('/chats');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
