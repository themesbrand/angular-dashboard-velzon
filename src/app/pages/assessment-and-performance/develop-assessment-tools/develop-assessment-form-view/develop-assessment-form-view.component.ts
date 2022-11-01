import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-assessment-form-view',
  templateUrl: './develop-assessment-form-view.component.html',
  styleUrls: ['./develop-assessment-form-view.component.scss']
})
export class DevelopAssessmentFormViewComponent implements OnInit {

  @Input() selectedRequest : any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
