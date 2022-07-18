import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-interviewer',
  templateUrl: './dashboard-interviewer.component.html',
  styleUrls: ['./dashboard-interviewer.component.scss'],
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
export class DashboardInterviewerComponent implements OnInit {
  listData = data;
  breadCrumbItems!: Array<{}>;

  isFilterOpened: boolean = false;

  committeeReviewForm !: FormGroup

  constructor(private router : Router, private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Applications", active : true }
    ];
    this.committeeReviewFormInit()
  }

  committeeReviewFormInit() {
    this.committeeReviewForm = this.formBuilder.group({
      reviewStatus : new FormControl(null),
      notApprovedStatus: new FormControl(null),
      otherStatus: new FormControl(null),
    })
  }

  get formValues() {
    return this.committeeReviewForm.value
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onSearch() {
    this.onFilter();
    //Save functions
  }
  
  onViewForm() {

  }
  
  onNavigate(url : any ) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}


