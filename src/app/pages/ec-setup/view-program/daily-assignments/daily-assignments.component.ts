import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-daily-assignments',
  templateUrl: './daily-assignments.component.html',
  styleUrls: ['./daily-assignments.component.scss']
})
export class DailyAssignmentsComponent implements OnInit {

  listData = data;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

    
  onEdit(i : any) {

  }

  openModel(modal: any) {
    this.modalService.open(modal, { centered: true, size: 'md' });
  }

}
