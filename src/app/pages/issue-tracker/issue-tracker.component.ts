import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-issue-tracker',
  templateUrl: './issue-tracker.component.html',
  styleUrls: ['./issue-tracker.component.scss'],
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
export class IssueTrackerComponent implements OnInit {

  listData = data;
  tableData : any[] = [];
  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  selectedRecord: any;

  selectedUser :any =  'Public User';

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.tableData = this.listData.userTableData;
    this.breadCrumbItems = [
      { label: "Issue Tracker", active : true }
    ];
  }

  setRecord(record : any, action: any) {
    this.selectedRecord = record;
    this.selectedRecord.action = action;
  }

  onChangeUser(event : any) {
    console.log(event)
    if(event === 'Public User') {
      this.tableData = this.listData.userTableData;
    } else {
      this.tableData = this.listData.adminTableData;
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
