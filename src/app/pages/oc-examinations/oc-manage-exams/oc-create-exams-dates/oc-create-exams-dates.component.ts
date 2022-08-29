import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from '../data';

@Component({
  selector: 'app-oc-create-exams-dates',
  templateUrl: './oc-create-exams-dates.component.html',
  styleUrls: ['./oc-create-exams-dates.component.scss']
})
export class OcCreateExamsDatesComponent implements OnInit {

  examDateData: any;

  @Input('examDateData') 
  set setExamDateData(data: any){
    console.log(data)
    this.examDateData = data;
  };

  listData = data;
  createExamDatesForm !: FormGroup;
  currentDate : any = new Date();

  programNames: any[] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createExamFormInit();
    this.formOnChange();
    if(this.examDateData) {
      this.createExamDatesForm.patchValue(this.examDateData)
    }

  }
  createExamFormInit() {
    this.createExamDatesForm = this.formBuilder.group({
      examType : new FormControl(null, []),
      programType : new FormControl(null, []),
      programName : new FormControl(null, []),
      endDateOfApplication: new FormControl(null, []),
      dateOfExam: new FormControl(null, []),
      fromTimeOfExam: new FormControl(null, []),
      toTimeOfExam: new FormControl(null, []),
      seats: new FormControl(null, []),
      venue: new FormControl(null, []),
      

    })
  }

  formOnChange() {
    this.createExamDatesForm.valueChanges.subscribe(res => {
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

  get createExamFormValues() {
    return this.createExamDatesForm.value
  }

}
