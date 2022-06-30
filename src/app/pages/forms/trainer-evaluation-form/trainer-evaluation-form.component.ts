import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from '../data'

@Component({
  selector: 'app-trainer-evaluation-form',
  templateUrl: './trainer-evaluation-form.component.html',
  styleUrls: ['./trainer-evaluation-form.component.scss']
})
export class TrainerEvaluationFormComponent implements OnInit {

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
    'questionSixteen' : new FormArray([]),
    'questionSeventeen' : new FormArray([]),
    'questionEighteen' : new FormArray([]),
    'questionNineteen' : new FormArray([]),
  });

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'}
  ];

  public choicesSub = [
    {description: '1', value: '1'},
    {description: "2", value: '2'},
    {description: "3", value: '3'},
    {description: "4", value: '4'},
    {description: "5 or More", value: '5+'}
  ];

  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Trainer Evaluation Form", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      'nameOfTrainer' : new FormControl(null, []),
      'trainerCenterName' : new FormControl(null, []),
      'program' : new FormControl(null, []),
      'rotation' : new FormControl(null, []),
      'block' : new FormControl(null, []),
      'weeksOfWork' : new FormArray([]),
      'frequencyOfContacts' : new FormArray([])
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    console.log(history.state)

    const splitBlock = history.state.block.split(" - ", 2); 

    console.log(splitBlock)
    const fromDate = splitBlock[0].slice(1)
    const toDate = splitBlock[1].slice(0,-1)
    const blockValue = `From : ${fromDate} To : ${toDate}`

    this.applicationHeaderForm.patchValue({
      program : history.state.programName,
      block : blockValue
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
