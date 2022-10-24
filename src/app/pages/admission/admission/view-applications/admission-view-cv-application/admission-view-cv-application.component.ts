import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import {data} from './data'

@Component({
  selector: 'app-admission-view-cv-application',
  templateUrl: './admission-view-cv-application.component.html',
  styleUrls: ['./admission-view-cv-application.component.scss']
})
export class AdmissionViewCvApplicationComponent implements OnInit {

  applicationForm !: FormGroup

  listData = data;
  
  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
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
}
