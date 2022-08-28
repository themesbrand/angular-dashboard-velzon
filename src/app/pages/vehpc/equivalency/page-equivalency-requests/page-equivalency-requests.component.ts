import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-page-equivalency-requests',
  templateUrl: './page-equivalency-requests.component.html',
  styleUrls: ['./page-equivalency-requests.component.scss'],
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
export class PageEquivalencyRequestsComponent implements OnInit {

  listData = data;
  tableData : any[] = []

  selectedUser :any =  'Admin';

  selectedRequest: any;
  
  userRole: string | null = null;

  reportFiles: File[] = [];
  supportingFiles: File[] = [];

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  selectedComments: any[] = [];

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Equivalency", link: '/vehpc/equivalency'},
      { label: "View Equivalency Requests", active : true }
    ];
    
    this.userRole = localStorage.getItem('userType');
    if(this.userRole === 'employer@omsb.org') {
      this.selectedUser = 'Employer'
    }
    if(this.selectedUser === 'Admin') {
      this.tableData = this.listData.tableDataAdmin;
    } else if (this.selectedUser === 'Employer') {
      
      this.tableData = this.listData.tableDataEmployer;
    }


  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }

  onChangeUser(event : any) {

    if(event === 'Admin') {
      this.tableData = this.listData.tableDataAdmin;
    } else {
      this.tableData = this.listData.tableDataCommittee;
    }

  }

  
  setSelectedComments(course : any) {
    if(course?.comments === undefined || course?.comments?.length === 0) {
      this.selectedComments = []
    } else {
      this.selectedComments = course.comments
    }
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'reportFiles' : {
        this.reportFiles.splice(this.reportFiles.indexOf(event), 1);
        return
      }
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'reportFiles' : {
        this.reportFiles.push(...event.addedFiles);
        return
      }
      case 'reportFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }

      default : {
        break;
      }
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
