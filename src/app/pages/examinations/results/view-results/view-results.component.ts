import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { data } from '../data';
import { pageData } from './data';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss'],
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
export class ViewResultsComponent implements OnInit {
  listData = data;
  pageData = pageData;
  breadCrumbItems!: Array<{}>;

  isFilterOpened: boolean = false;

  userRole: string | null = null;

  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Results", link: '/examinations/results'},
      { label: "View Results", active : true }
    ];
    this.userRole = localStorage.getItem('userType');
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
