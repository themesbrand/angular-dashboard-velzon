import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-registration-page-two',
  templateUrl: './course-registration-page-two.component.html',
  styleUrls: ['./course-registration-page-two.component.scss']
})
export class CourseRegistrationPageTwoComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
