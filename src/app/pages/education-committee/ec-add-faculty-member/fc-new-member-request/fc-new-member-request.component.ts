import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-fc-new-member-request',
  templateUrl: './fc-new-member-request.component.html',
  styleUrls: ['./fc-new-member-request.component.scss']
})
export class FcNewMemberRequestComponent implements OnInit {

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
