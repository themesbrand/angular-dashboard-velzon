import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { data } from './data';

@Component({
  selector: 'app-page-equivalency-appeals',
  templateUrl: './page-equivalency-appeals.component.html',
  styleUrls: ['./page-equivalency-appeals.component.scss']
})
export class PageEquivalencyAppealsComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  tableData : any[] =[]
  selectedUser :any =  null;

  supportingFiles: File[] = [];

  userRole: string | null = null;
  selectedRequest: any;
  selectedComments: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Equivalency", link: '/vehpc/equivalency'},
      { label: "View Equivalency Appeal Requests", active : true }
    ];
    this.userRole = localStorage.getItem('userType');

    if(this.userRole === 'eportal@omsb.org') {
      this.selectedUser = 'Admin'
      this.tableData = this.listData.tableDataAdmin
    } else {
      this.selectedUser = 'Trainee'
      this.tableData = this.listData.tableDataTrainee
    }

  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  
  onChangeUser(event : any) {
    if(event === 'Admin') {

    } 
  }

  setSelectedComments(course : any) {
    if(course?.comments === undefined || course?.comments?.length === 0) {
      this.selectedComments = []
    } else {
      this.selectedComments = course.comments
    }
  }
  
  onRemove(event : any, type: any) {
    switch(type) {

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
