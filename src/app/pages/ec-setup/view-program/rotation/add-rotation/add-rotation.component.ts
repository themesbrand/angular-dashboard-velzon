import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from '../data'

@Component({
  selector: 'app-add-rotation',
  templateUrl: './add-rotation.component.html',
  styleUrls: ['./add-rotation.component.scss']
})
export class AddRotationComponent implements OnInit {
  
  listData = data;

  breadCrumbItems!: Array<{}>;
  rotationForm !: FormGroup;

  constructor(private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "View Program", link: '//ec-setup/view-program'},
      { label: "Add Rotation", active : true }
    ];
    this.rotationFormInit()
  }

  rotationFormInit() {
    this.rotationForm = this.formBuilder.group({
      'year' : new FormControl(null, []),
      'name' : new FormControl(null, []),
      'type' : new FormControl(null, []),
      'code' : new FormControl(null, []),
      'isOwnedByRotation' : new FormControl(null, []),
      'numberOfBlocks' : new FormControl(null, []),
      'trainingSites' : new FormControl(null, []),
      'description' : new FormControl(null, []),
      'objectives' : new FormArray([]),
      'methodOfAssessments' : new FormArray([]),

    })

    this.rotationForm.controls['type'].disable();
    this.rotationForm.controls['code'].disable();
    this.rotationForm.controls['isOwnedByRotation'].disable();

  }

  get formControls() {
    return this.rotationForm.value;
  }
  get objectiveControls() {
    return (<FormArray>this.rotationForm.get('objectives')).controls;
  }

  get methodOfAssessmentsControls() {
    return (<FormArray>this.rotationForm.get('methodOfAssessments')).controls;
  }

  addObjectives() {
    this.listData.rotationObjectives.forEach(objective => {
      (<FormArray>this.rotationForm.get('objectives')).push(
        new FormGroup({
          'objectiveName' : new FormControl(objective, []),
          'objectiveContent' : new FormControl(null, [])
        })
      );
    })
  }
  //suggested method. Please change accordingly
  updateObjective(index : any) {
    (<FormArray>this.rotationForm.get('objectives')).at(index).patchValue({
      'objectiveContent' : ''
    })
  }

  addMethodOfAssessments() {
    this.listData.rotationObjectives.forEach(objective => {
      (<FormArray>this.rotationForm.get('methodOfAssessments')).push(
        new FormGroup({
          'methodName' : new FormControl(null, [])
        })
      );
    })
  }
  onDeleteMethodOfAssessments(index : any) {

    if((<FormArray>this.rotationForm.get('methodOfAssessments')).length != 1) {
      (<FormArray>this.rotationForm.get('methodOfAssessments')).removeAt(index);

    }
  }

  onChangeRotationName() {
    console.log(this.formControls.name)
    this.rotationForm.get('type')?.patchValue(this.formControls.name.type)
    this.rotationForm.get('code')?.patchValue(this.formControls.name.code)
    this.rotationForm.get('isOwnedByRotation')?.patchValue(this.formControls.name.isOwnedByRotation)
  }

  navigateBack() {
    this.router.navigateByUrl('/ec-setup/view-program')
  }

}
