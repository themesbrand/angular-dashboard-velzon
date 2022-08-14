import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-manage-exams',
  templateUrl: './manage-exams.component.html',
  styleUrls: ['./manage-exams.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class ManageExamsComponent implements OnInit {
  listData = data;
  
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
