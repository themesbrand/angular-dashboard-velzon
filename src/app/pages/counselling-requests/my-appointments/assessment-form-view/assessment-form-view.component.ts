import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-assessment-form-view',
  templateUrl: './assessment-form-view.component.html',
  styleUrls: ['./assessment-form-view.component.scss']
})
export class AssessmentFormViewComponent implements OnInit {

  listData = data;
  assessmentForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formInit()

  }

  formInit() {
    this.assessmentForm = this.formBuilder.group({
      name : new FormControl(null),
      omsb: new FormControl(null),
      age: new FormControl(null),
      maritalStatus: new FormControl(null),
      trainingProgram: new FormControl(null),
      yearOfTraining: new FormControl(null),
      academicYear: new FormControl(null),
      referralType: new FormControl(null),
      refereeName: new FormControl(null),
      referredDate: new FormControl(null),
      
      assessment : new FormControl([]),
      assessmentArray : new FormControl([]),

      lifestyleInterventions: new FormControl(null),
      lifestyleInterventionOther: new FormControl(null),
      substanceUse: new FormControl(null),
    })
    
    this.patchData()
  }

  patchData() {
    this.assessmentForm.patchValue(this.listData.userDetailsObject)
    this.assessmentForm.patchValue(this.listData.assessmentData)
  }

  get formValues () {
    return this.assessmentForm.value
  }

}
