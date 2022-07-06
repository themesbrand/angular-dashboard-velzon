import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss']
})
export class RotationComponent implements OnInit {

  listData = data;

  tableTotal : any = [];

  @ViewChild("electiveSelector") electiveSelector !: TemplateRef<any>;


  constructor(private router : Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getTableTotal()
  }

  getTableTotal() {
    let R1Total = 0;
    let R2Total = 0;
    let R3Total = 0;
    let R4Total = 0;
    let R5Total = 0;
    let total = 0;

    this.listData.tableData.forEach(r => {
      R1Total += +r.R1
      R2Total += +r.R2
      R3Total += +r.R3
      R4Total += +r.R4
      R5Total += +r.R5
    })
    total = R1Total + R2Total + R3Total + R4Total + R5Total
    this.tableTotal.push(R1Total, R2Total, R3Total, R4Total, R5Total, total)
  }

  onNavigate() {
    this.router.navigateByUrl('/ec-setup/add-rotation')
  }

  onClickAction(rotation : any) {
    if(rotation != 'Annual Leave') {
      if(rotation != 'Elective') {
        this.modalService.dismissAll();
        this.router.navigateByUrl('/ec-setup/view-rotation')
      } else {
        this.openModel(this.electiveSelector)
      }
    } 
  }

  openModel(modal: any) {
    this.modalService.open(modal, { centered: true });
  }

}
