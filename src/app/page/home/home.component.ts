import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text: string = '';
  userInfo: any;
  listPost: string[] = ['Angular News'];
  constructor(    
    private appService: AppService,
    private message: NzMessageService
    ) { }

  ngOnInit(): void {
    this.appService.userInfo.subscribe(res=>{
      this.userInfo = res;
    });
  }

  addPost() {
    this.listPost = [this.text,...this.listPost];
    this.text = '';
    this.message.create('success', `Post added!`);
  }

}
