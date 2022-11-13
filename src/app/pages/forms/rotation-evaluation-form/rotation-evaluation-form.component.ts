import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from '../data'
@Component({
  selector: 'app-rotation-evaluation-form',
  templateUrl: './rotation-evaluation-form.component.html',
  styleUrls: ['./rotation-evaluation-form.component.scss']
})
export class RotationEvaluationFormComponent implements OnInit {


  listData = data;

  todayDate : Date = new Date();

  breadCrumbItems!: Array<{}>;

  applicationHeaderForm !: FormGroup;
  surveyForm : FormGroup = new FormGroup({
    'questionOne' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionTwo' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionThree' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionFour' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionFive' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionSix' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionSeven' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionEight' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionNine' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionTen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionEleven' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionTwelve' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionThirteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionFourteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionFifteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionSixteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionSeventeen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionEighteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'questionNineteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
    'overallQualityOfRotation' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false) , new FormControl(false)]),
  });

  public choices = [
    {description: 'Unsatisfactory', value: '1'},
    {description: "Deficient", value: '2'},
    {description: "Good", value: '3'},
    {description: "Very Good", value: '3'},
    {description: "Outstanding", value: '4'},
    {description: "N/A", value: '5'}
  ];
  
  constructor(private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "BLOCK DIAGRAM", link: '/residency-block-diagram'},
      { label: " ROTATION EVALUATION FORM", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      subjectName : new FormControl(null, []),
      status : new FormControl(null, []),
      employer : new FormControl(null, []),
      program : new FormControl(null, []),
      rotation : new FormControl(null, []),
      evaluationDates : new FormControl(null, []),
      evaluatorName : new FormControl(null, []),
      evaluatorStatus : new FormControl(null, []),
      evaluatorEmployer : new FormControl(null, []),
      evaluatorProgram : new FormControl(null, []),
    })

    this.patchHeadingValues()
  }

  get getControlsValues() {
    return this.applicationHeaderForm.value
  }
  
  patchHeadingValues() {
    const splitBlock = history.state.evaluationDates.split(" - ", 2); 
    const fromDate = splitBlock[0].slice(1)
    const toDate = splitBlock[1].slice(0,-1)
    const blockValue = `From : ${fromDate} To : ${toDate}`

    this.applicationHeaderForm.patchValue({
      subjectName : history.state.subjectName,
      status : history.state.status,
      employer: history.state.employer,
      program: history.state.program,
      rotation: history.state.rotation,
      evaluationDates: blockValue,
      
      evaluatorName: history.state.evaluatorName,
      evaluatorStatus: history.state.evaluatorStatus,
      evaluatorEmployer: history.state.evaluatorEmployer,
      evaluatorProgram: history.state.evaluatorProgram,
    })

  }

  getControlsSurveyForm(controlName : any) {
    return (<FormArray>this.surveyForm.get(controlName)).controls
  }

  onCheckChangeSurvey(event : any, choice : any, controlName: any){
    this.getControlsSurveyForm(controlName).forEach((element, index) => {
      if(index === choice) {
        element.patchValue(true);
      } else {
        element.patchValue(false);
      }
    })   
  }

  navigateBack() {
    this.router.navigateByUrl('/residency-block-diagram')
  }


}
