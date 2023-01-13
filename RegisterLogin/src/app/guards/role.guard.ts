import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkService } from '../link.service';
import jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private link:LinkService,
    private router:Router,
   ){}
 
   canActivate(route:ActivatedRouteSnapshot):boolean
     {
    const expectedRole =  route.data['expectedRole'];
 
   
    var token =  localStorage.getItem('token') ;


    const decodedToken:any = jwt_decode(JSON.stringify(token))
    if(!this.link.isAuth || decodedToken.role!==expectedRole){
      console.log('no autorised')
      this.router.navigate(['login'])
      return false;
    }
     return true;
   }
  
}
