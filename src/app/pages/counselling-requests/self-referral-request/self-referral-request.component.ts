import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from '../data';

@Component({
  selector: 'app-self-referral-request',
  templateUrl: './self-referral-request.component.html',
  styleUrls: ['./self-referral-request.component.scss']
})
export class SelfReferralRequestComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  returnUrl: any;

  isFromProgramReferral: boolean = false;
  isAssessmentVisible: boolean = false;

  constructor(private router : Router, private route : ActivatedRoute,
    private modalService : NgbModal) { }

  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"];
    console.log(this.returnUrl)
    if(this.returnUrl === 'counselling/program-referral') {
      this.breadCrumbItems = [
        { label: "Program Referral", link : '/counselling/program-referral' },
        { label: "Self Referral", active : true }
      ];
      this.isFromProgramReferral = true
    } else {
      this.breadCrumbItems = [
        { label: "Self Referral", active : true }
      ];
    }
  }
  onNavigation(url: any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
