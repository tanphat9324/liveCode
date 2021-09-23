import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {config} from '../../config/config';
import { AppService } from '../app.service';
export interface loginModel{
  email: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<loginModel>{
    return this.http.post<loginModel>(config.api+'/auth/signin',data);
  }

  register(data: any): Observable<loginModel>{
    return this.http.post<loginModel>(config.api+'/auth/signup',data);
  }
}
