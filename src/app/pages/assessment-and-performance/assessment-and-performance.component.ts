import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-and-performance',
  templateUrl: './assessment-and-performance.component.html',
  styleUrls: ['./assessment-and-performance.component.scss']
})
export class AssessmentAndPerformanceComponent implements OnInit {

  userRole: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

  }

}
