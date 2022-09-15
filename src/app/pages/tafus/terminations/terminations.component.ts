import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminations',
  templateUrl: './terminations.component.html',
  styleUrls: ['./terminations.component.scss']
})
export class TerminationsComponent implements OnInit {

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
