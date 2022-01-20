import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RagistrationComponent } from '../ragistration/ragistration.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component:LoginComponent){
    if(component.uemail.dirty){
       return window.confirm("are you sure you want to navigate")
    }else{
      return false
    }
  }
    
  
}
