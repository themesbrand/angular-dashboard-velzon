import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation-course',
  templateUrl: './simulation-course.component.html',
  styleUrls: ['./simulation-course.component.scss']
})
export class SimulationCourseComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
