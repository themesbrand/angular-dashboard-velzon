import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConfig } from "gridjs";

import { data } from '../data';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.component.html',
  styleUrls: ['./add-procedure.component.scss']
})
export class AddProcedureComponent implements OnInit {

  listData = data;

  cptCodes : any[] = [];
  procedureName: any;


  public gridConfig: UserConfig = {
    columns: ["Code", "Description", "Area", "Type"],
    search: true,
    data: this.listData.cptCodes,
  };

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }

  handleCellClick(event: any) {
    console.log("cellClicked", event);
  }

  handleRowClick(event: any) {
    console.log("rowClicked", event);
    console.log(event[1]._cells[0].data);
    this.cptCodes = []
    this.cptCodes.push(event[1]._cells[0].data)
    this.modalService.dismissAll();

  }

  handleBeforeLoad(event: any) {
    console.log("beforeLoad", event);
  }

  handleGridLoad(event: any) {
    console.log("load", event);
  } 

  removeCptCode(i: any) {
    this.cptCodes.splice(i,1);
  }
}
