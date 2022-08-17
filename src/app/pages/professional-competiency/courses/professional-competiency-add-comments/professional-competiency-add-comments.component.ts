import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-competiency-add-comments',
  templateUrl: './professional-competiency-add-comments.component.html',
  styleUrls: ['./professional-competiency-add-comments.component.scss']
})
export class ProfessionalCompetiencyAddCommentsComponent implements OnInit {

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
