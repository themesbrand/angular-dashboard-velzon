import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-scholarship-applications',
  templateUrl: './view-scholarship-applications.component.html',
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
  styleUrls: ['./view-scholarship-applications.component.scss']
})
export class ViewScholarshipApplicationsComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  isFilterOpened: boolean = false;

  constructor(private router : Router, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Applications", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onSearch() {
    this.onFilter();
    //Save functions
  }
  
  onViewForm() {

  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal , {size : size})
  }
  
  onNavigate(url : any ) {
    this.router.navigateByUrl(url)
  }
}
