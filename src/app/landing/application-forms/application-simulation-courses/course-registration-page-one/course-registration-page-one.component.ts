import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { data } from './data'

@Component({
  selector: 'app-course-registration-page-one',
  templateUrl: './course-registration-page-one.component.html',
  styleUrls: ['./course-registration-page-one.component.scss']
})
export class CourseRegistrationPageOneComponent implements OnInit {

  listData = data;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
