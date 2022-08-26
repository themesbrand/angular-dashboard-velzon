import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';


@Component({
  selector: 'app-form-research-evaluation',
  templateUrl: './form-research-evaluation.component.html',
  styleUrls: ['./form-research-evaluation.component.scss']
})
export class FormResearchEvaluationComponent implements OnInit {

  formObject: any = null;

  @Input('formObject') set setFormObject(data : any) {
    this.formObject = data
  }

  evaluationForm !: FormGroup;

  listData = data;

  choices : any = [
    {description: 'Unsatisfactory', value: '1'},
    {description: "Below Expectations", value: '2'},
    {description: "Meets Expectations", value: '3'},
    {description: "Exceeds Expectations", value: '3'},
    {description: "N/A", value: '4'}
  ]

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.evaluationForm = this.formBuilder.group({
      questionsArray : new FormArray([]),
      overallScore : new FormControl(null),
      strengths : new FormControl(null),
      improvement : new FormControl(null),
      actions : new FormControl(null),
    })
    this.addQuestionsArray()

    if(this.formObject != null) {
      this.evaluationForm.patchValue(this.formObject)

      this.questionsArrayControls.forEach((element : any) => {
        this.formObject.questionsArray.forEach((values : any) => {
          if(values.question === element.get('question')) {
            element.get('score')?.patchValue(values.score)
          }
          
        });
      })
    }

  }

  get evaluationFormValues () {
    return this.evaluationForm.value
  }

  addQuestionsArray() {
    this.listData.formData.forEach(element => {
      (<FormArray>this.evaluationForm.get('questionsArray')).push(
        new FormGroup({
          question : new FormControl(element.question),
          isTitle : new FormControl(element.isTitle),
          score : new FormControl(null),
        })
      );
    })
  }

  get questionsArrayControls() {
    return  (<FormArray>this.evaluationForm.get('questionsArray')).controls
  }
}
