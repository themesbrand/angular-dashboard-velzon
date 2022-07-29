import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-research-ethical-approval',
  templateUrl: './research-ethical-approval.component.html',
  styleUrls: ['./research-ethical-approval.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class ResearchEthicalApprovalComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = false;
  applicationReviewStatus: any;
  assignReviewersStatus: any;

  auditReportFiles : File[] = [];
  equipmentPurchasedFiles : File[] = [];
  publicationsFiles : File[] = [];
  selectedApplication: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research", link: '/research/view-application'},
      { label: "Ethical Approval", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChangeApplicationReviewStatus(event: any) {
    console.log(event)
    this.applicationReviewStatus = event;
  }

  onChangeAssignReviewersStatus(event: any) {
    console.log(event)
    this.assignReviewersStatus = event;
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'auditReportFiles' : {
        this.auditReportFiles.splice(this.auditReportFiles.indexOf(event), 1);
        return
      }
      case 'equipmentPurchasedFiles' : {
        this.equipmentPurchasedFiles.splice(this.equipmentPurchasedFiles.indexOf(event), 1);
        return
      }
      case 'publicationsFiles' : {
        this.publicationsFiles.splice(this.publicationsFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'auditReportFiles' : {
        this.auditReportFiles.push(...event.addedFiles);
        return
      }
      case 'equipmentPurchasedFiles' : {
        this.equipmentPurchasedFiles.push(...event.addedFiles);
        return
      }
      case 'publicationsFiles' : {
        this.publicationsFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }

}
