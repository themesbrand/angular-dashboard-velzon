import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic-activities',
  templateUrl: './academic-activities.component.html',
  styleUrls: ['./academic-activities.component.scss']
})
export class AcademicActivitiesComponent implements OnInit {


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
