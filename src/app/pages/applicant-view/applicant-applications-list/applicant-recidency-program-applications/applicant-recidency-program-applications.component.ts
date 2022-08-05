import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-applicant-recidency-program-applications',
  templateUrl: './applicant-recidency-program-applications.component.html',
  styleUrls: ['./applicant-recidency-program-applications.component.scss']
})
export class ApplicantRecidencyProgramApplicationsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  listData = data;

  constructor(
    private modalService : NgbModal,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "My Applications", link: 'applicant/application-list'},
      { label: "Residency Program Applications", active : true }
    ];
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

  navigateBack() {
    this.router.navigateByUrl('applicant/application-list')
  }

}
