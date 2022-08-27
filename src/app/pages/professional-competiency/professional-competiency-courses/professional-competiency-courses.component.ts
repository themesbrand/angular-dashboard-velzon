import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-professional-competiency-courses',
  templateUrl: './professional-competiency-courses.component.html',
  styleUrls: ['./professional-competiency-courses.component.scss']
})
export class ProfessionalCompetiencyCoursesComponent implements OnInit {

  userRole: string | null = null;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
