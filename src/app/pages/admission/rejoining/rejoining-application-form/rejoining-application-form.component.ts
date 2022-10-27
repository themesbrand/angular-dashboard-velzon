import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import {data} from './data';

@Component({
  selector: 'app-rejoining-application-form',
  templateUrl: './rejoining-application-form.component.html',
  styleUrls: ['./rejoining-application-form.component.scss']
})
export class RejoiningApplicationFormComponent implements OnInit {
  
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  isEditable: boolean = false;

  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  applicationForm !: FormGroup
  filesAssessment: any[] = [];
  filesPersonalStatements: any[] = [];
  filesExams: any[] = [];
  filesCertificates: any[] = [];
  filesPassportPhoto: any[] = [];
  selectedApplication: any;

  @ViewChild("rejoiningApplication") rejoiningApplication !: TemplateRef<any>;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Rejoining", link: '/admission/rejoining'},
      { label: "Application", active : true }
    ];
    this.applicationFormInit()
    this.formPatchValue()
  }

  formPatchValue(){
    this.applicationForm.patchValue(this.listData.formObjectValues)

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


  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesAssessment' : {
        this.filesAssessment.splice(this.filesAssessment.indexOf(event), 1);
        return
      }
      case 'filesPersonalStatements' : {
        this.filesPersonalStatements.splice(this.filesPersonalStatements.indexOf(event), 1);
        return
      }
      case 'filesExams' : {
        this.filesExams.splice(this.filesExams.indexOf(event), 1);
        return
      }
      case 'filesPassportPhoto' : {
        this.filesPassportPhoto.splice(this.filesPassportPhoto.indexOf(event), 1);
        return
      }
      case 'filesCertificates' : {
        this.filesCertificates.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesAssessment' : {
        this.filesAssessment.push(...event.addedFiles);
        return
      }
      case 'filesPersonalStatements' : {
        this.filesPersonalStatements.push(...event.addedFiles);
        return
      }
      case 'filesExams' : {
        this.filesExams.push(...event.addedFiles);
        return
      }
      case 'filesPassportPhoto' : {
        this.filesPassportPhoto.push(...event.addedFiles);
        return
      }
      case 'filesCertificates' : {
        this.filesCertificates.splice(this.filesCertificates.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }
  
  viewApplication() {
    this.formPatchValue();
    this.isEditable = false;
    this.openModal(this.rejoiningApplication, 'xl')
  }

  openAddApplication() {
    this.isEditable = true;
    this.openModal(this.rejoiningApplication, 'xl')
  }

  openModal(modal :any, size : any) {
    const modalRef =  this.modalService.open(modal, {size : size})
  }



}
