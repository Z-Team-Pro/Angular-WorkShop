import { Router } from '@angular/router';
import { SignUpService } from './../Services/Signup.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent {

//difne parms 
name:string;
email:string;
password:string;
repassword:string;
phone:string;


constructor( private Signup:SignUpService ,private route:Router ){

}

//Call SignUp


CreateUser(){

let data= new FormData();

data.append('name',this.name);
data.append('password',this.password);
data.append('email',this.email);
data.append('phone',this.phone);

this.Signup.SigUp(data).subscribe(
result=>{console.log(result)

//save the user data on localstoage

localStorage.setItem("User",JSON.stringify(result));
this.route.navigate(["/home"]);



},
error=>{console.log(error)}
)

}




}
