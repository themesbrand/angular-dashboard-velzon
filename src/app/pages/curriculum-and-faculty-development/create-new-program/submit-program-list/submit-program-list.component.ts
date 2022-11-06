import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-submit-program-list',
  templateUrl: './submit-program-list.component.html',
  styleUrls: ['./submit-program-list.component.scss']
})
export class SubmitProgramListComponent implements OnInit {

  userRole: string | null = null;

  listData = data;

  selectedUser :any =  'Requestor';
  selectedRequest: any;

  isFilterOpened: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
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

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
