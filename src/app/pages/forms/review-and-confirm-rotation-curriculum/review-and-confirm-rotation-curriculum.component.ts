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
      residencyLevel : null,
      blockNo : '',
      rotationName : null,
      confirmStatus : null
     } 
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
      'traineeName' : new FormControl(null, []),
      'traineeLevel' : new FormControl(null, []),
      'omsbNumber' : new FormControl(null, []),
      'program' : new FormControl(null, []),
      'rotation' : new FormControl(null, []),
      'rotationFrom' : new FormControl(null, []),
      'rotationTo' : new FormControl(null, []),
      'trainerCenterName' : new FormControl(null, []),
      'block' : new FormControl(null, []),
    })

    this.patchHeadingValues()
  }

  patchHeadingValues() {
    const splitBlock = history.state.block.split(" - ", 2); 
    const fromDate = splitBlock[0].slice(1)
    const toDate = splitBlock[1].slice(0,-1)
    const blockValue = `From : ${fromDate} To : ${toDate}`

    this.applicationHeaderForm.patchValue({
      program : history.state.programName,
      block : blockValue,
      traineeName : history.state.traineeName,
      traineeLevel : history.state.level,
      omsbNumber : history.state.omsb,
    })
    this.traineeName = history.state.traineeName

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
