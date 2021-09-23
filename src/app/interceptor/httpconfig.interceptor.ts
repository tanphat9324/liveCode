import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem('user') || '{}').token;
 if(token != null) {
//    const token =  localStorage.getItem('user');
// if the token is  stored in localstorage add it to http header
const headers = new HttpHeaders().set("Authorization",'Bearer ' + token);
   //clone http to the custom AuthRequest and send it to the server 
const AuthRequest = request.clone( { headers: headers});
return next.handle(AuthRequest)
   }else {
     return next.handle(request);
   }
  }
}