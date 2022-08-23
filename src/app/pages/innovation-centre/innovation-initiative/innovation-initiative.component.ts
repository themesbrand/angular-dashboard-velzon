import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-innovation-initiative',
  templateUrl: './innovation-initiative.component.html',
  styleUrls: ['./innovation-initiative.component.scss']
})
export class InnovationInitiativeComponent implements OnInit {

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
