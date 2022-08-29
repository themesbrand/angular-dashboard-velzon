import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './../data';
import {pageData} from './data';

@Component({
  selector: 'app-oc-view-exam-dates',
  templateUrl: './oc-view-exam-dates.component.html',
  styleUrls: ['./oc-view-exam-dates.component.scss']
})
export class OcViewExamDatesComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data; 
  pageData = pageData; 

  examDateDate : any = {
    examType : 'Part 1 Exam',
    programType : 'Residency Program',
    programName : 'ENT',
    startDateOfApplication: '2022-09-22',
    endDateOfApplication: '2022-09-30',
    dateOfExam: '2022-10-05',
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
