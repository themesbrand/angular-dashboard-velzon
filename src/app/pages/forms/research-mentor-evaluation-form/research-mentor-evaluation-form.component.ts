import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    'questionOne' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionTwo' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionThree' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionFour' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionFive' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionSix' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionSeven' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionEight' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionNine' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionTen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionEleven' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionTwelve' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionThirteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionFourteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionFifteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionSeventeen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionEighteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'questionNineteen' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
  });

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'},
    {description: "N/A", value: '5'}
  ];


  
  constructor(private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "BLOCK DIAGRAM", link: '/residency-block-diagram'},
      { label: "RESEARCH MENTOR EVALUATION FORM", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      'traineeName' : new FormControl(null, []),
      'traineeLevel' : new FormControl(null, []),
      'omsbNumber' : new FormControl(null, []),
      'program' : new FormControl(null, []),
      'nameOfMentor' : new FormControl(null, []),
      'stageOfResearch' : new FormControl(null, [])
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    console.log(history.state)

    
    this.applicationHeaderForm.patchValue({
      program : history.state.programName,
      traineeName : history.state.traineeName,
      traineeLevel : history.state.level,
      omsbNumber : history.state.omsb,
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
