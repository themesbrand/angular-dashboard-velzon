import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';

import {data} from '../data';
import {pageData} from './data'

@Component({
  selector: 'app-oc-view-registration',
  templateUrl: './oc-view-registration.component.html',
  styleUrls: ['./oc-view-registration.component.scss'],
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
export class OcViewRegistrationComponent implements OnInit {

  listData = data;
  pageData = pageData;

  registrationTableData: any[] = []

  isFilterOpened: boolean = true;
  isSearched: boolean = false;

  userRole: string | null = null;
  
  selectedRequest:any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

  }

  viewRegistration(type : any) {
    if(this.userRole === 'trainee@omsb.org') {
      if(type === 'all') {
        this.registrationTableData = this.pageData.registeredExamDataTraineeAll
      } else {
        this.registrationTableData = this.pageData.registeredExamDataTraineeDate
      }
    } else if(this.userRole === 'eportal@omsb.org') {
      if(type === 'all') {
        this.registrationTableData = this.pageData.registeredExamDataAdminAll
      } else {
        this.registrationTableData = this.pageData.registeredExamDataAdminDate
      }
    } 


  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  
  onSearch() {
    this.isSearched = true;
    this.isFilterOpened = false;
  }
  setRequest(data : any) {
    this.selectedRequest = data;
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
