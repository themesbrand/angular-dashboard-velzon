import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {userDetails} from 'src/app/landing/application-forms/data';

import {data} from './data';

@Component({
  selector: 'app-research-funding-opportunities-form',
  templateUrl: './research-funding-opportunities-form.component.html',
  styleUrls: ['./research-funding-opportunities-form.component.scss'],
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
export class ResearchFundingOpportunitiesFormComponent implements OnInit {

  listData = data;
  isFilterOpened: boolean = false;
  selectedApplication: any;

  userDetails: any = userDetails;

  applicationForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.applicationFormInit();
  }
  
  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      projectApplicationType : new FormControl(null),
      expectedOutcomes : new FormArray([]),
      teamDetails : new FormArray([]),
      budgetSummary  : new FormArray([]),

    })
    this.addExpectedOutcomes()
    this.addTeamDetails()
    this.addBudgetSummary()
  }
  get applicationValues() {
    return this.applicationForm.value
  }
  
  get expectedOutcomesControls() {
    return (<FormArray>this.applicationForm.get('expectedOutcomes')).controls;
  }
  get teamDetailsControls() {
    return (<FormArray>this.applicationForm.get('teamDetails')).controls;
  }
  get budgetSummaryControls() {
    return (<FormArray>this.applicationForm.get('budgetSummary')).controls;
  }
  
  addExpectedOutcomes() {
    (<FormArray>this.applicationForm.get('expectedOutcomes')).push(
      new FormGroup({
        outcomeType : new FormControl(null, []),
        omani: new FormControl(null, []),
        nonOmani: new FormControl(null, [])
      })
    );
  }
  addTeamDetails() {
    (<FormArray>this.applicationForm.get('teamDetails')).push(
      new FormGroup({
        position : new FormControl(null, []),
        name: new FormControl(null, []),
        civilId: new FormControl(null, []),
        email: new FormControl(null, [])
      })
    );
  }
  
  addBudgetSummary() {
    (<FormArray>this.applicationForm.get('budgetSummary')).push(
      new FormGroup({
        budgetCategory : new FormControl(null, []),
        budget: new FormControl(null, [])
      })
    );
  }

  onDeleteExpectedOutcomes(index : number) {
    if((<FormArray>this.applicationForm.get('expectedOutcomes')).length != 1) {
      (<FormArray>this.applicationForm.get('expectedOutcomes')).removeAt(index);
    }
  }
  onDeleteTeamDetails(index : number) {
    if((<FormArray>this.applicationForm.get('teamDetails')).length != 1) {
      (<FormArray>this.applicationForm.get('teamDetails')).removeAt(index);
    }
  }
  onDeleteBudgetSummary(index : number) {
    if((<FormArray>this.applicationForm.get('budgetSummary')).length != 1) {
      (<FormArray>this.applicationForm.get('budgetSummary')).removeAt(index);
    }
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  
  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }


}
