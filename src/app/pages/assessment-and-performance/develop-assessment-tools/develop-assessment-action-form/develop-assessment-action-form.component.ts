import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-assessment-action-form',
  templateUrl: './develop-assessment-action-form.component.html',
  styleUrls: ['./develop-assessment-action-form.component.scss']
})
export class DevelopAssessmentActionFormComponent implements OnInit {
  @Input() selectedRequest : any = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedRequest)
  }

}
