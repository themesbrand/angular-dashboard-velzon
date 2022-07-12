import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  selectedLeave : any;

  constructor(private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Leave Applications", active : true }
    ];
  }

  openModal(modal : any){
    this.modalService.open(modal, {size : 'xl'})
  } 
  
  setLeave(leave : any) {
    this.selectedLeave = leave
  }

  onNavigate() {
    this.router.navigateByUrl('/leave-application/leave-request')
  }
}
