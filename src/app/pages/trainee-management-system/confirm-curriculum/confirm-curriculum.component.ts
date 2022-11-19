import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-confirm-curriculum',
  templateUrl: './confirm-curriculum.component.html',
  styleUrls: ['./confirm-curriculum.component.scss'],
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
export class ConfirmCurriculumComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  listData = data;

  userRole: string | null = null;

  selectedUser : any =  'Trainee';
  selectedRequest: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Trainee Management System", link: '/trainee-management-system'},
      { label: "Confirm Curriculum ", active : true }
    ];
    this.userRole = localStorage.getItem('userType');
  }

  setRequest(request: any) {
    this.selectedRequest = request
  }
  
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChangeUser(event : any) {
    if(event === 'PD') {

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
