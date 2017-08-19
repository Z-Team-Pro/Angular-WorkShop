/*
import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';


@Injectable()

export class LoginService {
headers:Headers;
options:RequestOptions;

Token:Token;

 constructor( private http: Http,private authHttp:AuthHttp){


 }


   getUser(Name:string ,Password:string)  {
 // add authorization header with jwt token
      //let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
       // let options = new RequestOptions({ headers: headers });

          if(location.hostname=="localhost"){


    return this.http.get('http://localhost:8080/public/login/'+Name+'/'+Password)
   //return this.http.get('http://207.154.234.24:8080/login/'+Name+'/'+Password)
   .map(response =>response.json());
  }
  else {

  // return this.http.get('http://localhost:8080/public/login/'+Name+'/'+Password)
   return this.http.get('http://207.154.234.24:8080/login/'+Name+'/'+Password)
   .map(response =>response.json());

  }
   }







//logout 

   logout()  {
 // add authorization header with jwt token
      //let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
       // let options = new RequestOptions({ headers: headers });

          if(location.hostname=="localhost"){


      return this.http.get('http://localhost:8080/public/Logout')
   //return this.http.get('http://207.154.234.24:8080/Logout')
   .map(response =>response.json());
  }
  else {

   //return this.http.get('http://localhost:8080/public/Logout')
   return this.http.get('http://207.154.234.24:8080/Logout')
   .map(response =>response.json());

  }
   }



   //Logging Passowrd

   LogMasterPass(user,status){


          if(location.hostname=="localhost"){


      return this.http.get('http://localhost:8080/public/logMasterPassword/'+user+"/"+status)
   //return this.http.get('http://207.154.234.24:8080/Logout')
   .map(response =>response.json());
  }
  else {

   //return this.http.get('http://localhost:8080/public/Logout')
   return this.http.get('http://207.154.234.24:8080/logMasterPassword/'+user+"/"+status)
   .map(response =>response.json());

  }

   }



}
*/