import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {_studentSelectorList} from '../selectorData';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  studentForm!: FormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  
  thumbImpressionFiles !: any;
  signatureFiles !: any;

  studentSelectorList = _studentSelectorList
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Graduate Medical Education', link : "/student-rr" },
      { label: "Registrar's Office", link : "/student-rr/student-master" },
      { label: "Create New", active: true }
    ];

    /**
    * Bootstrap validation form data
    */
      this.studentForm = this.formBuilder.group({
      admissionDate: ['', [Validators.required]],
      program: [null, [Validators.required]],
      studentGroup: [null, [Validators.required]],
      studentRollNumber: ['', [Validators.required]],
      studentName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      studentFeeCategory: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
      aadhaarNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      familyAnnualIncome: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      incomeCategory: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      belongingQuota: [null, [Validators.required]],
      admissionTakenQuotaCategory: [null, [Validators.required]],
      admissionTakenQuota: [null, [Validators.required]],
      martialStatus: [null, [Validators.required]],
      domicile: [null, [Validators.required]],
      previousStudentRegistrationNumber: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      previousStudentRollNumber: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      previousBoardUniversity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      obtainedMarksPercentage: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      status: [null, [Validators.required]],
    });

  }


  /**
  * Returns form
  */
    get form() {
    return this.studentForm.controls;
  }

  
  onSelectThumbImpression(event : any) {

    this.thumbImpressionFiles = event.addedFiles
  }
    
  onRemoveThumbImpression(event : any) {
    this.thumbImpressionFiles = null;
  }

  onSelectSignature(event : any) {

    this.signatureFiles = event.addedFiles
  }
    
  onRemoveSignature(event : any) {
    this.signatureFiles = null;
  }

    /**
  * Bootsrap validation form submit method
  */
  validSubmit() {
    this.submit = true;
  }
  
}
