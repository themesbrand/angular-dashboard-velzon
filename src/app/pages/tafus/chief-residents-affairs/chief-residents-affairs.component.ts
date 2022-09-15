import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chief-residents-affairs',
  templateUrl: './chief-residents-affairs.component.html',
  styleUrls: ['./chief-residents-affairs.component.scss']
})
export class ChiefResidentsAffairsComponent implements OnInit {

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
