import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-tm-schedule-course',
  templateUrl: './tm-schedule-course.component.html',
  styleUrls: ['./tm-schedule-course.component.scss']
})
export class TmScheduleCourseComponent implements OnInit {

  listData = data;

  public Editor = ClassicEditor;

  files : File[] = []

  createSchedulingForm !: FormGroup

  currentDate = new Date();
  selectedScheduling: any;
  
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createSchedulingFormInit();

  }

  createSchedulingFormInit() {
    this.createSchedulingForm = this.formBuilder.group({
      courseName : new FormControl(null),
      registrationStartDate : new FormControl(null),
      registrationEndDate : new FormControl(null),
      courseStartDate : new FormControl(null),
      courseStartTime : new FormControl(null),
      courseEndDate : new FormControl(null),
      courseEndTime : new FormControl(null),
      noOfSeats : new FormControl(null),
      venue : new FormControl(null),
      isFoodRequired : new FormControl(null),
      foodRequired : new FormControl(null),
      termsAndConditions : new FormControl(null),
      isInPersonPaymentsAllowed : new FormControl(null)
    })
  }

  get createSchedulingFormValues(){
    return this.createSchedulingForm.value
  }

  setScheduling(scheduling : any) {
    this.selectedScheduling = scheduling
  }

  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);
  }

}
