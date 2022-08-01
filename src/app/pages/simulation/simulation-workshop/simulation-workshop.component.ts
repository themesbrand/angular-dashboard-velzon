import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-simulation-workshop',
  templateUrl: './simulation-workshop.component.html',
  styleUrls: ['./simulation-workshop.component.scss']
})
export class SimulationWorkshopComponent implements OnInit {
  
  userType: string | null = null;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
