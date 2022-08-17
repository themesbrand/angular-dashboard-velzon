import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';
@Component({
  selector: 'app-view-equivalency-list',
  templateUrl: './view-equivalency-list.component.html',
  styleUrls: ['./view-equivalency-list.component.scss'],
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
export class ViewEquivalencyListComponent implements OnInit {

  listData = data;
  tableData : any[] = []

  selectedUser :any =  'Admin';

  selectedRequest: any;
  
  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    if(this.userRole === 'employer@omsb.org') {
      this.tableData = this.listData.tableDataEmployer;
    } else if(this.userRole === 'eportal@omsb.org') {
      if(this.selectedUser === 'Admin') {
        this.tableData = this.listData.tableDataAdmin;
      }
    }

  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }

  onChangeUser(event : any) {
    console.log(event)
    console.log(this.selectedUser)
    
    if(event === 'Admin') {
      this.tableData = this.listData.tableDataAdmin;
    } else {
      this.tableData = this.listData.tableDataCommittee;
    }

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