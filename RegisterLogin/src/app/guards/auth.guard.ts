import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkService } from '../link.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
   private link:LinkService,
   private router:Router,
  ){}

  canActivate():boolean
    {
     if(!this.link.isAuth()){
      console.log('token n est plus valide')
      this.router.navigate(['/login'])
      return false
     }

    return true;
  }
  
}
