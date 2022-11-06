import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  @ViewChild("selectProcedureGroup") selectProcedureGroup !: TemplateRef<any>;
  @ViewChild("selectResidencyLevel") selectResidencyLevel !: TemplateRef<any>;
  setFormId: any;
  procedureGroupValue: any;
  setFormName: any;
  residencyLevelValue: any;

  constructor(private router : Router, private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Curriculum and Faculty Development", link: '/curriculum'},
      { label: "Starting New Program", link: '/curriculum/new-program' },
      { label: "View Curriculum", link: '/curriculum/view-program' },
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

  setSelectProcedureGroup(i : any, selectForm : any) {
    this.openModel(this.selectProcedureGroup)
    this.setFormId = i
    this.setFormName = selectForm
  }
  setSelectResidencyLevel(i : any) {
    this.openModel(this.selectResidencyLevel)
    this.setFormId = i
  }

  onSaveProcedureGroup() {
    console.log(this.yearlyFormObjects)
    if(this.setFormName === 'Yearly') {
      this.yearlyFormObjects[this.setFormId].get('category')?.patchValue(this.procedureGroupValue)
    }
    if(this.setFormName === 'Basic and Advance') {
      this.basicAndAdvanceFormObjects[this.setFormId].get('category')?.patchValue(this.procedureGroupValue)
    }
    if(this.setFormName === 'Overall') {
      this.overallFormObjectsObjects[this.setFormId].get('category')?.patchValue(this.procedureGroupValue)
    }
    this.procedureGroupValue = null
    this.modalService.dismissAll();
  }
  
  onSaveResidencyLevel() {
   
    this.overallFormObjectsObjects[this.setFormId].get('residencyLevel')?.patchValue(this.residencyLevelValue)
    this.residencyLevelValue = null
    this.modalService.dismissAll();
  }
  
  navigateBack() {
    this.router.navigateByUrl('/curriculum/view-program')
  }

  openModel(modal: any) {
    this.modalService.open(modal, { centered: true });
  }


}
