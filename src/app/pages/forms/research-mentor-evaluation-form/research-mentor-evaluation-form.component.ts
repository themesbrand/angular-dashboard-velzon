import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from '../data'
@Component({
  selector: 'app-research-mentor-evaluation-form',
  templateUrl: './research-mentor-evaluation-form.component.html',
  styleUrls: ['./research-mentor-evaluation-form.component.scss']
})
export class ResearchMentorEvaluationFormComponent implements OnInit {

  listData = data;

  todayDate : Date = new Date();

  breadCrumbItems!: Array<{}>;

  applicationHeaderForm !: FormGroup;
  surveyForm : FormGroup = new FormGroup({
    'questionOne' : new FormArray([]),
    'questionTwo' : new FormArray([]),
    'questionThree' : new FormArray([]),
    'questionFour' : new FormArray([]),
    'questionFive' : new FormArray([]),
    'questionSix' : new FormArray([]),
    'questionSeven' : new FormArray([]),
    'questionEight' : new FormArray([]),
    'questionNine' : new FormArray([]),
    'questionTen' : new FormArray([]),
    'questionEleven' : new FormArray([]),
    'questionTwelve' : new FormArray([]),
    'questionThirteen' : new FormArray([]),
    'questionFourteen' : new FormArray([]),
    'questionFifteen' : new FormArray([]),
    'questionSeventeen' : new FormArray([]),
    'questionEighteen' : new FormArray([]),
    'questionNineteen' : new FormArray([]),
  });

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'},
    {description: "N/A", value: '5'}
  ];


  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "RESEARCH MENTOR EVALUATION FORM", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      'nameOfMentor' : new FormControl(null, []),
      'program' : new FormControl(null, []),
      'residentLevel' : new FormControl(null, []),
      'stageOfResearch' : new FormControl(null, [])
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    console.log(history.state)

    
    this.applicationHeaderForm.patchValue({
      program : history.state.programName,
      residentLevel :history.state.yearCode
    })

  }

  onCheckChange(event : any, choice : any, controlName: any){
    if(event.target.checked){
      (<FormArray>this.applicationHeaderForm.get(controlName)).push(
        new FormControl(event.target.value)
      );

    }
    else{
      let i: number = 0;
  
      const formArray = (<FormArray>this.applicationHeaderForm.get(controlName));

      formArray.controls.forEach(ctrl  => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.applicationHeaderForm.value)
  }
  onCheckChangeSurvey(event : any, choice : any, controlName: any){
    if(event.target.checked){
      (<FormArray>this.surveyForm.get(controlName)).push(
        new FormControl(event.target.value)
      );

    }
    else{
      let i: number = 0;
  
      const formArray = (<FormArray>this.surveyForm.get(controlName));

      formArray.controls.forEach(ctrl  => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.surveyForm.value)
  }

}
