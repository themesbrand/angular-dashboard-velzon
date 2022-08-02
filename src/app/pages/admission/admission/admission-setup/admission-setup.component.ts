import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-admission-setup',
  templateUrl: './admission-setup.component.html',
  styleUrls: ['./admission-setup.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class AdmissionSetupComponent implements OnInit {
  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  programList : any[] = [];

  admissionSetupForm !: FormGroup;
  interviewPanelForm !: FormGroup;
  filterExamForm !: FormGroup;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

    this.breadCrumbItems = [
      { label: "Admission", link: '/admission/admission'},
      { label: "Admission Setup", active : true }
    ];
    this.admissionSetupFormInit();
    this.admissionSetupFormChanges();

    this.interviewPanelFormInit();
    this.filterExamFormInit();
  }

  admissionSetupFormInit() {
    this.admissionSetupForm = this.formBuilder.group({
      programType : new FormControl(null),
      programName : new FormControl(null),
      academicYear : new FormControl(null),
      applicationStartDate : new FormControl(null),
      applicationEndDate : new FormControl(null),
      medicalQualifications : new FormControl(null),
      certificationsRequired : new FormControl(null),
      specialtyCertificates : new FormControl(null),
      selectionExamRequired : new FormControl(null),
      dentistryCertificate : new FormControl(null),
      evaluationForm : new FormControl(null),
    })
  }

  filterExamFormInit() {
    this.filterExamForm = this.formBuilder.group({
      isFilterExamRequired : new FormControl(null)
    })
  }

  interviewPanelFormInit() {
    this.interviewPanelForm = this.formBuilder.group({
      employerDetails : new FormControl(null)
    })
  }

  get admissionSetupFormValue() {
    return this.admissionSetupForm.value
  }

  get interviewPanelFormValue() {
    return this.interviewPanelForm.value
  }
  
  get filterExamFormValue() {
    return this.filterExamForm.value
  }

  admissionSetupFormChanges() {
    this.admissionSetupForm.valueChanges.subscribe(res => {
      console.log(res)
      if(res.programType === "Residency Program") {
        this.programList = this.listData.residencyProgramList
      } else if (res.programType === "Fellowship") {
        this.programList = this.listData.fellowshipProgramList
      } else {
        this.programList = []
      }
    })
  }

  onSubmit() {
    console.log(this.admissionSetupFormValue)
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
