import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss'],
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
export class FinanceDashboardComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  isFilterOpened: boolean = false;
  isFilterTraineeApplicationOpened: any = false;

  committeeReviewForm !: FormGroup
  statusUpdateForm !: FormGroup
  selectedRequest: any;
  

  constructor(private router : Router, private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboard", link : '/finance/dashboard' },
      { label: "View Applications", active : true }
    ];
    this.committeeReviewFormInit()
    this.statusUpdateFormInit()
  }
  statusUpdateFormInit() {

    this.statusUpdateForm = this.formBuilder.group({
      status : new FormControl(null)
    })  
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
  get statusFormValues() {
    return this.statusUpdateForm.value
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onFilterTraineeApplication() {
    if(this.isFilterTraineeApplicationOpened) {
      this.isFilterTraineeApplicationOpened = false;
    } else {
      this.isFilterTraineeApplicationOpened = true
    }
  }

  onSearch() {
    this.onFilter();
    //Save functions
  }

  setRequest(object : any) {
    this.selectedRequest = object;
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
