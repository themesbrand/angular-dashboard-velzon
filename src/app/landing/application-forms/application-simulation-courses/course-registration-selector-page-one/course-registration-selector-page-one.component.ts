import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { data } from './data'


@Component({
  selector: 'app-course-registration-selector-page-one',
  templateUrl: './course-registration-selector-page-one.component.html',
  styleUrls: ['./course-registration-selector-page-one.component.scss']
})
export class CourseRegistrationSelectorPageOneComponent implements OnInit {

  listData = data;

  selectedCourse: any
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onChange(selectedCourse : any){
    this.selectedCourse = selectedCourse
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }


}
