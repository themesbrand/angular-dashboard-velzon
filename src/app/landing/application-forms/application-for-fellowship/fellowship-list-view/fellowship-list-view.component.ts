import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-fellowship-list-view',
  templateUrl: './fellowship-list-view.component.html',
  styleUrls: ['./fellowship-list-view.component.scss']
})
export class FellowshipListViewComponent implements OnInit {


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
