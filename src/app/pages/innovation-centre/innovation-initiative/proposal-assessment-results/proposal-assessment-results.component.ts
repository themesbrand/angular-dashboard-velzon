import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-proposal-assessment-results',
  templateUrl: './proposal-assessment-results.component.html',
  styleUrls: ['./proposal-assessment-results.component.scss'],
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
export class ProposalAssessmentResultsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  userRole: string | null = null;

  listData = data;
  tableData : any[] = [];
  isFilterOpened: boolean = false;


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Innovation Center", link: '/innovation-centre/innovation-initiative'},
      { label: "Proposal Assessment Result", active : true }
    ];
    this.userRole = localStorage.getItem('userType');

    if (this.userRole === 'eportal@omsb.org') {
      this.tableData = this.listData.tableDataAdmin
    } else if (this.userRole === 'trainee@omsb.org') {
      this.tableData = this.listData.tableDataTrainee
    } 
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
