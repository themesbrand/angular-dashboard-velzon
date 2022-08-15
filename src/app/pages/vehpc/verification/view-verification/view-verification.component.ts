import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';
import jsonData from '../../DataFlow JSON.json';

@Component({
  selector: 'app-view-verification',
  templateUrl: './view-verification.component.html',
  styleUrls: ['./view-verification.component.scss']
})
export class ViewVerificationComponent implements OnInit {
  userRole: string | null = null;
  dataFlowData = jsonData;
  
  isSearched : boolean = false;

  breadCrumbItems!: Array<{}>;
  listData = data;
  isLoading : boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
    this.breadCrumbItems = [
      { label: "Verification", link: '/vehpc/verification'},
      { label: "View Verification", active : true }
    ];
  }


  onSubmit(){
    this.isLoading = true
    setTimeout(()=> {
      this.isLoading = false
      this.isSearched = true;
    },1500)
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
