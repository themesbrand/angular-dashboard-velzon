import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-simulation-facilities-for-rent',
  templateUrl: './simulation-facilities-for-rent.component.html',
  styleUrls: ['./simulation-facilities-for-rent.component.scss'],
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
export class SimulationFacilitiesForRentComponent implements OnInit {

  userRole: string | null = null;
  listData = data;

  selectedUser :any =  'EC Member';


  isFilterOpened: boolean = false;

  selectedActivity: any;
  selectedComments: any[]  = [];

  supportingFiles: File[] = [];
  
  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
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

  setRequest(request : any) {
    this.selectedActivity = request;
  }

  onChangeUser(event : any) {
    if(event === 'PD') {

    }
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
