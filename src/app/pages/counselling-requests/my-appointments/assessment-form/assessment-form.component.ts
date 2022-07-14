import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {data} from './data';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  assessmentForm !: FormGroup;

  constructor(private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "My Appointments", link : 'counselling/my-appointments' },
      { label: "Assessment Form", active : true }
    ];
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
      assessmentArray : new FormArray([]),

      lifestyleInterventions: new FormControl(null),
      lifestyleInterventionOther: new FormControl(null),
      substanceUse: new FormControl(null),
    })
    this.patchData()
  }

  get formValues () {
    return this.assessmentForm.value
  }

  get assessmentArrayValues () {
    return (<FormArray>this.assessmentForm.get('assessmentArray')).controls;
  }

  addAssessmentsArray() {
    const assessmentName = this.formValues.assessment;

    (<FormArray>this.assessmentForm.get('assessmentArray')).push(
      new FormGroup({
        'name' : new FormControl(assessmentName, []),
        'value' : new FormControl(null, [])
      })
    );
  }

  removeAssessmentsArray(index : number) {
    if((<FormArray>this.assessmentForm.get('assessmentArray')).length != 1) {
      (<FormArray>this.assessmentForm.get('assessmentArray')).removeAt(index);
    }
  }

  patchData() {
    this.assessmentForm.patchValue(this.listData.userDetailsObject)
  }

  onNavigate() {
    this.router.navigate(['counselling/my-appointments'])
  }
}
