import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable() 

export class SignUpService{

constructor(private http:Http)
{}

//SignUp function


SigUp( data : FormData){


return this.http.post('https://ancient-badlands-75464.herokuapp.com/public/Signup',data)
.map(result=>result.json())

}

}