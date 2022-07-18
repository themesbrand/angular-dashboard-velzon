import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-view-acceptance-letter',
  templateUrl: './view-acceptance-letter.component.html',
  styleUrls: ['./view-acceptance-letter.component.scss']
})
export class ViewAcceptanceLetterComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  acceptanceLetterForm !: FormGroup;
  applicationStatusForm !: FormGroup;
  isSponsoredByMoheri: boolean = false;

  constructor(private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Acceptance Letter", active : true }
    ];
    this.acceptanceLetterFormInit()
    this.applicationStatusFormInit()
    this.patchValue();
    console.log(history.state.sponsoredBy)
    if(history.state.sponsoredBy === 'MOHERI') {
      this.isSponsoredByMoheri = true;
    }
  }

  patchValue() {
    this.acceptanceLetterForm.patchValue(this.listData.acceptanceLetter)
  }

  acceptanceLetterFormInit() {
    this.acceptanceLetterForm = this.formBuilder.group({
      country : new FormControl(null),
      university : new FormControl(null),
      universityOther : new FormControl(null),
      programType : new FormControl(null),
      programSpecialty : new FormControl(null),
      programSubSpecialty : new FormControl(null),
      programSubSpecialtyOther : new FormControl(null),
      fromDate : new FormControl(null),
      toDate : new FormControl(null),
      duration : new FormControl(null)
    })
  }

  applicationStatusFormInit() {
    this.applicationStatusForm = this.formBuilder.group({
      applicationStatus : new FormControl(null),
      discussNotes : new FormControl(null),
      otherStatus : new FormControl(null),
    })
  }


  get formValues () {
    return this.acceptanceLetterForm.value;
  }

  
  get applicationStatusFormValues () {
    return this.applicationStatusForm.value;
  }



  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }

}
