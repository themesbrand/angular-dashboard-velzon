import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {data} from './data';

@Component({
  selector: 'app-oc-view-reports',
  templateUrl: './oc-view-reports.component.html',
  styleUrls: ['./oc-view-reports.component.scss']
})
export class OcViewReportsComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  selectedReportType : any;

  selectedReport : any ;

  constructor(  private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Reports", link: '/oc-examinations/reports'},
      { label: "View Reports", active : true }
    ];
  }

  onChangeReportType(event : any) {
    this.selectedReportType = event
    this.listData.tableData.forEach(element => {
      if(element.reportName === event) {
        this.selectedReport = element
      }
    })
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
