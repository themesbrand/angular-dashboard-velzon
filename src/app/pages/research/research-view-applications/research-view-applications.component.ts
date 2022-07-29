import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-view-applications',
  templateUrl: './research-view-applications.component.html',
  styleUrls: ['./research-view-applications.component.scss']
})
export class ResearchViewApplicationsComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  
  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
