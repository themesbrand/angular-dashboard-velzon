import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from '../data';

@Component({
  selector: 'app-leave-return-application',
  templateUrl: './leave-return-application.component.html',
  styleUrls: ['./leave-return-application.component.scss']
})
export class LeaveReturnApplicationComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  leaveReturnForm !: FormGroup


  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Leave Application", link : 'leave-application'},
      { label: "Return from Leave", active : true }
    ];
    this.leaveReturnFormInit()

    console.log(history.state)
    this.leaveReturnForm.patchValue(this.listData.userData)
    this.leaveReturnForm.patchValue(history.state.data)
    
  }
  
  leaveReturnFormInit() {
    this.leaveReturnForm = this.formBuilder.group({
      trainee : new FormControl(''),
      omsbNumber : new FormControl(''),
      programName : new FormControl(''),
      trainingLevel : new FormControl(''),
      trainingSite : new FormControl(''),
      sponsor : new FormControl(''),
      address : new FormControl(''),
      email : new FormControl(''),
      dateOfApplication : new FormControl(''),
      
      typeOfLeave : new FormControl(null),
      leaveFrom : new FormControl(null),
      leaveTo : new FormControl(null),
      numberOfDays : new FormControl(0),
      reasonsForDelays : new FormControl(null),
      submissionDate : new FormControl(null),

      numberOfDaysInExcess : new FormControl(null),
      reasonsForDelay : new FormControl(null),


    })
  }

  
  get formValues () {
    return this.leaveReturnForm.value
  }

  onNavigate() {
    this.router.navigateByUrl('/leave-application')
  }

  onSubmit() {
    this.router.navigateByUrl('/leave-application')
  }
}
