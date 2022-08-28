import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';
@Component({
  selector: 'app-professional-competiency-view-course-reviews',
  templateUrl: './professional-competiency-view-course-reviews.component.html',
  styleUrls: ['./professional-competiency-view-course-reviews.component.scss'],
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
export class ProfessionalCompetiencyViewCourseReviewsComponent implements OnInit {

  listData = data;
  tableData : any[] = []

  selectedUser : any =  'PCD Admin';

  selectedCourse: any;
  
  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  selectedComments: any[]  = [];
  
  supportingFiles: File[] = [];
  qararFile: File[] = [];

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Professional Competiency - Courses", link: '/professional-competiency/courses'},
      { label: "Course Review Requests", active : true }
    ];

    this.userRole = localStorage.getItem('userType');
    this.tableData = this.listData.tableDataAdmin;

  }

  setCourse(course : any) {
    this.selectedCourse = course;
  }

  onChangeUser(event : any) {
    console.log(event)
    console.log(this.selectedUser)
    this.selectedUser = event
    
    if(event === 'PCD Admin') {
      this.tableData = this.listData.tableDataAdmin;
    } else  {
      this.tableData = this.listData.tableDataTeam;
    } 
  }

  setSelectedComments(course : any) {
    if(course?.comments === undefined || course?.comments?.length === 0) {
      this.selectedComments = []
    } else {
      this.selectedComments = course.comments
    }
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      case 'qararFile' : {
        this.qararFile.splice(this.qararFile.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      case 'qararFile' : {
        this.qararFile.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
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
