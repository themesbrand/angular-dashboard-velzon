import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-innovation-initiative-list',
  templateUrl: './innovation-initiative-list.component.html',
  styleUrls: ['./innovation-initiative-list.component.scss']
})
export class InnovationInitiativeListComponent implements OnInit {

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
