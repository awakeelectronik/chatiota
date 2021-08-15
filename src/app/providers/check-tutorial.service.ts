import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  constructor(private storage: Storage, private router: Router) {}

  canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.sendTo()
        return false;
      } else {
        return true;
      }
    });
  }

  sendTo(){
    this.storage.get('seed').then(res => {
      if(res && res.length == 81)
        this.router.navigate(['/chats'])
      else
        this.router.navigate(['/login'])
    })
  }
}
