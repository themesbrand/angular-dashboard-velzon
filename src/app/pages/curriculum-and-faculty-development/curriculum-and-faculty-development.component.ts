import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-and-faculty-development',
  templateUrl: './curriculum-and-faculty-development.component.html',
  styleUrls: ['./curriculum-and-faculty-development.component.scss']
})
export class CurriculumAndFacultyDevelopmentComponent implements OnInit {

  userRole: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

  }

}
