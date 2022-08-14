import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './../data';
import {pageData} from './data';


@Component({
  selector: 'app-view-exam-dates',
  templateUrl: './view-exam-dates.component.html',
  styleUrls: ['./view-exam-dates.component.scss'],
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
export class ViewExamDatesComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data; 
  pageData = pageData; 

  examDateDate : any = {
    examType : 'Part 1 Exam',
    programType : 'Residency Program',
    programName : 'ENT',
    startDateOfApplication: '2022-08-22',
    endDateOfApplication: '2022-08-30',
    dateOfExam: '2022-09-24',
    fromTimeOfExam: '08:00',
    toTimeOfExam: '11:00',
    seats: 25,
    venue: 'Khoula Hospital'
  }

  isViewExam: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    console.log(history.state.returnUrl)
    if(history.state.returnUrl === 'view-exams') {
      this.isViewExam = true;

      this.breadCrumbItems = [
        { label: "Manage Exam", link: '/examinations/manage-exams'},
        { label: "View Exam", link: '/examinations/manage-exams/view-exam'},
        { label: "View Exam Dates", active : true }
      ];
    } else {
      this.isViewExam = false;

      this.breadCrumbItems = [
        { label: "Manage Exam", link: '/examinations/manage-exams'},
        { label: "View Exam Dates", active : true }
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
    if(url === '/examinations/manage-exams/view-exam/view-notifications') {
      this.router.navigateByUrl(url, { state : {
        returnUrl : 'view-exams-date'
      }});
    } else {
      this.router.navigateByUrl(url);
    }
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
