import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  getConfig(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(res=>{
      console.log(res);
    })
  }

  getUser(id: number){
    // let params = new HttpParams().set('id', id);
    // return this.http.get<any>(config.api+'/auth/detailUser',{params: params}).subscribe(res=>{
    return this.http.get<any>(`${config.api}/auth/detailUser/${id}`).subscribe(res=>{
      this.appService.setUser(res);
    })
  }
}
