import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'

@Component({
  selector: 'app-professional-competiency-create-course',
  templateUrl: './professional-competiency-create-course.component.html',
  styleUrls: ['./professional-competiency-create-course.component.scss']
})
export class ProfessionalCompetiencyCreateCourseComponent implements OnInit {

  
  isEditable: boolean = false;
  isUploadOnly: boolean = false;
  isCreateNewVersion: boolean = false;

  courseObject: any = null;
  
  @Input('isEditable') set setIsEditable(data : any) {
    this.isEditable = data
  }

  @Input('isCreateNewVersion') set setIsCreateNewVersion(data : any) {
    this.isCreateNewVersion = data
  }

  @Input('isUploadOnly') set setIsUploadOnly(data : any) {
    this.isUploadOnly = data
  }
  
  @Input('courseObject') set setCourseObject(data : any) {
    this.courseObject = data
  }
  
  listData = data;

  createNewCourseForm !: FormGroup
  coursePptFiles: any []= [];
  teamQararFiles: any []= [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNewCourseInit();
    if(this.courseObject != null) {
      this.createNewCourseForm.patchValue(this.courseObject)
      if(this.isEditable === false || this.isUploadOnly === true) {
        this.createNewCourseForm.get('courseName')?.disable();
        this.createNewCourseForm.get('courseDescription')?.disable();
        this.createNewCourseForm.get('courseReferenceNumber')?.disable();
        this.createNewCourseForm.get('courseVersion')?.disable();
        this.createNewCourseForm.get('courseTeam')?.disable();
        this.createNewCourseForm.get('courseTeamChairperson')?.disable();
      }
      if(this.isCreateNewVersion === true) {
        this.createNewCourseForm.get('courseTeam')?.patchValue(null)
        this.createNewCourseForm.get('courseTeamChairperson')?.patchValue(null)
        this.createNewCourseForm.get('courseVersion')?.patchValue(+this.courseObject.courseVersion + 1)
      }
    }
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
