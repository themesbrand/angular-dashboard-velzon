import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from '../../data';


@Component({
  selector: 'app-mmr-dashboard-mini-medical-record',
  templateUrl: './mmr-dashboard-mini-medical-record.component.html',
  styleUrls: ['./mmr-dashboard-mini-medical-record.component.scss']
})
export class MmrDashboardMiniMedicalRecordComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  returnUrl: any;

  isFromProgramReferral: boolean = false;
  isAssessmentVisible: boolean = false;

  constructor(private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MMR Dashboard", link : 'counselling/mmr-dashboard' },
      { label: "Mini Medical Record", active : true }
    ];
  }

  onNavigate(url : any){
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
