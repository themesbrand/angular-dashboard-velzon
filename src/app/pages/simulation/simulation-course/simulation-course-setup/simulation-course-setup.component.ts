import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-simulation-course-setup',
  templateUrl: './simulation-course-setup.component.html',
  styleUrls: ['./simulation-course-setup.component.scss'],
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
  ],
})
export class SimulationCourseSetupComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;
  public Editor = ClassicEditor;

  createCourseSetupForm !: FormGroup;
  selectedCourseSetup: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Course", link: '/simulation/course'},
      { label: "Course Setup", active : true }
    ];
    this.createCourseSetupInit();
  }

  createCourseSetupInit() {
    this.createCourseSetupForm = this.formBuilder.group({
      courseCode : new FormControl(null),
      courseName : new FormControl(null),
      courseType : new FormControl(null),
      courseTypeOther : new FormControl(null),
      courseDescription : new FormControl(null),
      preRequisiteCourse : new FormControl(null),
      courseDuration : new FormControl(null),
      courseProvider : new FormControl(null),
      courseProviderOther : new FormControl(null),
      evaluationForm : new FormControl(null),
      courseStaffCoordinators : new FormControl(null),
      courseOtherCoordinators : new FormControl(null),
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

  get createCourseSetupValues() {
    return this.createCourseSetupForm.value;
  }
  
  get rolesControls() {
    return (<FormArray>this.createCourseSetupForm.get('roles')).controls;
  }
  get feesControls() {
    return (<FormArray>this.createCourseSetupForm.get('fees')).controls;
  }
  get standardizedPatientsControls() {
    return (<FormArray>this.createCourseSetupForm.get('standardizedPatients')).controls;
  }
  get certificateAndSignatoriesControls() {
    return (<FormArray>this.createCourseSetupForm.get('certificateAndSignatories')).controls;
  }

  usersRolePayControls(i : any) {
    const rolesArrayForm = (<FormArray>this.createCourseSetupForm.get('roles')).at(i) as FormGroup;
    return (<FormArray>rolesArrayForm.get('usersArray')).controls;
  }

  addRolesArray() {
    (<FormArray>this.createCourseSetupForm.get('roles')).push(
      new FormGroup({
        role : new FormControl(null, []),
        noOfRoles : new FormControl(null, []),
        usersArray : new FormArray([])
      })
    );
  }
  addFeesArray() {
    (<FormArray>this.createCourseSetupForm.get('fees')).push(
      new FormGroup({
        participantType : new FormControl(null, []),
        fee : new FormControl(null, []),
      })
    );
  }
  addStandardizedPatientsArray() {
    (<FormArray>this.createCourseSetupForm.get('standardizedPatients')).push(
      new FormGroup({
        patient : new FormControl(null, [])
      })
    );
  }
  addCertificateAndSignatoriesArray() {
    (<FormArray>this.createCourseSetupForm.get('certificateAndSignatories')).push(
      new FormGroup({
        certificateType : new FormControl(null, []),
        certificateName : new FormControl(null, []),
        signatories  : new FormControl(null, []),
      })
    );
  }

  onChangeNoOfRoles(i : any) {
    const rolesArrayForm = (<FormArray>this.createCourseSetupForm.get('roles')).at(i) as FormGroup;

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
    (<FormArray>this.createCourseSetupForm.get('roles')).removeAt(i)
  }
  deleteFeesArray(i : any) {
    (<FormArray>this.createCourseSetupForm.get('fees')).removeAt(i)
  }
  deleteStandardizedPatientsArray(i : any) {
    (<FormArray>this.createCourseSetupForm.get('standardizedPatients')).removeAt(i)
  }
  deleteCertificateAndSignatoriesArray(i : any) {
    (<FormArray>this.createCourseSetupForm.get('certificateAndSignatories')).removeAt(i)
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setCourseSetup(courseSetup: any){
    this.selectedCourseSetup = courseSetup
  }

  onSubmit() {
    console.log(this.createCourseSetupForm.value)
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
