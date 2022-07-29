import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from './data'

@Component({
  selector: 'app-research-consultation-request',
  templateUrl: './research-consultation-request.component.html',
  styleUrls: ['./research-consultation-request.component.scss'],
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
export class ResearchConsultationRequestComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  selectedApplication: any;

  consultantFeedbackForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal,
    private router : Router
  ) { }

  ngOnInit(): void {
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

  onNavigate(url :any) {
    this.router.navigateByUrl(url)
  }
  
  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }



}
