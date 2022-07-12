import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


import {data} from '../data';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.scss']
})
export class LeaveRequestFormComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  leaveForm !: FormGroup
  leaveToMinDate: any;

  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Leave Application", link : 'leave-application'},
      { label: "Leave Application Form", active : true }
    ];
    this.leaveFormInit()
  }

  leaveFormInit() {
    this.leaveForm = this.formBuilder.group({
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
      contactOnLeaveName : new FormControl(null),
      contactOnLeaveEmail : new FormControl(null),
      contactOnLeavePhone : new FormControl(null),

    })

    this.setUserData()
  }

  get formValues () {
    return this.leaveForm.value
  }

  setUserData() {
    this.leaveForm.patchValue(this.listData.userData)
    
  }

  onChangeFromDate(event : any) {
    this.leaveForm.get('leaveTo')?.patchValue(null)
    this.leaveForm.get('numberOfDays')?.patchValue(0)
    this.leaveForm.get('leaveForm')?.patchValue(event?.value)
    this.leaveToMinDate = new Date(event?.value)
  }

  onChangeToDate(event : any) {
    let count = 0;
    const fromDate = new Date(this.formValues.leaveFrom)
    const toDate = new Date(event?.value)
    while ( fromDate <= toDate) {
      const dayOfWeek = fromDate.getDay();
      const isWeekend = (dayOfWeek === 5) || (dayOfWeek === 6)
      if (!isWeekend) {
        count++;
      }
      fromDate.setDate(fromDate.getDate() + 1);
    }
    this.leaveForm.patchValue({
      numberOfDays : count
    })
  }

  onNavigate() {
    this.router.navigateByUrl('/leave-application')
  }

}
