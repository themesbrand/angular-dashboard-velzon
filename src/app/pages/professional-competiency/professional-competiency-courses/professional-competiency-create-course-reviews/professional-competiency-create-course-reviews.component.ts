import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-professional-competiency-create-course-reviews',
  templateUrl: './professional-competiency-create-course-reviews.component.html',
  styleUrls: ['./professional-competiency-create-course-reviews.component.scss']
})
export class ProfessionalCompetiencyCreateCourseReviewsComponent implements OnInit {

  listData = data;

  createNewCourseRequestForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNewCourseRequestFormInit()
  }

  createNewCourseRequestFormInit() {
    this.createNewCourseRequestForm = this.formBuilder.group({
      course : new FormControl(null)

    })
  }

  get formValues() {
    return this.createNewCourseRequestForm.value;
  }

}
