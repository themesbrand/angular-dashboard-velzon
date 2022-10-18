import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';


@Component({
  selector: 'app-ec-remove-faculty-member',
  templateUrl: './ec-remove-faculty-member.component.html',
  styleUrls: ['./ec-remove-faculty-member.component.scss']
})
export class EcRemoveFacultyMemberComponent implements OnInit {

  userRole: string | null = null;

  listData = data;

  selectedUser :any =  'Chairman / PD / PA';
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  selectedRequest: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

    this.breadCrumbItems = [
      { label: "Education Committee", link: '/education-committee'},
      { label: "Remove Faculty Members", active : true }
    ];
  }
  setRequest(request: any) {
    console.log(request)
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
