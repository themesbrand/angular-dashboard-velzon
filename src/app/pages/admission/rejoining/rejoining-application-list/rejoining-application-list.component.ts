import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import {data} from './data';

@Component({
  selector: 'app-rejoining-application-list',
  templateUrl: './rejoining-application-list.component.html',
  styleUrls: ['./rejoining-application-list.component.scss'],
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
export class RejoiningApplicationListComponent implements OnInit {

  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  approvalForm !: FormGroup
  selectedApplication: any;

  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  applicationForm !: FormGroup
  filesAssessment: any[] = [];
  filesPersonalStatements: any[] = [];
  filesExams: any[] = [];
  filesPassportPhoto: any[] = [];

  isEditable: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Rejoining", link: '/admission/rejoining'},
      { label: "View Application", active : true }
    ];
    this.userRole = localStorage.getItem('userType');

    this.applicationFormInit()
   
    this.approvalFormInit();
    //Change according to the backend
    this.checkUserRole();

    this.applicationForm.patchValue(this.listData.applicationForm)

  }

  approvalFormInit() {
    this.approvalForm = this.formBuilder.group({
      approvalStatus : new FormControl(null)
    })
  }

  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      name : new FormControl('', []),
      birthday : new FormControl(null, []),
      nationality : new FormControl(null, []),
      nationalIDNo : new FormControl('', []),
      passportNo : new FormControl('', []),
      maritalStatus : new FormControl(null, []),
      permanentAddress : new FormControl('', []),
      wilayatOrRegion : new FormControl(null, []),
      mobileNumber : new FormControl('', []),
      nameNextKin : new FormControl('', []),
      contactNextKin : new FormControl('', []),
      diseases  : new FormControl('', []),

      isEmployed  : new FormControl(null, []),
      nameOfInstitution  : new FormControl(null, []),
      department  : new FormControl(null, []),
      currentPosition  : new FormControl(null, []),

      dateOfJoiningOmsb  : new FormControl(null, []),
      dateOfWithdrawal  : new FormControl(null, []),
      programAtWithdrawal  : new FormControl(null, []),
      levelOfTrainingAtWithdrawal  : new FormControl(null, []),

      postGraduateQualifications  : new FormControl(null, []),
      postGraduateTrainingExperience  : new FormControl(null, []),

      sponsorship  : new FormControl(null, []),

      //QUALIFICATION DATA SECTION
      secondarySchool : new FormArray([]),
      medicineSchool : new FormArray([]),
      clinicalElectives : new FormArray([]),
      certificateCourses : this.formBuilder.group({
        blsCertificateExpiry : new FormControl(null, []),
        aclsCertificateExpiry : new FormControl(null, [])
      }),
      internship : new FormArray([]),
      research : new FormArray([]),
      publications : new FormControl('', []),
      presentations : new FormControl('', []),
      honorsAndAwards : new FormControl('', []),
      communityService : new FormArray([]),

      assessmentUploadLink : new FormControl(null)
    })

    this.addSecondarySchool();
    this.addMedicineSchool();
    this.addClinicalElectives();
    this.addInternship();
    this.addResearch();
    this.addCommunityService();
  }

  get applicationFormValues() {
    return this.applicationForm.value
  }
  get certificateCoursesValues() {
    return this.applicationForm.get('certificateCourses')?.value
  }

  get secondarySchoolControls() {
    return (<FormArray>this.applicationForm.get('secondarySchool')).controls;
  }
  get medicineSchoolControls() {
    return (<FormArray>this.applicationForm.get('medicineSchool')).controls;
  }
  get clinicalElectivesControls() {
    return (<FormArray>this.applicationForm.get('clinicalElectives')).controls;
  }
  get internshipControls() {
    return (<FormArray>this.applicationForm.get('internship')).controls;
  }
  get researchControls() {
    return (<FormArray>this.applicationForm.get('research')).controls;
  }
  get addCommunityServiceControls() {
    return (<FormArray>this.applicationForm.get('communityService')).controls;
  }
  addSecondarySchool() {
    (<FormArray>this.applicationForm.get('secondarySchool')).push(
      new FormGroup({
        'school' : new FormControl('', []),
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'country' : new FormControl(null, [])
      })
    );
  }
  addMedicineSchool() {
    (<FormArray>this.applicationForm.get('medicineSchool')).push(
      new FormGroup({
        'school' : new FormControl('', []),
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'country' : new FormControl(null, [])
      })
    );
  }
  addClinicalElectives() {
    (<FormArray>this.applicationForm.get('clinicalElectives')).push(
      new FormGroup({
        'department' : new FormControl('', []),
        'date' : new FormControl(null, [])
      })
    );
  }
  addInternship() {
    (<FormArray>this.applicationForm.get('internship')).push(
      new FormGroup({
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'country' : new FormControl(null, []),
      })
    );
  }
  addResearch() {
    (<FormArray>this.applicationForm.get('research')).push(
      new FormGroup({
        'projectTitle' : new FormControl('', []),
        'position' : new FormControl('', []),
        'inclusiveDates' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'department' : new FormControl('', []),
        'mentor' : new FormControl('', [])
      })
    );
  }
  addCommunityService() {
    (<FormArray>this.applicationForm.get('communityService')).push(
      new FormGroup({
        'fromDate' : new FormControl(null, []),
        'toDate' : new FormControl(null, []),
        'description' : new FormControl('', [])
      })
    );
  }
  onDeleteSecondarySchool(index : number) {
    if((<FormArray>this.applicationForm.get('secondarySchool')).length != 1) {
      (<FormArray>this.applicationForm.get('secondarySchool')).removeAt(index);
    }
  }
  onDeleteMedicineSchool(index : number) {
    if((<FormArray>this.applicationForm.get('medicineSchool')).length != 1) {
      (<FormArray>this.applicationForm.get('medicineSchool')).removeAt(index);

    }
  }
  onDeleteClinicalElectives(index : number) {
    if((<FormArray>this.applicationForm.get('clinicalElectives')).length != 1) {
      (<FormArray>this.applicationForm.get('clinicalElectives')).removeAt(index);

    }
  }
  onDeleteInternship(index : number) {
    if((<FormArray>this.applicationForm.get('internship')).length != 1) {
      (<FormArray>this.applicationForm.get('internship')).removeAt(index);

    }
  }
  onDeleteResearch(index : number) {
    if((<FormArray>this.applicationForm.get('research')).length != 1) {
      (<FormArray>this.applicationForm.get('research')).removeAt(index);

    }
  }
  onDeleteCommunityService(index : number) {
    if((<FormArray>this.applicationForm.get('communityService')).length != 1) {
      (<FormArray>this.applicationForm.get('communityService')).removeAt(index);

    }
  }

  get approvalFormValues() {
    return this.approvalForm.value
  }

  checkUserRole() {
    if(this.userRole === 'employer@omsb.org') {
      this.listData.tableData = this.listData.tableDataEmployerView
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
  
  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
