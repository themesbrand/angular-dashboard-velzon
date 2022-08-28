import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equivalency',
  templateUrl: './equivalency.component.html',
  styleUrls: ['./equivalency.component.scss']
})
export class EquivalencyComponent implements OnInit {
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
