import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthConfig ,JwtHelper  } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class ControlService {

  constructor(private router: Router) { }
  
     canActivate() {
        var jwtHelper: JwtHelper = new JwtHelper();
        
         if (localStorage.getItem('currentUser')) {
             // logged in so return true
             /*
             var chek=jwtHelper.isTokenExpired(token);
             if(!chek){
                         return true;
                     }

             return true;
             */
         }
  
         // not logged in so redirect to login page
         this.router.navigate(['/Login']);
         return false;
     }
 }



