import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-oc-page-exams',
  templateUrl: './oc-page-exams.component.html',
  styleUrls: ['./oc-page-exams.component.scss'],
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
export class OcPageExamsComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  breadCrumbItems!: Array<{}>;

  userRole: string | null = null;


  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    this.breadCrumbItems = [
      { label: "Manage Exams", link: '/oc-examinations/manage-exams'},
      { label: "View Exams", active : true }
    ];
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

    if(url === '/oc-examinations/manage-exams/view-exam/view-exam-dates') {
      this.router.navigateByUrl(url, { state : {
        returnUrl : 'view-exams'
      }});
    } else {
      this.router.navigateByUrl(url);
    }
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
