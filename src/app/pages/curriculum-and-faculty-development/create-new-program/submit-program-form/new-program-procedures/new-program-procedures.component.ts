import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';
@Component({
  selector: 'app-new-program-procedures',
  templateUrl: './new-program-procedures.component.html',
  styleUrls: ['./new-program-procedures.component.scss']
})
export class NewProgramProceduresComponent implements OnInit {

  listData = data;

  proceduresLists: any[] = []
  procedureAllocationType: any;

  constructor(
    private router : Router, private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  yearlyForm !: FormGroup;
  basicAndAdvanceForm !: FormGroup;
  overallForm !: FormGroup;

  @ViewChild("selectProcedureGroup") selectProcedureGroup !: TemplateRef<any>;
  @ViewChild("selectResidencyLevel") selectResidencyLevel !: TemplateRef<any>;
  setFormId: any;
  procedureGroupValue: any;
  setFormName: any;
  residencyLevelValue: any;

  isAddProcedure : boolean = false;

  ngOnInit(): void {
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

  viewAddProcedure() {
    this.isAddProcedure = true
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
        r1 : new FormControl(0, []),
        r2 : new FormControl(0, []),
        r3 : new FormControl(0, []),
        r4 : new FormControl(0, []),
        r5 : new FormControl(0, []),
        isConfirmationRequired : new FormControl(null, [])
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
        advance : new FormControl(null, []),
        isConfirmationRequired : new FormControl(null, [])
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
        residencyLevel : new FormControl(null, []),
        isConfirmationRequired : new FormControl(null, [])
      })
    );    
  }
  onDeleteOverallFormObject(index: any) {
    if((<FormArray>this.overallForm.get('objects')).length != 1) {
      (<FormArray>this.overallForm.get('objects')).removeAt(index)
    }
  }
  
  addYearlyAllocation(){
    const object = {...this.yearlyForm.value.objects[0]}
    this.proceduresLists.push(this.yearlyForm.value.objects[0])
    this.isAddProcedure = false;
    console.log(this.yearlyForm.value.objects[0])
    this.yearlyForm.reset();
  }

  navigateBack() {
    this.router.navigateByUrl('/curriculum/view-program')
  }

  openModel(modal: any) {
    this.modalService.open(modal, { centered: true });
  }


}
