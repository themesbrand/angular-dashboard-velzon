import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from '../data'
@Component({
  selector: 'app-six-month-and-annual-evaluation-form',
  templateUrl: './six-month-and-annual-evaluation-form.component.html',
  styleUrls: ['./six-month-and-annual-evaluation-form.component.scss']
})
export class SixMonthAndAnnualEvaluationFormComponent implements OnInit {

  listData = data;

  todayDate : Date = new Date();

  breadCrumbItems!: Array<{}>;

  applicationHeaderForm !: FormGroup;
  surveyForm : FormGroup = new FormGroup({
    'Q1' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q2' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q3' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q4' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q5' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q6' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q7' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q8' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q9' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q10' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q11' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q12' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'Q13' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'overallSixMonthEvaluation' : new FormArray([new FormControl(false), new FormControl(false), new FormControl(false), new FormControl(false)]),
    'overallAnnualEvaluation' : new FormArray([new FormControl(false), new FormControl(false)]),
    'annualEvaluationOther' : new FormControl('', [])
  });

  public choices = [
    {description: 'Unsatisfactory', value: '1'},
    {description: "Below Expectations", value: '2'},
    {description: "Meets Expectations", value: '3'},
    {description: "Exceeds Expectations", value: '3'},
    {description: "Not Evaluated", value: '4'}
  ];
  public choicesSubs = [
    {description: 'Unsatisfactory', value: '1'},
    {description: "Below Expectations", value: '2'},
    {description: "Meets Expectations", value: '3'},
    {description: "Exceeds Expectations", value: '3'}
  ];
  public choicesSubs2 = [
    {description: 'Promotion to next academic year', value: '1'},
    {description: "Other", value: '2'}
  ];
  traineeName: any;
  
  constructor(private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "BLOCK DIAGRAM", link: '/residency-block-diagram'},
      { label: "Six monthly and Annual Evaluation", active : true }
    ];
    console.log(history.state)

    this.headerFormInit()
    
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      'evaluationType' : new FormControl(null, []),
      'traineeName' : new FormControl(null, []),
      'traineeLevel' : new FormControl(null, []),
      'omsbNumber' : new FormControl(null, []),
      'program' : new FormControl(null, []),
      'rotationFrom' : new FormControl(null, []),
      'rotationTo' : new FormControl(null, []),
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    const splitBlock = history.state.block.split(" - ", 2); 
    const fromDate = splitBlock[0].slice(1)
    const toDate = splitBlock[1].slice(0,-1)
    const blockValue = `From : ${fromDate} To : ${toDate}`

    this.applicationHeaderForm.patchValue({
      program : history.state.programName,
      block : blockValue,
      traineeName : history.state.traineeName,
      traineeLevel : history.state.level,
      omsbNumber : history.state.omsb,
    })
    this.traineeName = history.state.traineeName

  }

  getControlsHeadingForm(controlName : any) {
    return (<FormArray>this.applicationHeaderForm.get(controlName)).controls
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
