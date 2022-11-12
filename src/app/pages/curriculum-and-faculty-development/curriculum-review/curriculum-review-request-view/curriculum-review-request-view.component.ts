import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-review-request-view',
  templateUrl: './curriculum-review-request-view.component.html',
  styleUrls: ['./curriculum-review-request-view.component.scss']
})
export class CurriculumReviewRequestViewComponent implements OnInit {

  @Input() formData : any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
