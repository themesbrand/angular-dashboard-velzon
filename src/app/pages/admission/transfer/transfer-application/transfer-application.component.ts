import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';


@Component({
  selector: 'app-transfer-application',
  templateUrl: './transfer-application.component.html',
  styleUrls: ['./transfer-application.component.scss']
})
export class TransferApplicationComponent implements OnInit {

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
      { label: "Transfer", link: '/admission/transfer'},
      { label: "Application", active : true }
    ];
    this.applicationFormInit();
  }

  
  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      transferType : new FormControl(null, []),

    })
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }
  

  get applicationFormValues() {
    return this.applicationForm.value
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
