import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from './data';
@Component({
  selector: 'app-preview-rotation',
  templateUrl: './preview-rotation.component.html',
  styleUrls: ['./preview-rotation.component.scss']
})
export class PreviewRotationComponent implements OnInit {
    
  rotationForm !: FormGroup
  listData = data;
  breadCrumbItems!: Array<{}>;

  constructor(private formBuilder : FormBuilder,
    private router : Router) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "View Program", link: '/curriculum/view-program'},
      { label: "View Rotation", active : true }
    ];
    this.formInit();
  }

  formInit() {
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

    this.rotationForm.patchValue(this.listData.rotationObject)
    this.addObjectives();
    this.addMethodOfAssessments();
  }
  get formControls() {
    return this.rotationForm.value;
  }
  get objectiveControls() {
    return (<FormArray>this.rotationForm.get('objectives')).controls;
  }
  addObjectives() {
    this.listData.rotationObject.objectives.forEach(objective => {
      (<FormArray>this.rotationForm.get('objectives')).push(
        new FormGroup({
          'objectiveName' : new FormControl(objective.objectiveName),
          'objectiveContent' : new FormControl(objective.objectiveContent)
        })
      );
    })
  }
  get methodOfAssessmentsControls() {
    return (<FormArray>this.rotationForm.get('methodOfAssessments')).controls;
  }
  addMethodOfAssessments() {
    this.listData.rotationObject.methodOfAssessments.forEach(methods => {
      (<FormArray>this.rotationForm.get('methodOfAssessments')).push(
        new FormGroup({
          'methodName' : new FormControl(methods.methodName)
        })
      );
    })
  }

  navigateBack() {
    this.router.navigateByUrl('/curriculum/view-program')
  }

}
