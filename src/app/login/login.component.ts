import { Component } from '@angular/core';
import { Routes, RouterModule ,Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {

    username:string;
    password:string;
    success:boolean =true;
    
    constructor( private route: Router){
    
    
    }
    
    
    //get user 
    
   /* 
    NewLogin(){
    
    this.login.Login(this.username,this.password).subscribe(
    
    result=>{
    
    localStorage.setItem("currentUser",JSON.stringify(result.Profile));
    localStorage.setItem("token",result.token);
    
    
    
    
    
    
    this.route.navigate(['/home']);
    
    
        this.success=true;
    console.log(result);
    },
    error=>{
    this.success=false;
    console.log(error);
    
    }
    
    
    
    
    )
    }
*/
}