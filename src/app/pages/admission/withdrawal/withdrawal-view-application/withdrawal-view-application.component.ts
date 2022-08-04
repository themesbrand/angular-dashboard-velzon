import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
@Component({
  selector: 'app-withdrawal-view-application',
  templateUrl: './withdrawal-view-application.component.html',
  styleUrls: ['./withdrawal-view-application.component.scss'],
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
export class WithdrawalViewApplicationComponent implements OnInit {

  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;


  approvalForm !: FormGroup
  selectedApplication: any;
  clearanceForm !: FormGroup;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Transfer", link: '/admission/transfer'},
      { label: "View Application", active : true }
    ];
    this.userRole = localStorage.getItem('userType');
   
    this.approvalFormInit();
    //Change according to the backend
    this.checkUserRole();
    this.clearanceFormInit()
  }

  clearanceFormInit() {
    this.clearanceForm = this.formBuilder.group({
      remarksArray : new FormArray([])
    })
    this.addRemarks()
  }

  approvalFormInit() {
    this.approvalForm = this.formBuilder.group({
      approvalStatus : new FormControl(null)
    })
  }

  get approvalFormValues() {
    return this.approvalForm.value
  }

  get remarksControls() {
    return (<FormArray>this.clearanceForm.get('remarksArray')).controls;
  }

  addRemarks() {
    (<FormArray>this.clearanceForm.get('remarksArray')).push(
      new FormGroup({
        remarks : new FormControl(null, []),
      })
    );
  }
  onDeleteRemarks(index : number) {
    if((<FormArray>this.clearanceForm.get('remarksArray')).length != 1) {
      (<FormArray>this.clearanceForm.get('remarksArray')).removeAt(index);
    }
  }

  checkUserRole() {
    if(this.userRole === 'employer@omsb.org') {
      this.listData.tableData = this.listData.tableDataEmployerView
    }
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
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
