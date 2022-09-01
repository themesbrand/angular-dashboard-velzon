import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';

import {data} from './data';

@Component({
  selector: 'app-oc-view-certificates-request',
  templateUrl: './oc-view-certificates-request.component.html',
  styleUrls: ['./oc-view-certificates-request.component.scss'],
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
export class OcViewCertificatesRequestComponent implements OnInit {
  listData = data;

  tableData : any[] = []

  isFilterOpened: boolean = false;
  userRole: string | null = null;
  selectedRequest:any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    if(this.userRole === 'trainee@omsb.org') {
      this.tableData = this.listData.tableDataTrainee
    } else if(this.userRole === 'eportal@omsb.org') {
      this.tableData = this.listData.tableDataAdmin
    }
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
  
  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
