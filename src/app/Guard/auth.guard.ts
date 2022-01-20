import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isLoggedin()){  
      return true;
    }else{
      window.alert("you need to login to visit the page");
      return false
    }
    
  }
  
  
}
