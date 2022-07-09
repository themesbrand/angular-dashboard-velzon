import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from './data'

@Component({
  selector: 'app-allocate-procedure',
  templateUrl: './allocate-procedure.component.html',
  styleUrls: ['./allocate-procedure.component.scss']
})
export class AllocateProcedureComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;
  procedureAllocationType: any;

  yearlyForm !: FormGroup;
  basicAndAdvanceForm !: FormGroup;
  overallForm !: FormGroup;

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "View Program", link: '/ec-setup/view-program'},
      { label: "Allocate Procedure", active : true }
    ];
    this.initForms()
  }

  initForms() {
    this.yearlyForm = this.formBuilder.group({
      objects : new FormArray([])
    })
    this.basicAndAdvanceForm = this.formBuilder.group({
      objects : new FormArray([])
    })
    this.overallForm = this.formBuilder.group({
      objects : new FormArray([])
    })

    this.addYearlyFormObjects();
    this.addBasicAndAdvanceFormObjects();
    this.addOverallFormObjects();
  }

  get yearlyFormObjects() {
    return (<FormArray>this.yearlyForm.get('objects')).controls;
  }
  get basicAndAdvanceFormObjects() {
    return (<FormArray>this.basicAndAdvanceForm.get('objects')).controls;
  }
  get overallFormObjectsObjects() {
    return (<FormArray>this.overallForm.get('objects')).controls;
  }

  addYearlyFormObjects() {
    (<FormArray>this.yearlyForm.get('objects')).push(
      new FormGroup({
        category : new FormControl(null, []),
        name : new FormControl(null, []),
        r1 : new FormControl(null, []),
        r2 : new FormControl(null, []),
        r3 : new FormControl(null, []),
        r4 : new FormControl(null, []),
        r5 : new FormControl(null, []),
      })
    );    
  }
  onDeleteYearlyFormObject(index: any) {
    if((<FormArray>this.yearlyForm.get('objects')).length != 1) {
      (<FormArray>this.yearlyForm.get('objects')).removeAt(index)
    }
  }

  addBasicAndAdvanceFormObjects() {
    (<FormArray>this.basicAndAdvanceForm.get('objects')).push(
      new FormGroup({
        category : new FormControl(null, []),
        name : new FormControl(null, []),
        basic : new FormControl(null, []),
        advance : new FormControl(null, [])
      })
    );    
  }
  onDeleteBasicAndAdvanceFormObject(index: any) {
    if((<FormArray>this.basicAndAdvanceForm.get('objects')).length != 1) {
      (<FormArray>this.basicAndAdvanceForm.get('objects')).removeAt(index)
    }
  }

  addOverallFormObjects() {
    (<FormArray>this.overallForm.get('objects')).push(
      new FormGroup({
        category : new FormControl(null, []),
        name : new FormControl(null, []),
        overall : new FormControl(null, []),
        residencyLevel : new FormControl(null, [])
      })
    );    
  }
  onDeleteOverallFormObject(index: any) {
    if((<FormArray>this.overallForm.get('objects')).length != 1) {
      (<FormArray>this.overallForm.get('objects')).removeAt(index)
    }
  }

  
  navigateBack() {
    this.router.navigateByUrl('/ec-setup/view-program')
  }

}
