import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-course',
  templateUrl: './finance-course.component.html',
  styleUrls: ['./finance-course.component.scss']
})
export class FinanceCourseComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
