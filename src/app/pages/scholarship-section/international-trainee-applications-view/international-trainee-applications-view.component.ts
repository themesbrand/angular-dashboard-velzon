import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-international-trainee-applications-view',
  templateUrl: './international-trainee-applications-view.component.html',
  styleUrls: ['./international-trainee-applications-view.component.scss']
})
export class InternationalTraineeApplicationsViewComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;

  selectedRequest: any = {};

  requestType: any = null;

  statusUpdateForm  !: FormGroup;

  constructor(private router : Router,private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "International Trainee Applications", active : true }
    ];

    this.statusUpdateForm = this.formBuilder.group({
      status : new FormControl(null)
    })
  }

  get formValues() {
    return this.statusUpdateForm.value
  }
  setRequest(object : any) {
    this.selectedRequest = object;
  }
  
  onNavigate(url : any ) {
    this.router.navigateByUrl(url)
  }

  onSubmit() {
    console.log(this.requestType)  
  }

  openModal(modal : any) {
    this.modalService.open(modal, {size : 'lg'})
  }

}
