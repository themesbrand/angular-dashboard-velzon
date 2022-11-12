import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-review-request-action',
  templateUrl: './curriculum-review-request-action.component.html',
  styleUrls: ['./curriculum-review-request-action.component.scss']
})
export class CurriculumReviewRequestActionComponent implements OnInit {

  @Input() formData : any = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formData)
  }

}
