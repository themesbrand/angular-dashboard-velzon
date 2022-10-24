import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-view-exams',
  templateUrl: './view-exams.component.html',
  styleUrls: ['./view-exams.component.scss'],
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
export class ViewExamsComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  breadCrumbItems!: Array<{}>;

  userRole: string | null = null;

  examObject:any = {

    typeOfExam : 'Part 1 Exam',
    resultsSource : '15',
    
    examFrequency : 'Single',
    
    information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia non? Reiciendis aliquam itaque neque voluptatem magni molestias perspiciatis doloremque rerum laborum voluptatum.',
    
    eligibilityOne : 'Level 1',
    eligibilityTwo : [
      {
        availableLevels : 'Level 1', examType : 'Part 1 Exam'
      }
    ],

    earlyBidDays : 15,
    fee : 150,
    appealWindow : 10,
    reAppealWindow : 10,

    regularFees : [
      {
        attempts : 3,
        fee : 150
      }
    ],

    withdrawalFees : [
      {
        numberOfDays : 15,
        refundPercentage : '30%'
      }
    ],
    
    appealFee : 150,
    reAppealFee : 150,

    startDateOfApplication : '2022-08-20',
    endDateOfApplication : '2022-08-30',

    programType : 'Residency Program',
    programName : ['Anesthesia'],

    singleExamDates :[
      {
        programName : 'Anesthesia',
        startDateOfExam : '2022-10-15',
        endDateOfExam : '2022-10-15',
        fromTimeOfExam : '08:00 AM',
        toTimeOfExam : '10:00 AM',
        seats : '25',
        venue : 'Khoula Hospital'
      }
    ]
  }

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    this.breadCrumbItems = [
      { label: "Manage Exams", link: '/examinations/manage-exams'},
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

    if(url === '/examinations/manage-exams/view-exam/view-exam-dates') {
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
