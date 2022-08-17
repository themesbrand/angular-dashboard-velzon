import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal-add-comments',
  templateUrl: './withdrawal-add-comments.component.html',
  styleUrls: ['./withdrawal-add-comments.component.scss']
})
export class WithdrawalAddCommentsComponent implements OnInit {

  @Input('comment') 
  set setComment(data: any){
    this.comment = data;
  };

  comment : any = null;

  currentData = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  
}
