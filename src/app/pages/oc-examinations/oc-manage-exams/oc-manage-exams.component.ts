import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oc-manage-exams',
  templateUrl: './oc-manage-exams.component.html',
  styleUrls: ['./oc-manage-exams.component.scss']
})
export class OcManageExamsComponent implements OnInit {
  
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
