import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-admission-interview-result',
  templateUrl: './admission-interview-result.component.html',
  styleUrls: ['./admission-interview-result.component.scss'],
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
  ]
})
export class AdmissionInterviewResultComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  screeningForm !: FormGroup;
  isFilterOpened: boolean = false;

  committeeReviewForm !: FormGroup


  files: File[] = [];

  acceptanceLetterForm !: FormGroup;
  selectedApplication: any;

  constructor(private router : Router, private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Admission", link : '/admission/admission' },
      { label: "Interview Result", active : true }
    ];
    this.committeeReviewFormInit()
    this.acceptanceLetterFormInit()
    this.screeningFormInit();
    
  }


  get committeeReviewFormValues() {
    return this.committeeReviewForm.value
  }

  committeeReviewFormInit() {
    this.committeeReviewForm = this.formBuilder.group({
      reviewStatus : new FormControl(null),
      notApprovedStatus: new FormControl(null),
      otherStatus: new FormControl(null),
    })
  }

  screeningFormInit() {
    this.screeningForm = this.formBuilder.group({
      screeningStatus : new FormControl(null),
      screeningFailedReason : new FormControl(null),
      screeningFailedOtherReason : new FormControl(null),
      ifOtherStatus : new FormControl(null),
    })
  }

  acceptanceLetterFormInit() {
    this.acceptanceLetterForm = this.formBuilder.group({
      country : new FormControl(null),
      university : new FormControl(null),
      universityOther : new FormControl(null),
      programType : new FormControl(null),
      programSpecialty : new FormControl(null),
      programSubSpecialty : new FormControl(null),
      programSubSpecialtyOther : new FormControl(null),
      fromDate : new FormControl(null),
      toDate : new FormControl(null),
      duration : new FormControl('0'),
      attachmentLink : new FormControl(null),
    })
  }

  get formValues () {
    return this.acceptanceLetterForm.value;
  }
  get screeningFormValues () {
    return this.screeningForm.value
  }
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChange(){
    this.screeningForm.get('screeningFailedReason')?.patchValue(null)
    this.screeningForm.get('screeningFailedOtherReason')?.patchValue(null)
    this.screeningForm.get('ifOtherStatus')?.patchValue(null)

  }

  onChangeFromDate(event : any) {
    const toDate = new Date(event?.value)
    const fromDate = new Date(this.formValues.fromDate)
    const difference = Math.floor((Math.abs(toDate.getTime() - fromDate.getTime()))/(1000*60*60*24));
    this.acceptanceLetterForm.get('duration')?.patchValue(Math.round(difference/365))
  }


  onSearch() {
    this.onFilter();
    //Save functions
  }
  
  onSubmit() {
    console.log(this.formValues)
  }

  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal , {size : size})
  }

  setApplication(application: any) {
    this.selectedApplication = application
    console.log(this.selectedApplication)
  }
  
  onNavigate(url : any ) {
    console.log(this.selectedApplication)
    if(url === '/scholarship/view-acceptance-letter') {
      this.router.navigateByUrl(url, { state : {
        sponsoredBy : this.selectedApplication.sponsoredBy
      }});
      return;
    }
    this.router.navigateByUrl(url)
  }

}
