import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-residency-program-list',
  templateUrl: './residency-program-list.component.html',
  styleUrls: ['./residency-program-list.component.scss']
})
export class ResidencyProgramListComponent implements OnInit {

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
