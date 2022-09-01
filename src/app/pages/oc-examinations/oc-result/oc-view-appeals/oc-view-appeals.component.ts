import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';

import { pageData } from './data';
import { data } from '../data';
@Component({
  selector: 'app-oc-view-appeals',
  templateUrl: './oc-view-appeals.component.html',
  styleUrls: ['./oc-view-appeals.component.scss'],
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
export class OcViewAppealsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  
  listData = data;
  pageData = pageData;
  tableData : any[] =[]

  userRole: string | null = null;
  appealResponseStatus: any;
  
  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Results", link: '/oc-examinations/results'},
      { label: "View Appeal", active : true }
    ];

    this.userRole = localStorage.getItem('userType');

    if (this.userRole === 'eportal@omsb.org') {
      this.tableData = this.pageData.tableDataAdmin
    } else if (this.userRole === 'trainee@omsb.org'){
      this.tableData = this.pageData.tableDataTrainee
    }
  }

  setAppealResponse(appealResponse : any) {
    this.appealResponseStatus = appealResponse
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
