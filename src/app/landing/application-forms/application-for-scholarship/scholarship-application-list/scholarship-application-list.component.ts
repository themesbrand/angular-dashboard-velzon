import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';


@Component({
  selector: 'app-scholarship-application-list',
  templateUrl: './scholarship-application-list.component.html',
  styleUrls: ['./scholarship-application-list.component.scss']
})
export class ScholarshipApplicationListComponent implements OnInit {
   listData = data;

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }


}
