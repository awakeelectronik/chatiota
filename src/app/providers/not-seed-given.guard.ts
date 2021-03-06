import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotSeedGivenGuard implements CanActivate {
  constructor(private storage: Storage){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.storage.get('seed').then(res => {
        return res == null
      })
      .catch(e => {
        console.log("error: ", e)
        return false
      })
  }
  
}
