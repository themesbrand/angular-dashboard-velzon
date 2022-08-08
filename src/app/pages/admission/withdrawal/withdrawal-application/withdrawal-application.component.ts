import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-withdrawal-application',
  templateUrl: './withdrawal-application.component.html',
  styleUrls: ['./withdrawal-application.component.scss']
})
export class WithdrawalApplicationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  applicationForm !: FormGroup
  selectedApplication: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Withdrawal", link: '/admission/withdrawal'},
      { label: "Application", active : true }
    ];
    this.applicationFormInit();
  }

  
  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      withdrawalReason : new FormControl(null, []),

    })
  }

  get applicationFormValues() {
    return this.applicationForm.value
  }

  
  setApplication(application : any) {
    this.selectedApplication = application;
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
