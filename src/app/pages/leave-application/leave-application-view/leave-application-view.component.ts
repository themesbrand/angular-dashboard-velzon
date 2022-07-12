import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from '../data'

@Component({
  selector: 'app-leave-application-view',
  templateUrl: './leave-application-view.component.html',
  styleUrls: ['./leave-application-view.component.scss']
})
export class LeaveApplicationViewComponent implements OnInit {
  
  listData = data;
  leaveForm !: FormGroup
  leaveDetailsObject: any;

  @Input('leaveObject') 
  set leaveDetails(data: any){
    this.leaveDetailsObject = data;
    console.log(this.leaveDetailsObject)
  };

  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.leaveFormInit();

    this.leaveForm.patchValue(
      this.leaveDetailsObject
    )
  }

  leaveFormInit() {
    this.leaveForm = this.formBuilder.group({
      dateOfApplication : new FormControl(''),      
      typeOfLeave : new FormControl(null),
      leaveFrom : new FormControl(null),
      leaveTo : new FormControl(null),
      numberOfDays : new FormControl(null),
      contactOnLeaveName : new FormControl(null),
      contactOnLeaveEmail : new FormControl(null),
      contactOnLeavePhone : new FormControl(null),
      leaveStatus : new FormControl(null),
      leaveApprovalStatus : new FormControl(null),
      leaveReturnForm : new FormControl(null),
    })
  }

  get formValues () {
    return this.leaveForm.value
  }

  onNavigate() {
    this.router.navigateByUrl('/leave-application/leave-return-application', { state : {
      data : this.leaveDetailsObject
    }});
    this.modalService.dismissAll()
  }
}
