import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from '../data';

@Component({
  selector: 'app-program-referral-request',
  templateUrl: './program-referral-request.component.html',
  styleUrls: ['./program-referral-request.component.scss'],
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
export class ProgramReferralRequestComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Program Referral", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url: any) {
    if(url === '/counselling/self-referral') {
      this.router.navigate([url], { queryParams: { returnUrl: 'counselling/program-referral' } });
      return;
    }
    this.router.navigateByUrl(url)
  }

}
