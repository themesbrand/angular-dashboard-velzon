import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {userDetails} from 'src/app/landing/application-forms/data';
@Component({
  selector: 'app-application-simulation-courses',
  templateUrl: './application-simulation-courses.component.html',
  styleUrls: ['./application-simulation-courses.component.scss']
})
export class ApplicationSimulationCoursesComponent implements OnInit {

  userDetails: any = userDetails;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
