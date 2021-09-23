import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private router: Router) { }
  userInfo = new Subject();

  setUser(data: any) {
    this.userInfo.next(data);
  }

  setLogOutUser(){
    this.userInfo.next(null);
    this.router.navigate(['/']);
  }
}
