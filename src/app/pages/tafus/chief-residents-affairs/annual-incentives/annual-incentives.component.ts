import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from '../sharedData'
import { listData } from './data';

@Component({
  selector: 'app-annual-incentives',
  templateUrl: './annual-incentives.component.html',
  styleUrls: ['./annual-incentives.component.scss'],
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
  ]
})
export class AnnualIncentivesComponent implements OnInit {

  sharedData = data;
  listData = listData;
  
  isFilterOpened: boolean = false;

  breadCrumbItems!: Array<{}>;

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Chief Residents Affairs", link: '/tafus/chief-residents-affairs'},
      { label: "Annual Incentives", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

}
