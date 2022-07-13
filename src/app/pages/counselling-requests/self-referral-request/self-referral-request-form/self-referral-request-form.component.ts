import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from '../../data';

@Component({
  selector: 'app-self-referral-request-form',
  templateUrl: './self-referral-request-form.component.html',
  styleUrls: ['./self-referral-request-form.component.scss']
})
export class SelfReferralRequestFormComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  requestForm !: FormGroup;
  
  supportingDocument: File[] = [];

  constructor(private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Self Referral", link : '/counselling/self-referral' },
      { label: "Self Referral Request Form", active : true }
    ];
    this.requestFormInit();
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      name : new FormControl(null),
      omsb : new FormControl(null),
      academicYear : new FormControl(null),
      trainingProgram : new FormControl(null),
      yearOfTraining : new FormControl(null),
      telephoneNumber : new FormControl(null),
      emailAddress : new FormControl(null),
      referralReason : new FormControl(null),
      profferedContactMethod : new FormControl(null),
      supportDocumentLink : new FormControl(null)
    })

    this.patchUserData()
  }
  
  patchUserData() {
    this.requestForm.patchValue(this.listData.userDetailsObject)
  }

  get formValue () {
    return this.requestForm.value
  }

  onRemove(event : any) {
    this.supportingDocument.splice(this.supportingDocument.indexOf(event), 1);
  }

  onSelect(event : any) {
    this.supportingDocument.push(...event.addedFiles);
  }
  onNavigate() {
    this.router.navigateByUrl('/counselling/self-referral')
  }
}
