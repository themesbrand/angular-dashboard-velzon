import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs/operators';

import {data} from '../../data';

@Component({
  selector: 'app-program-referral-request-form',
  templateUrl: './program-referral-request-form.component.html',
  styleUrls: ['./program-referral-request-form.component.scss']
})
export class ProgramReferralRequestFormComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  requestForm !: FormGroup;

  isNextStep : boolean = false;

  supportingDocument: File[] = [];

  constructor(private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Program Referral", link : '/counselling/program-referral' },
      { label: "Program Referral Request Form", active : true }
    ];
    this.requestFormInit();
  }

  //Dummy Function
  onChangeOmsb() {
    console.log(this.formValue.omsb)
    if(this.formValue.omsb) {
      this.patchUserData()
    } else if (this.formValue.omsb === null) {
      this.requestForm.reset()
    }
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
      reasonType : new FormControl(null),
      referralReason : new FormControl(null),
      preferredContactMethod : new FormControl(null),
      isTraineeAware : new FormControl(null),
      supportDocumentLink : new FormControl(null)
    })

  }
  
  patchUserData() {
    this.requestForm.patchValue(this.listData.userDetailsObject)
  }

  get formValue () {
    return this.requestForm.value
  }

  onNavigate() {
    this.router.navigate(['/counselling/program-referral'])
  }

  onSelect(event : any) {
    this.supportingDocument.push(...event.addedFiles);
  }
  onRemove(event : any) {
    this.supportingDocument.splice(this.supportingDocument.indexOf(event), 1);
  }

}
