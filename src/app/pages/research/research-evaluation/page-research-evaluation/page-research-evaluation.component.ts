import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-page-research-evaluation',
  templateUrl: './page-research-evaluation.component.html',
  styleUrls: ['./page-research-evaluation.component.scss']
})
export class PageResearchEvaluationComponent implements OnInit {


  listData = data;
  isFilterOpened: boolean = false;
  selectedRequest: any;

  userRole: string | null = null;

  // tableData : any [] = []

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setRequest(request : any) {
    this.selectedRequest = request;
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
