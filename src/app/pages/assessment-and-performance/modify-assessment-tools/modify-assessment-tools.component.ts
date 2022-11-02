import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';


@Component({
  selector: 'app-modify-assessment-tools',
  templateUrl: './modify-assessment-tools.component.html',
  styleUrls: ['./modify-assessment-tools.component.scss'],
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
export class ModifyAssessmentToolsComponent implements OnInit {

  
  userRole: string | null = null;

  listData = data;

  selectedUser :any =  'CH/PD/PA';
  selectedRequest: any;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

    this.breadCrumbItems = [
      { label: "Assessment And Performance", link: '/assessment-and-performance'},
      { label: "Modify Assessment Tools", active : true }
    ];
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

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
