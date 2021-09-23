import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
@Input('author') author: string = '';
@Input('listPost') listPost!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
