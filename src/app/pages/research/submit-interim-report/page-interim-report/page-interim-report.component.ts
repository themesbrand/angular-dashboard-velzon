import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'


@Component({
  selector: 'app-page-interim-report',
  templateUrl: './page-interim-report.component.html',
  styleUrls: ['./page-interim-report.component.scss'],
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
export class PageInterimReportComponent implements OnInit {
  listData = data;
  isFilterOpened: boolean = false;
  selectedRequest: any;

  userRole: string | null = null;

  // tableData : any [] = []

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
