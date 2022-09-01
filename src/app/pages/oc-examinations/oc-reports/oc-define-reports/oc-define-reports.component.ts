import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';
@Component({
  selector: 'app-oc-define-reports',
  templateUrl: './oc-define-reports.component.html',
  styleUrls: ['./oc-define-reports.component.scss'],
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
export class OcDefineReportsComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  breadCrumbItems!: Array<{}>;

  userRole: string | null = null;

  selectedRequest: any ;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    this.breadCrumbItems = [
      { label: "Reports", link: '/oc-examinations/reports'},
      { label: "Define Reports", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setRequest(request : any) {
    this.selectedRequest = request
  }
  
  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
