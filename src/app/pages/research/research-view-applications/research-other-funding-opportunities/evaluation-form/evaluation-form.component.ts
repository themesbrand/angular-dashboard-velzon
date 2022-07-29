import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'
@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})
export class EvaluationFormComponent implements OnInit {

  evaluationForm !: FormGroup

  listData = data;
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.evaluationFormInit()
  }

  evaluationFormInit() {

    this.evaluationForm = this.formBuilder.group({
      questionSetOne : new FormArray([]),
      questionSetTwo : new FormArray([]),
      questionSetThree : new FormArray([])
    })

    this.listData.questionSetOne.forEach((element, index) => {
      (<FormArray>this.evaluationForm.get('questionSetOne')).push(
        new FormGroup({
          question : new FormControl(element),
          score : new FormControl(),
        })
      )
    })
    this.listData.questionSetTwo.forEach((element, index) => {
      (<FormArray>this.evaluationForm.get('questionSetTwo')).push(
        new FormGroup({
          question : new FormControl(element),
          score : new FormControl(),
        })
      )
    })
    this.listData.questionSetThree.forEach((element, index) => {
      (<FormArray>this.evaluationForm.get('questionSetThree')).push(
        new FormGroup({
          question : new FormControl(element),
          score : new FormControl(),
        })
      )
    })
  }

  submit() {
    console.log(this.questionSetOneArray[0].value.score)
    console.log(this.questionSetOneArray[0].value)
    console.log(this.questionSetThreeArray[0].value)
  }

  get questionSetOneArray () {
    return (<FormArray>this.evaluationForm.get('questionSetOne')).controls;
  }
  get questionSetTwoArray () {
    return (<FormArray>this.evaluationForm.get('questionSetTwo')).controls;
  }
  get questionSetThreeArray () {
    return (<FormArray>this.evaluationForm.get('questionSetThree')).controls;
  }



}
