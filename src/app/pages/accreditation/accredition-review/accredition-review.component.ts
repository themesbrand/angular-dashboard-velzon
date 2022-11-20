import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-accredition-review',
  templateUrl: './accredition-review.component.html',
  styleUrls: ['./accredition-review.component.scss']
})
export class AccreditionReviewComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  formSpecific : any = null;
  isApplicableFor : boolean = false;
  
  userRole: string | null = null;

  selectedUser :any =  'AC';

  listData = data;

  selectedRequest: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
   ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Accreditation", link: '/accreditation'},
      { label: "Accreditation Review ", active : true }
    ];
    this.userRole = localStorage.getItem('userType');
  }

  setRequest(request: any) {
    this.selectedRequest = request
  }
  
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChangeUser(event : any) {
    if(event === 'PD') {

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
