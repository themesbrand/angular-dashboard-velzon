import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';


@Component({
  selector: 'app-new-change-position-request',
  templateUrl: './new-change-position-request.component.html',
  styleUrls: ['./new-change-position-request.component.scss']
})
export class NewChangePositionRequestComponent implements OnInit {

  
  listData = data;
  formRequest = data.formRequest  

  isSearched: boolean = false;

  constructor(
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.isSearched = true
  }

  openModal(modal :any, size : any) {
    this.modalService.dismissAll();
    this.modalService.open(modal, {size : size})
  }

}
