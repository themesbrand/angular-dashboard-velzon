import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {pageData} from './data';
import {data} from '../data';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss'],
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
export class ViewNotificationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  notificationObject : any = {
    selectedRecipients : pageData.userData,
    message : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatibus, in cum, corporis doloribus reprehenderit quam fugit maiores unde accusamus odit soluta laudantium facere, similique natus sapiente perferendis repellat blanditiis.'
  }

  isViewExam: boolean = false;
  pageData = pageData; 
  listData = data;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    if(history.state.returnUrl === 'view-exams-date') {
      this.isViewExam = true;
      this.breadCrumbItems = [
        { label: "Manage Exam", link: '/examinations/manage-exams'},
        { label: "View Exam", link: '/examinations/manage-exams/view-exam'},
        { label: "View Notifications", active : true }
      ];
    } else {
      this.isViewExam = false;
      this.breadCrumbItems = [
        { label: "Manage Exam", link: '/examinations/manage-exams'},
        { label: "View Notifications", active : true }
      ];
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
