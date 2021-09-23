import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterEvent, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private config: ConfigService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any)=>{
         const token = JSON.parse(localStorage.getItem('user') || '{}').token;
         const id = JSON.parse(localStorage.getItem('user') || '{}').id;
        if(event.url==='/login'|| event.url==='/register'){
              if(!token){
                  return true;
                }
                this.router.navigate(['/home'],{relativeTo:this.activeRoute});
                return false;
              }else{
                
                if(!token){
                      return false;
                    }else{
                        this.config.getUser(id);
                        return true;
                      }
                    }
                  });
                  return true;
  }
}




