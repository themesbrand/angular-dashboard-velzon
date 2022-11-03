import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-provide-support-assessment-setup',
  templateUrl: './provide-support-assessment-setup.component.html',
  styleUrls: ['./provide-support-assessment-setup.component.scss']
})
export class ProvideSupportAssessmentSetupComponent implements OnInit {

  listData = data;

  public Editor = ClassicEditor;
  createWorkshopSetupForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createWorkshopSetupForm = this.formBuilder.group({
      workshopCode : new FormControl(null),
      workshopName : new FormControl(null),
      workshopType : new FormControl(null),
      workshopTypeOther : new FormControl(null),
      workshopDescription : new FormControl(null),
      preRequisiteWorkshop : new FormControl(null),
      workshopDuration : new FormControl(null),
      workshopProvider : new FormControl(null),
      workshopProviderOther : new FormControl(null),
      evaluationForm : new FormControl(null),
      workshopStaffCoordinators : new FormControl(null),
      workshopOtherCoordinators : new FormControl(null),
      cpdScore : new FormControl(null),
      manualType : new FormControl(null),
      eManualLink : new FormControl(null),
      manualsRequired : new FormControl(null),
      manualsAvailable : new FormControl(null),
      heartCodeKeys : new FormControl(null),
      noOfECards : new FormControl(null)
    })
  }

  get createWorkshopSetupValues() {
    return this.createWorkshopSetupForm.value;
  }

}
