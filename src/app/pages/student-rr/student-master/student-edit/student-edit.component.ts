import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {_studentSelectorList} from '../selectorData';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  studentForm!: FormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  studentSelectorList = _studentSelectorList
  
  studentData : any;

  constructor(private formBuilder : FormBuilder,
    private router : Router) { 

      const data = this.router.getCurrentNavigation()?.extras?.state
      console.log(data)

      this.studentData = data
    }

  ngOnInit(): void {


    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Student RR' },
      { label: 'Student Master', active: true }
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

    this.studentForm.patchValue(this.studentData)
  }


  /**
  * Returns form
  */
    get form() {
    return this.studentForm.controls;
  }

    /**
  * Bootsrap validation form submit method
  */
  validSubmit() {
    this.submit = true;
  }

  navigateBack() {
    this.router.navigateByUrl('/student-rr/student-master')
  }

}
