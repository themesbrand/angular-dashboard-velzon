import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data'

@Component({
  selector: 'app-review-and-confirm-rotation-curriculum',
  templateUrl: './review-and-confirm-rotation-curriculum.component.html',
  styleUrls: ['./review-and-confirm-rotation-curriculum.component.scss']
})
export class ReviewAndConfirmRotationCurriculumComponent implements OnInit {

  listData = data;

  todayDate : Date = new Date();

  breadCrumbItems!: Array<{}>;

  applicationHeaderForm !: FormGroup;

  traineeName: any;

  rotationCurriculumList : any[] = [
    { 
      level : 'R1',
      rotation: 'Anesthesia for General Surgery ', 
      blockNumber : '1',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for General Surgery - Ambulatory Cases', 
      blockNumber : '2',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for General Surgery – Urology Surgery ', 
      blockNumber : '3',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for General Surgery – Vascular Surgery', 
      blockNumber : '4',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for ENT/Ophthalmology/ Oral & Maxillofacial Surgery', 
      blockNumber : '5',
      status : 'Confirmed'

    },
    { 
      level : 'R1',
      rotation: 'Obstetrics and Gynecology Anesthesia', 
      blockNumber : '6',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Regional Anesthesia ', 
      blockNumber : '7',
      status : 'Confirmed'

    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for Orthopedic Surgery', 
      blockNumber : '8',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Pre-Anesthesia Clinic (PAC)', 
      blockNumber : '9',
      status : 'Confirmed'
 
    },
    { 
      level : 'R1',
      rotation: 'Critical Care Medicine', 
      blockNumber : '10',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Plastic Surgery & Burns Anesthesia', 
      blockNumber : '11',
      status : 'Confirmed'
    },
    { 
      level : 'R1',
      rotation: 'Pain Management', 
      blockNumber : '12',
      status : 'Not Confirmed'

    },
    { 
      level : 'R1',
      rotation: 'Postanesthesia Care Unit- (PACU) 2 week', 
      blockNumber : '13',
      status : 'Not Confirmed'
    }
  ]
  
  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "BLOCK DIAGRAM", link: '/residency-block-diagram'},
      { label: " Review And Confirm Rotation Curriculum", active : true }
    ];
    console.log(history.state)
    this.headerFormInit();
  }

  headerFormInit() {
    this.applicationHeaderForm = this.formBuilder.group({
      subjectName : new FormControl(null, []),
      status : new FormControl(null, []),
      employer : new FormControl(null, []),
      program : new FormControl(null, []),
      rotation : new FormControl(null, []),
      evaluationDates : new FormControl(null, []),
      evaluatorName : new FormControl(null, []),
      evaluatorStatus : new FormControl(null, []),
      evaluatorEmployer : new FormControl(null, []),
      evaluatorProgram : new FormControl(null, []),
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    const splitBlock = history.state.evaluationDates.split(" - ", 2); 
    const fromDate = splitBlock[0].slice(1)
    const toDate = splitBlock[1].slice(0,-1)
    const blockValue = `From : ${fromDate} To : ${toDate}`

    this.applicationHeaderForm.patchValue({
      subjectName : history.state.subjectName,
      status : history.state.status,
      employer: history.state.employer,
      program: history.state.program,
      rotation: history.state.rotation,
      evaluationDates: blockValue,
      
      evaluatorName: history.state.evaluatorName,
      evaluatorStatus: history.state.evaluatorStatus,
      evaluatorEmployer: history.state.evaluatorEmployer,
      evaluatorProgram: history.state.evaluatorProgram,
    })
    this.traineeName = history.state.traineeName

  }

  get getControlsValues() {
    return this.applicationHeaderForm.value
  }
  

  addNew() {
   const object = {
    residencyLevel : null,
    blockNo : '',
    rotationName : null,
    confirmStatus : 'Confirmed'
   };
   this.rotationCurriculumList.push(object);
  }

  navigateBack() {
    this.router.navigateByUrl('/residency-block-diagram')
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }
}
