import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
      status : null
    },
    { 
      level : 'R2',
      rotation: 'Anesthesia for General Surgery - Ambulatory Cases', 
      blockNumber : '2',
      status : null
    },
    { 
      level : 'R2',
      rotation: 'Anesthesia for General Surgery – Urology Surgery ', 
      blockNumber : '3',
      status : null
    },
    { 
      level : 'R4',
      rotation: 'Anesthesia for General Surgery – Vascular Surgery', 
      blockNumber : '4',
      status : null
    },
    { 
      level : 'R4',
      rotation: 'Anesthesia for ENT/Ophthalmology/ Oral & Maxillofacial Surgery', 
      blockNumber : '5',
      status : null

    },
    { 
      level : 'R3',
      rotation: 'Obstetrics and Gynecology Anesthesia', 
      blockNumber : '6',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Regional Anesthesia ', 
      blockNumber : '7',
      status : null

    },
    { 
      level : 'R4',
      rotation: 'Anesthesia for Orthopedic Surgery', 
      blockNumber : '8',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Pre-Anesthesia Clinic (PAC)', 
      blockNumber : '1',
      status : null
 
    },
    { 
      level : 'R1',
      rotation: 'Critical Care Medicine', 
      blockNumber : '2',
      status : null
    },
    { 
      level : 'R4',
      rotation: 'Plastic Surgery & Burns Anesthesia', 
      blockNumber : '4',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Pain Management', 
      blockNumber : '5',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Postanesthesia Care Unit- (PACU) 2 week', 
      blockNumber : '6',
      status : null
    },
    { 
      level : 'R2',
      rotation: 'Pediatric Anesthesia', 
      blockNumber : '7',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Neurosurgical Anesthesia', 
      blockNumber : '8',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Cardio Thoracic Anesthesia', 
      blockNumber : '9',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Anesthesia for Radiodiagnosis/Remote Location', 
      blockNumber : '10',
      status : null
    },
    { 
      level : 'R1',
      rotation: 'Respiratory Medicine', 
      blockNumber : '11',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Coronary Care Unit', 
      blockNumber : '12',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Research', 
      blockNumber : '1',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Elective', 
      blockNumber : '5',
      status : null

    },
    { 
      level : 'R1',
      rotation: 'Annual Leave', 
      blockNumber : '16',
      status : null
    },
  ]
  
  constructor(
    private formBuilder : FormBuilder,
    private router : Router
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
    confirmStatus : null
   } 
   this.rotationCurriculumList.push(object)
  }

  navigateBack() {
    this.router.navigateByUrl('/residency-block-diagram')
  }
}
