import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-simulation-workshop-setup',
  templateUrl: './simulation-workshop-setup.component.html',
  styleUrls: ['./simulation-workshop-setup.component.scss'],
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
export class SimulationWorkshopSetupComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;
  public Editor = ClassicEditor;

  createWorkshopSetupForm !: FormGroup;
  selectedWorkshopSetup: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Workshop", link: '/simulation/workshop'},
      { label: "Workshop Setup", active : true }
    ];
    this.createWorkshopSetupInit();
  }

  createWorkshopSetupInit() {
    this.createWorkshopSetupForm = this.formBuilder.group({
      workshopCode : new FormControl(null),
      workshopName : new FormControl(null),
      workshopType : new FormControl(null),
      workshopTypeOther : new FormControl(null),
      workshopDescription : new FormControl(null),
      preRequisiteWorkshop : new FormControl(null),
      workshopDuration : new FormControl(null),
      workshopProvider : new FormControl(null),
      workshopProviderOther : new FormControl(null),
      evaluationForm : new FormControl(null),
      workshopStaffCoordinators : new FormControl(null),
      workshopOtherCoordinators : new FormControl(null),
      cpdScore : new FormControl(null),
      manualType : new FormControl(null),
      eManualLink : new FormControl(null),
      manualsRequired : new FormControl(null),
      manualsAvailable : new FormControl(null),
      heartCodeKeys : new FormControl(null),
      noOfECards : new FormControl(null),
      roles : new FormArray([]),
      fees : new FormArray([]),
      standardizedPatients : new FormArray([]),
      certificateAndSignatories : new FormArray([]),
    })
    this.addRolesArray();
    this.addFeesArray();
    this.addStandardizedPatientsArray();
    this.addCertificateAndSignatoriesArray();
  }

  get createWorkshopSetupValues() {
    return this.createWorkshopSetupForm.value;
  }
  
  get rolesControls() {
    return (<FormArray>this.createWorkshopSetupForm.get('roles')).controls;
  }
  get feesControls() {
    return (<FormArray>this.createWorkshopSetupForm.get('fees')).controls;
  }
  get standardizedPatientsControls() {
    return (<FormArray>this.createWorkshopSetupForm.get('standardizedPatients')).controls;
  }
  get certificateAndSignatoriesControls() {
    return (<FormArray>this.createWorkshopSetupForm.get('certificateAndSignatories')).controls;
  }

  usersRolePayControls(i : any) {
    const rolesArrayForm = (<FormArray>this.createWorkshopSetupForm.get('roles')).at(i) as FormGroup;
    return (<FormArray>rolesArrayForm.get('usersArray')).controls;
  }

  addRolesArray() {
    (<FormArray>this.createWorkshopSetupForm.get('roles')).push(
      new FormGroup({
        role : new FormControl(null, []),
        noOfRoles : new FormControl(null, []),
        usersArray : new FormArray([])
      })
    );
  }
  addFeesArray() {
    (<FormArray>this.createWorkshopSetupForm.get('fees')).push(
      new FormGroup({
        participantType : new FormControl(null, []),
        fee : new FormControl(null, []),
      })
    );
  }
  addStandardizedPatientsArray() {
    (<FormArray>this.createWorkshopSetupForm.get('standardizedPatients')).push(
      new FormGroup({
        patient : new FormControl(null, [])
      })
    );
  }
  addCertificateAndSignatoriesArray() {
    (<FormArray>this.createWorkshopSetupForm.get('certificateAndSignatories')).push(
      new FormGroup({
        certificateType : new FormControl(null, []),
        certificateName : new FormControl(null, []),
        signatories  : new FormControl(null, []),
      })
    );
  }

  onChangeNoOfRoles(i : any) {
    const rolesArrayForm = (<FormArray>this.createWorkshopSetupForm.get('roles')).at(i) as FormGroup;

    (<FormArray>rolesArrayForm.get('usersArray')).clear()

    for(let i = 0; i < rolesArrayForm.value.noOfRoles; i++ ) {
      (<FormArray>rolesArrayForm.get('usersArray')).push(
        new FormGroup({
          userName : new FormControl(null),
          userPay : new FormControl(null),
        })
      )
    }
  }
  deleteRolesArray(i : any) {
    (<FormArray>this.createWorkshopSetupForm.get('roles')).removeAt(i)
  }
  deleteFeesArray(i : any) {
    (<FormArray>this.createWorkshopSetupForm.get('fees')).removeAt(i)
  }
  deleteStandardizedPatientsArray(i : any) {
    (<FormArray>this.createWorkshopSetupForm.get('standardizedPatients')).removeAt(i)
  }
  deleteCertificateAndSignatoriesArray(i : any) {
    (<FormArray>this.createWorkshopSetupForm.get('certificateAndSignatories')).removeAt(i)
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setWorkshopSetup(workshopSetup: any){
    this.selectedWorkshopSetup = workshopSetup
    console.log(workshopSetup)
  }

  onSubmit() {
    console.log(this.createWorkshopSetupForm.value)
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
