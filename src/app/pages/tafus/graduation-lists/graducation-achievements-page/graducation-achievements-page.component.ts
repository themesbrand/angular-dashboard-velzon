import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-graducation-achievements-page',
  templateUrl: './graducation-achievements-page.component.html',
  styleUrls: ['./graducation-achievements-page.component.scss'],
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
export class GraduationAchievementsPageComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  
  selectedUser :any =  'PA';

  selectedActivity: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.listData = data;
    this.breadCrumbItems = [
      { label: "Graduation", link: '/tafus/graduation'},
      { label: "Graduation Achievements List", active : true }
    ];
  }

  onSearch() {
    this.onFilter();
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  
  setRequest(request : any) {
    this.selectedActivity = request;
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
      

}
