import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interruption',
  templateUrl: './interruption.component.html',
  styleUrls: ['./interruption.component.scss']
})
export class InterruptionComponent implements OnInit {

  userRole: string | null = null;

  constructor (
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
