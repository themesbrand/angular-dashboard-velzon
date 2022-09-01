import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oc-reports',
  templateUrl: './oc-reports.component.html',
  styleUrls: ['./oc-reports.component.scss']
})
export class OcReportsComponent implements OnInit {

  userRole: string | null = null;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }


}
