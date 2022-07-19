import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';


@Component({
  selector: 'app-finance-view-acceptance-letter',
  templateUrl: './finance-view-acceptance-letter.component.html',
  styleUrls: ['./finance-view-acceptance-letter.component.scss']
})
export class FinanceViewAcceptanceLetterComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  
  budgetFile: File[] = [];

  acceptanceLetterForm !: FormGroup;

  constructor(private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Acceptance Letter", active : true }
    ];
    this.acceptanceLetterFormInit()
    this.patchValue();
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

  get formValues () {
    return this.acceptanceLetterForm.value;
  }

  onRemove(event : any) {
    this.budgetFile.splice(this.budgetFile.indexOf(event), 1);
  }

  onSelect(event : any) {
    this.budgetFile.push(...event.addedFiles);
  }

  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }
}
