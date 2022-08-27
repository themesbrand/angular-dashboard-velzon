import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'

@Component({
  selector: 'app-professional-competiency-create-course',
  templateUrl: './professional-competiency-create-course.component.html',
  styleUrls: ['./professional-competiency-create-course.component.scss']
})
export class ProfessionalCompetiencyCreateCourseComponent implements OnInit {

  
  listData = data;

  createNewCourseForm !: FormGroup
  coursePptFiles: any []= [];
  teamQararFiles: any []= [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNewCourseInit();
  }

  createNewCourseInit() {
    this.createNewCourseForm = this.formBuilder.group({
      courseName : new FormControl(null),
      courseDescription : new FormControl(null),
      courseReferenceNumber : new FormControl(null),
      courseVersion : new FormControl(null),
      coursePPT : new FormControl(null),
      courseTeam : new FormControl(null),
      courseTeamChairperson : new FormControl(null),
      teamQarar : new FormControl(null)

    })

    this.createNewCourseForm.valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  get createNewCourseValues() {
    return this.createNewCourseForm.value;
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'coursePptFiles' : {
        this.coursePptFiles.splice(this.coursePptFiles.indexOf(event), 1);
        return
      }
      case 'teamQararFiles' : {
        this.teamQararFiles.splice(this.teamQararFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'coursePptFiles' : {
        this.coursePptFiles = []
        this.coursePptFiles.push(...event.addedFiles);
        return
      }
      case 'teamQararFiles' : {
        this.teamQararFiles = []
        this.teamQararFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
