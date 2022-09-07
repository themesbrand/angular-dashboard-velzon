import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from '../data';

@Component({
  selector: 'app-oc-create-exams',
  templateUrl: './oc-create-exams.component.html',
  styleUrls: ['./oc-create-exams.component.scss']
})
export class OcCreateExamsComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;

  examData: any = null;

  currentDate = new Date();

  @Input('examData') 
  set isExamData(data: any){
    this.examData = data;
  };

  programNames: any[] = [];
  createExamForm !: FormGroup;
  
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createExamFormInit();
    this.formOnChange();

    if(this.examData) {
      this.createExamForm.patchValue(this.examData)
      this.examData.singleExamDates.forEach((element : any) => {
        (<FormArray>this.createExamForm.get('singleExamDates')).push(
          new FormGroup({
            programName: new FormControl(element.programName),
            startDateOfExam : new FormControl(element.startDateOfExam),
            endDateOfExam : new FormControl(element.endDateOfExam),
            fromTimeOfExam : new FormControl(element.fromTimeOfExam),
            toTimeOfExam : new FormControl(element.toTimeOfExam),
            seats : new FormControl(element.seats),
            venue : new FormControl(element.venue),
          })
        ) 
      })
      const regularFees = this.createExamForm.get('regularFees') as FormArray
      regularFees.controls = []
      const cancellationFees = this.createExamForm.get('cancellationFees') as FormArray
      cancellationFees.controls = []
      const reschedulingFees = this.createExamForm.get('reschedulingFees') as FormArray
      reschedulingFees.controls = []

      this.examData.regularFees.forEach((element : any) => {
        (<FormArray>this.createExamForm.get('regularFees')).push(
          new FormGroup({
            attempts: new FormControl(element.attempts),  
            fee: new FormControl(element.fee) 
          })
        ) 
      })
      this.examData.cancellationFees.forEach((element : any) => {
        (<FormArray>this.createExamForm.get('cancellationFees')).push(
          new FormGroup({
            attempts: new FormControl(element.attempts),  
            fee: new FormControl(element.fee) 
          })
        ) 
      })
      this.examData.reschedulingFees.forEach((element : any) => {
        (<FormArray>this.createExamForm.get('reschedulingFees')).push(
          new FormGroup({
            attempts: new FormControl(element.attempts),  
            fee: new FormControl(element.fee) 
          })
        ) 
      })
    }
    console.log(this.createExamFormValues)
  }

  createExamFormInit() {
    this.createExamForm = this.formBuilder.group({

      examTitle : new FormControl(null, []),
      announcementDate : new FormControl(null, []),
      registrationStartDate : new FormControl(null, []),
      registrationCutOffWindow : new FormControl(null, []),
      resultsSource : new FormControl(null, []),
      information : new FormControl(null, []),

      earlyBidDays : new FormControl([]),
      fee : new FormControl([]),

      regularFees : new FormArray([]),
      cancellationFees : new FormArray([]),
      reschedulingFees : new FormArray([]),

      appealFee : new FormControl([]),
      reAppealFee : new FormControl([]),
      appealWindow : new FormControl([]),
      reAppealWindow : new FormControl([]),

      examFrequency : new FormControl(null, []),
      programType : new FormControl(null, []),
      programName : new FormControl(null, []),

      singleExamDates : new FormArray([]),
      multipleExamDates : new FormArray([]),
      
      eligibility : new FormControl(null, []),
      
      reAttemptRules : new FormArray([])
            
    })
    this.addRegularFees();
    this.addCancellationFees();
    this.addReschedulingFees();
    this.addMultipleExamDates();
  }
  formOnChange() {
    this.createExamForm.valueChanges.subscribe(res => {
      console.log(res)
      if(res.programType === "Residency Program") {
        this.programNames = this.listData.residencyPrograms
      }
      if(res.programType === 'Fellowship Program') {
        this.programNames = this.listData.fellowshipPrograms
      }
      if(res.programType === "GFP program") {
        this.programNames = this.listData.gfpPrograms
      }   
    })
  }

  get createExamFormValues () {
    return this.createExamForm.value
  }

  get regularFeesControls() {
    return (<FormArray>this.createExamForm.get('regularFees')).controls
  }
  get cancellationFeesControls() {
    return (<FormArray>this.createExamForm.get('cancellationFees')).controls
  }
  get reschedulingFeesControls() {
    return (<FormArray>this.createExamForm.get('reschedulingFees')).controls
  }
  get multipleExamDatesControls() {
    return (<FormArray>this.createExamForm.get('multipleExamDates')).controls
  }
  get singleExamDatesControls() {
    return (<FormArray>this.createExamForm.get('singleExamDates')).controls
  }
  get reAttemptRulesControls() {
    return (<FormArray>this.createExamForm.get('reAttemptRules')).controls
  }
  addRegularFees() {
    (<FormArray>this.createExamForm.get('regularFees')).push(
      new FormGroup({
        attempts: new FormControl(null),  
        fee: new FormControl(null)  
      })
    ) 
  }
  addCancellationFees() {
    (<FormArray>this.createExamForm.get('cancellationFees')).push(
      new FormGroup({
        attempts: new FormControl(null),  
        fee: new FormControl(null)  
      })
    ) 
  }
  addReschedulingFees() {
    (<FormArray>this.createExamForm.get('reschedulingFees')).push(
      new FormGroup({
        attempts: new FormControl(null),  
        fee: new FormControl(null)  
      })
    ) 
  }
  addMultipleExamDates() {
    (<FormArray>this.createExamForm.get('multipleExamDates')).push(
      new FormGroup({
        daysOfWeek: new FormControl(null)  
        //Define Rest      
      })
    ) 
  }
  addSingleExamDates(programName : any) {
    (<FormArray>this.createExamForm.get('singleExamDates')).push(
      new FormGroup({
        programName: new FormControl(programName),
        startDateOfExam : new FormControl(null, []),
        endDateOfExam : new FormControl(null, []),
        fromTimeOfExam : new FormControl(null, []),
        toTimeOfExam : new FormControl(null, []),
        seats : new FormControl(null, []),
        venue : new FormControl(null, []),
      })
    ) 
  }
  addReAttemptRules() {
    const formArray = (<FormArray>this.createExamForm.get('reAttemptRules'))
    if (formArray.length < 2) {
      
      (<FormArray>this.createExamForm.get('reAttemptRules')).push(
        new FormGroup({
          examType : new FormControl(this.createExamFormValues.examTitle),
          reAttempts : new FormControl(null, []),
          maxNoOfDaysAfterReAttempt : new FormControl(null, []),
          minNoOfDaysAfterReAttempt : new FormControl(null, []),
          nationality : new FormControl(null, []),
        })
      ) 
    }
  }

  
  onDeleteRegularFees(index : number) {
    if((<FormArray>this.createExamForm.get('regularFees')).length != 1) {
      (<FormArray>this.createExamForm.get('regularFees')).removeAt(index);
    }
  }
  onDeleteCancellationFees(index : number) {
    if((<FormArray>this.createExamForm.get('cancellationFees')).length != 1) {
      (<FormArray>this.createExamForm.get('cancellationFees')).removeAt(index);
    }
  }
  onDeleteReschedulingFees(index : number) {
    if((<FormArray>this.createExamForm.get('reschedulingFees')).length != 1) {
      (<FormArray>this.createExamForm.get('reschedulingFees')).removeAt(index);
    }
  }  
  onDeleteMultipleExamDates(index : number) {
    if((<FormArray>this.createExamForm.get('multipleExamDates')).length != 1) {
      (<FormArray>this.createExamForm.get('multipleExamDates')).removeAt(index);
    }
  }
  onDeleteReAttemptRules(index : number) {
    if((<FormArray>this.createExamForm.get('reAttemptRules')).length != 1) {
      (<FormArray>this.createExamForm.get('reAttemptRules')).removeAt(index);
    }
  }

  onChangeProgramName(event : any) {
    const formArray = (<FormArray>this.createExamForm.get('singleExamDates'))
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }

    this.createExamFormValues.programName.forEach((element : any)=> {
      this.addSingleExamDates(element)
    });

  }

  onChangeTitle(event : any) {
    const formArray = (<FormArray>this.createExamForm.get('reAttemptRules'))
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
    this.addReAttemptRules();

  }
}
