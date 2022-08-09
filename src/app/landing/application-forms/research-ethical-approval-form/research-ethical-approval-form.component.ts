import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {userDetails} from 'src/app/landing/application-forms/data';
import {data} from './data';

@Component({
  selector: 'app-research-ethical-approval-form',
  templateUrl: './research-ethical-approval-form.component.html',
  styleUrls: ['./research-ethical-approval-form.component.scss'],
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
export class ResearchEthicalApprovalFormComponent implements OnInit {

  isFilterOpened: boolean = false;

  listData = data;

  userDetails: any = userDetails;

  applicationForm !: FormGroup

  dataCollectionSheetFiles  : File[] = []
  consentFiles : File[] = []
  cvFiles : File[] = []
  ethicalApprovalFiles : File[] = []
  otherDocumentsFiles : File[] = []
  selectedApplication: any;

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal

  ) { }

  ngOnInit(): void {
    this.applicationFormInit();
  }

  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      //Please note that all the parameters were not included in the formGroup
      researchType: new FormControl(null),
      typeOfStudyDesign: new FormControl(null),
      isOtherHealthInstitutionsInvolved: new FormControl(null),
      researchTeam : new FormArray([]),
      researchProposal : new FormArray([]),
      timelineAndWorkPlan : new FormArray([]),
      //Other Details
      isHealthInstitutionsInvolved : new FormControl(null),
      isResearchFundingRequired : new FormControl(null),

    })
    this.addResearchTeam();
    this.addResearchProposals();
    this.addTimelineAndWorkPlan();
  }

  get applicationFormValues () {
    return this.applicationForm.value;
  }

  get researchTeamControls() {
    return (<FormArray>this.applicationForm.get('researchTeam')).controls;
  }
  get researchProposalControls() {
    return (<FormArray>this.applicationForm.get('researchProposal')).controls;
  }
  get timelineAndWorkPlanControls() {
    return (<FormArray>this.applicationForm.get('timelineAndWorkPlan')).controls;
  }

  addResearchTeam() {
    (<FormArray>this.applicationForm.get('researchTeam')).push(
      new FormGroup({
        researchMemberName : new FormControl(null, []),
        tasks: new FormControl(null, [])
      })
    );
  }
  addResearchProposals() {
    (<FormArray>this.applicationForm.get('researchProposal')).push(
      new FormGroup({
        review : new FormControl(null, []),
        objectives: new FormControl(null, [])
      })
    );
  }
  addTimelineAndWorkPlan() {
    (<FormArray>this.applicationForm.get('timelineAndWorkPlan')).push(
      new FormGroup({
        activity : new FormControl(null, []),
        time: new FormControl(null, [])
      })
    );
  }

  onDeleteResearchTeam(index : number) {
    if((<FormArray>this.applicationForm.get('researchTeam')).length != 1) {
      (<FormArray>this.applicationForm.get('researchTeam')).removeAt(index);
    }
  }
  onDeleteResearchProposal(index : number) {
    if((<FormArray>this.applicationForm.get('researchProposal')).length != 1) {
      (<FormArray>this.applicationForm.get('researchProposal')).removeAt(index);
    }
  }
  onDeleteTimelineAndWorkPlan(index : number) {
    if((<FormArray>this.applicationForm.get('timelineAndWorkPlan')).length != 1) {
      (<FormArray>this.applicationForm.get('timelineAndWorkPlan')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'dataCollectionSheetFiles' : {
        this.dataCollectionSheetFiles.splice(this.dataCollectionSheetFiles.indexOf(event), 1);
        return
      }
      case 'consentFiles' : {
        this.consentFiles.splice(this.consentFiles.indexOf(event), 1);
        return
      }
      case 'cvFiles' : {
        this.cvFiles.splice(this.cvFiles.indexOf(event), 1);
        return
      }
      case 'ethicalApprovalFiles' : {
        this.ethicalApprovalFiles.splice(this.ethicalApprovalFiles.indexOf(event), 1);
        return
      }
      
      case 'otherDocumentsFiles' : {
        this.otherDocumentsFiles.splice(this.otherDocumentsFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {

    
    switch(type) {
      case 'dataCollectionSheetFiles' : {
        this.dataCollectionSheetFiles.push(...event.addedFiles);
        return
      }
      case 'consentFiles' : {
        this.consentFiles.push(...event.addedFiles);
        return
      }
      case 'cvFiles' : {
        this.cvFiles.push(...event.addedFiles);
        return
      }
      case 'ethicalApprovalFiles' : {
        this.ethicalApprovalFiles.push(...event.addedFiles);
        return
      }
      case 'otherDocumentsFiles' : {
        this.otherDocumentsFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }


  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }
}
