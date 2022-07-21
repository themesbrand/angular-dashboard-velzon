import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-create-program-type',
  templateUrl: './create-program-type.component.html',
  styleUrls: ['./create-program-type.component.scss']
})
export class CreateProgramTypeComponent implements OnInit {
  listData = data;
  breadCrumbItems!: Array<{}>;

  programTypeControl: any
  typeControl: any

  selectedProgramTypeIndex : any ;

  constructor(private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  programTypeForm !: FormGroup;
  qualificationCriteriaForm !: FormGroup;

  @ViewChild("qualificationCriteria") qualificationCriteria !: TemplateRef<any>;


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "Create Project Type", active : true }
    ];
    this.programTypeFormInit()
  }

  programTypeFormInit() {
    this.programTypeForm = this.formBuilder.group({
      programTypes : new FormArray([])
    })

    this.patchFormArray()
  }

  get formValues () {
    return this.programTypeForm.value
  }

  patchFormArray() {
    console.log(this.listData.programTypeTableData)
    if(this.listData.programTypeTableData.length === 0) {
      this.onAdd()
    }
    this.listData.programTypeTableData.forEach(element => {
      (<FormArray>this.programTypeForm.get('programTypes')).push(
        new FormGroup({
          programType : new FormControl(element.programType),
          programTypeEdit : new FormControl(''),
          type : new FormControl(element.type),
          typeEdit : new FormControl(''),
          isEdit : new FormControl(element.isEdit),
          qualificationCriteria : new FormControl(element.qualificationCriteria)
        })
      );
    })
  }
  
  // Program Type Array Functions
  get getProgramTypesControls() {
    return (<FormArray>this.programTypeForm.get('programTypes')).controls;
  }
  onAdd() {
    (<FormArray>this.programTypeForm.get('programTypes')).insert(0,
      new FormGroup({
        programType : new FormControl(''),
        programTypeEdit : new FormControl(''),
        type : new FormControl(''),
        typeEdit : new FormControl(''),
        qualificationCriteria : new FormControl(''),
        isEdit : new FormControl(true)
      })
    );
  }
  onEdit(i : any) {
    const object = this.getProgramTypesControls[i].value
    this.getProgramTypesControls[i].patchValue({
      programTypeEdit : object.programType,
      typeEdit : object.type,
      isEdit : true
    })
  }
  onDelete(i : any) {
    (<FormArray>this.programTypeForm.get('programTypes')).removeAt(i);
  }
  onSave(i : any) {
    const object = this.getProgramTypesControls[i].value

    this.getProgramTypesControls[i].get('isEdit')?.patchValue(false)
    this.getProgramTypesControls[i].get('programType')?.patchValue(object.programTypeEdit)
    this.getProgramTypesControls[i].get('type')?.patchValue(object.typeEdit)
    object.typeEdit = ''
    object.programTypeEdit = ''

  }
  // End of Program Type Array Functions


  selectQualificationCriteria(qualificationCriteria : any[], programType : any, programTypeIndex : any) {
    this.selectedProgramTypeIndex = programTypeIndex

    this.qualificationCriteriaForm = this.formBuilder.group({
      qualificationCriteriaArray : new FormArray([])
    })

    if(qualificationCriteria) {
      qualificationCriteria.forEach(element => {
        (<FormArray>this.qualificationCriteriaForm.get('qualificationCriteriaArray')).push(
          new FormGroup({          
            sponsoredBy: new FormControl(element.sponsoredBy), 
            sponsoredByEdit: new FormControl(null), 
            isEmployed : new FormControl(element.isEmployed), 
            isApprovedByEmployer: new FormControl(element.isApprovedByEmployer), 
            isSelectionExamRequired : new FormControl(element.isSelectionExamRequired), 
            isSelectionExamCutOffScore : new FormControl(element.isSelectionExamCutOffScore), 
            isSpecialtyCertificate : new FormControl(element.isSpecialtyCertificate), 
            isValidCertificates: new FormControl(element.isValidCertificates), 
            isInternationallyQualified : new FormControl(element.isInternationallyQualified),
            isEdit : new FormControl(false)
          })
        );
      })
    }
    this.modalService.dismissAll()
    this.openModal(this.qualificationCriteria, 'xl')
  }

  get formQualificationCriteriaValues () {
    return this.qualificationCriteriaForm.value
  }

  get getQualificationCriteriaControls() {
    return (<FormArray>this.qualificationCriteriaForm.get('qualificationCriteriaArray')).controls;
  }

  onAddQualificationCriteria() {
    (<FormArray>this.qualificationCriteriaForm.get('qualificationCriteriaArray')).insert(0,
      new FormGroup({          
        sponsoredBy: new FormControl(null), 
        sponsoredByEdit: new FormControl(null), 
        isEmployed : new FormControl(null), 
        isApprovedByEmployer: new FormControl(null), 
        isSelectionExamRequired : new FormControl(null), 
        isSelectionExamCutOffScore : new FormControl(null), 
        isSpecialtyCertificate : new FormControl(null), 
        isValidCertificates: new FormControl(null), 
        isInternationallyQualified : new FormControl(null),
        isEdit : new FormControl(true)
      })
    );
  }

  onEditValue(i : any) {

    if(this.formQualificationCriteriaValues.qualificationCriteriaArray[i].isEdit === false ) {
      this.getQualificationCriteriaControls[i].get('isEdit')?.patchValue(true)
      this.getQualificationCriteriaControls[i].get('sponsoredByEdit')?.patchValue(
        this.formQualificationCriteriaValues.qualificationCriteriaArray[i].sponsoredBy
      )
    }

  }

  onDeleteValue(i : any) {
    (<FormArray>this.qualificationCriteriaForm.get('qualificationCriteriaArray')).removeAt(i);
    this.getProgramTypesControls[this.selectedProgramTypeIndex].patchValue({
      qualificationCriteria : this.qualificationCriteriaForm.get('qualificationCriteriaArray')?.value
    })
  }

  onSaveQualificationCriteria(data : any, i : any) {

    this.getQualificationCriteriaControls[i].patchValue({
      sponsoredBy : this.getQualificationCriteriaControls[i].value.sponsoredByEdit,
      isEdit : false
    })


    this.getProgramTypesControls[this.selectedProgramTypeIndex].patchValue({
      qualificationCriteria : this.qualificationCriteriaForm.get('qualificationCriteriaArray')?.value
    })


  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

  onNavigate() {
    this.router.navigateByUrl('/scholarship/scholarship-section')
  }

}
