import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-day',
  templateUrl: './research-day.component.html',
  styleUrls: ['./research-day.component.scss']
})
export class ResearchDayComponent implements OnInit {
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
