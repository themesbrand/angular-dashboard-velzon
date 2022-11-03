import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provide-support-assessment-form-view',
  templateUrl: './provide-support-assessment-form-view.component.html',
  styleUrls: ['./provide-support-assessment-form-view.component.scss']
})
export class ProvideSupportAssessmentFormViewComponent implements OnInit {

  @Input() formRequest :any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
