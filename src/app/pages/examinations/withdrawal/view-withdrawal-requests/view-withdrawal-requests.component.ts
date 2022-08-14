import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';

import {pageData} from './pageData';
import {data} from '../data';

@Component({
  selector: 'app-view-withdrawal-requests',
  templateUrl: './view-withdrawal-requests.component.html',
  styleUrls: ['./view-withdrawal-requests.component.scss'],
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
export class ViewWithdrawalRequestsComponent implements OnInit {
  listData = data;
  pageData = pageData;
  isFilterOpened: boolean = false;

  userRole: string | null = null;

  tableData : any[] =[]

  formObject :any =  {
    reason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum commodi numquam similique corrupti debitis odio?',
    supportingDocumentsArray : [
      {
        title : 'Lorem ipsum dolor sit',
        supportingDocument : ''
      },
      {
        title : 'Adipisicing elit.',
        supportingDocument : ''
      },
    ]
  }

  commentObject = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum commodi numquam similique corrupti debitis odio"
  selectedRequest: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    if(this.userRole === 'trainee@omsb.org') {
      this.tableData = this.pageData.tableDataTrainee
    } else if (this.userRole === 'eportal@omsb.org') {
      this.tableData = this.pageData.adminDataTrainee
    }
  }

  setExamData(data : any) {
    this.selectedRequest = data;
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
