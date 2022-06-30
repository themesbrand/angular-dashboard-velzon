import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    'overallQualityOfRotation' : new FormArray([]),
  });

  public choices = [
    {description: 'Unsatisfactory', value: '1'},
    {description: "Deficient", value: '2'},
    {description: "Good", value: '3'},
    {description: "Outstanding", value: '4'},
    {description: "N/A", value: '5'}
  ];
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: " ROTATION EVALUATION FORM", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      'program' : new FormControl(null, []),
      'academicYear' : new FormControl(null, []),
      'rotation' : new FormControl(null, []),
      'trainerCenterName' : new FormControl(null, []),
      'block' : new FormControl(null, []),
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
      block : blockValue,
      academicYear : history.state.academicYear,
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
