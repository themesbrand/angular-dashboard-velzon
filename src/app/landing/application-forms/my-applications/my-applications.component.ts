import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';


@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {

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
