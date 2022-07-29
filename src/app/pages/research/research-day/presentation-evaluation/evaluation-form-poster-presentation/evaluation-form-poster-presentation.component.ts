import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-evaluation-form-poster-presentation',
  templateUrl: './evaluation-form-poster-presentation.component.html',
  styleUrls: ['./evaluation-form-poster-presentation.component.scss']
})
export class EvaluationFormPosterPresentationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  evaluationForm !: FormGroup;


  constructor(    
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
    ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: '/research/research-day'},
      { label: "Presentation Evaluation", link: '/research/research-day/presentation-evaluation'},
      { label: "Evaluation Form", active : true }
    ];
    this.evaluationFormInit();

  }

  evaluationFormInit() {
    this.evaluationForm = this.formBuilder.group({
      questionsArray : new FormArray([]),
      totalScore : new FormControl(null),
      finalScore : new FormControl(null),
    })
    this.addQuestionsArray()
  }

  get evaluationFormValues () {
    return this.evaluationForm.value
  }

  addQuestionsArray() {
    this.listData.formObjects.forEach(element => {
      (<FormArray>this.evaluationForm.get('questionsArray')).push(
        new FormGroup({
          question : new FormControl(element.question),
          isTitle : new FormControl(element.isTitle),
          index : new FormControl(element.index),
          score : new FormControl(null),
          notApplicable : new FormControl(null)
        })
      );
    })
  }

  get questionsArrayControls() {
    return  (<FormArray>this.evaluationForm.get('questionsArray')).controls
  }

  onChangeQuestion(event : any, index : any) {
    if(this.questionsArrayControls[index].value.score != null) {
      this.questionsArrayControls[index].get('notApplicable')?.patchValue(false)
    }
    this.calculateScores()
  }

  onCheckQuestion(event : any, index : any) {
    if(this.questionsArrayControls[index].value.notApplicable === true) {
      this.questionsArrayControls[index].get('score')?.patchValue(null)
    }
    this.calculateScores()
  }

  calculateScores() {
    
    let total = 0;
    let numberOfApplicableQuestions = 0;

    this.questionsArrayControls.forEach(element => {
      if( element.value.isTitle === false) {
        total = total + element.value.score
      }
      if(element.value.isTitle === false && element.value.notApplicable === false) {
        numberOfApplicableQuestions += 1;
      }
    })

    const finalScore = (total / (5 * numberOfApplicableQuestions))*100

    console.log(numberOfApplicableQuestions)

    this.evaluationForm.get('totalScore')?.patchValue(total)
    this.evaluationForm.get('finalScore')?.patchValue(finalScore)

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }
}
