import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-three-d-object-applications-list',
  templateUrl: './three-d-object-applications-list.component.html',
  styleUrls: ['./three-d-object-applications-list.component.scss']
})
export class ThreeDObjectApplicationsListComponent implements OnInit {
  selectedRequest: any;

  listData = data;

  constructor(
    private modalService : NgbModal,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
