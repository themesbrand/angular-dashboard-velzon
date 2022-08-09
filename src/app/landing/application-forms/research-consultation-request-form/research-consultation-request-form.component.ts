import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';

import {userDetails} from 'src/app/landing/application-forms/data';

@Component({
  selector: 'app-research-consultation-request-form',
  templateUrl: './research-consultation-request-form.component.html',
  styleUrls: ['./research-consultation-request-form.component.scss'],
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
export class ResearchConsultationRequestFormComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  selectedApplication: any;

  consultantFeedbackForm !: FormGroup;

  userDetails: any = userDetails;

  applicationForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.applicationFormInit();
    this.feedbackFormInit();

  }

  feedbackFormInit() {
    this.consultantFeedbackForm = this.formBuilder.group({
      consultant : new FormControl(null),
      consultationMode : new FormControl(null),
    })
  }

  get feedbackFormValues () {
    return this.consultantFeedbackForm.value
  }
  
  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      isMandatoryResearch : new FormControl(null),
      typeOfSupport : new FormControl(null),
      isConsulted : new FormControl(null),
    })
  }

  get applicationFormValues() {
    return this.applicationForm.value;
  }
  
  setApplication(application : any) {
    this.selectedApplication = application;
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  
  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }

}
