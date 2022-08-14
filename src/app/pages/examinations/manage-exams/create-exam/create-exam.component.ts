import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from '../data';


@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {
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
    }
    console.log(this.createExamFormValues)
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

  createExamFormInit() {
    this.createExamForm = this.formBuilder.group({
      programType : new FormControl(null, []),
      programName : new FormControl(null, []),
      typeOfExam : new FormControl(null, []),
      resultsSource : new FormControl(null, []),
      
      examFrequency : new FormControl(null, []),
      
      information : new FormControl(null, []),
      
      eligibilityOne : new FormControl([]),
      eligibilityTwo : new FormArray([]),
      
      singleExamDates : new FormArray([]),
      multipleExamDates : new FormArray([]),
      
      startDateOfApplication : new FormControl([]),
      endDateOfApplication : new FormControl([]),

      earlyBidDays : new FormControl([]),
      fee : new FormControl([]),

      regularFees : new FormArray([]),
      withdrawalFees : new FormArray([]),

      appealFee : new FormControl([]),
      reAppealFee : new FormControl([]),
      appealWindow : new FormControl([]),
      reAppealWindow : new FormControl([]),
      //Define Rest
    })
    this.addEligibilityTwo();
    this.addMultipleExamDates();
    this.addRegularFees();
    this.addWithdrawalFees();
  }


  get createExamFormValues () {
    return this.createExamForm.value
  }

  get eligibilityTwoControls() {
    return (<FormArray>this.createExamForm.get('eligibilityTwo')).controls
  }
  get multipleExamDatesControls() {
    return (<FormArray>this.createExamForm.get('multipleExamDates')).controls
  }
  get singleExamDatesControls() {
    return (<FormArray>this.createExamForm.get('singleExamDates')).controls
  }
  get regularFeesControls() {
    return (<FormArray>this.createExamForm.get('regularFees')).controls
  }
  get withdrawalFeesControls() {
    return (<FormArray>this.createExamForm.get('withdrawalFees')).controls
  }
  addEligibilityTwo() {
    (<FormArray>this.createExamForm.get('eligibilityTwo')).push(
      new FormGroup({
        availableLevels : new FormControl(null),
        examType : new FormControl(null),
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
  addWithdrawalFees() {
    (<FormArray>this.createExamForm.get('withdrawalFees')).push(
      new FormGroup({
        numberOfDays: new FormControl(null),  
        refundPercentage: new FormControl(null)  
      })
    ) 
  }
  addRegularFees() {
    (<FormArray>this.createExamForm.get('regularFees')).push(
      new FormGroup({
        attempts: new FormControl(null),  
        fee: new FormControl(null)  
      })
    ) 
  }
  onDeleteEligibilityTwo(index : number) {
    if((<FormArray>this.createExamForm.get('eligibilityTwo')).length != 1) {
      (<FormArray>this.createExamForm.get('eligibilityTwo')).removeAt(index);

    }
  }
  onDeleteMultipleExamDates(index : number) {
    if((<FormArray>this.createExamForm.get('multipleExamDates')).length != 1) {
      (<FormArray>this.createExamForm.get('multipleExamDates')).removeAt(index);
    }
  }
  onDeleteRegularFees(index : number) {
    if((<FormArray>this.createExamForm.get('regularFees')).length != 1) {
      (<FormArray>this.createExamForm.get('regularFees')).removeAt(index);
    }
  }
  onDeleteWithdrawalFees(index : number) {
    if((<FormArray>this.createExamForm.get('withdrawalFees')).length != 1) {
      (<FormArray>this.createExamForm.get('withdrawalFees')).removeAt(index);
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
}
