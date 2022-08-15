import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-menu',
  templateUrl: './verify-menu.component.html',
  styleUrls: ['./verify-menu.component.scss']
})
export class VerifyMenuComponent implements OnInit {
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
