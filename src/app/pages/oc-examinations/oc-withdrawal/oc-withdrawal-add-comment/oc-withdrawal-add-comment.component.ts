import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oc-withdrawal-add-comment',
  templateUrl: './oc-withdrawal-add-comment.component.html',
  styleUrls: ['./oc-withdrawal-add-comment.component.scss']
})
export class OcWithdrawalAddCommentComponent implements OnInit {

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
