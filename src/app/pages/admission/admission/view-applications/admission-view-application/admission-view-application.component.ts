import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import {data} from '../data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admission-view-application',
  templateUrl: './admission-view-application.component.html',
  styleUrls: ['./admission-view-application.component.scss']
})
export class AdmissionViewApplicationComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  applicationForm !: FormGroup;
  screeningForm !: FormGroup;

  todayDate : Date = new Date();

  intakeYears: any[] = []
  trainingProgramsList: any[] = []

  filesBLSCertificate: File[] = [];
  filesACLSCertificate: File[] = [];
  filesProofDocs: File[] = [];
  filesSponsorshipLetter: File[] = [];
  filesMFD: File[] = [];
  filesCertificate: File[] = [];

  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  constructor(private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Applications", active : true }
    ];
    this.ApplicationFormInit();
    this.screeningFormInit();
  }

  screeningFormInit() {
    this.screeningForm = this.formBuilder.group({
      screeningStatus : new FormControl(null),
      screeningFailedReason : new FormControl(null),
      screeningFailedOtherReason : new FormControl(null),
      ifOtherStatus : new FormControl(null),
    })
  }

  ApplicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      'applyingYear' : new FormControl(null, []),

      'fullName' : new FormControl('', []),
      'placeOfBirth' : new FormControl(null, []),
      'age' : new FormControl(null, []),
      'gender' : new FormControl(null, []),
      'nationality' : new FormControl(null, []),
      'birthDate' : new FormControl(null, []),
      'email' : new FormControl(null, []),
      'contactNumber' : new FormControl(null, []),

      'maritalStatus' : new FormControl(null, []),
      'address' : new FormControl('', []),
      'governorate' : new FormControl(null, []),
      'wilayatOrRegion' : new FormControl(null, []),
      'nextOfKin' : new FormControl('', []),
      'contactNextOfKin' : new FormControl('', []),

      'examType' : new FormControl(null, []),
      'omsbSelectionExamScore' : new FormControl('', []),
      'isMfdPassed' : new FormControl(null, []),
      'mfdUploadLink' : new FormControl('', []),
      'certificateUploadLink' : new FormControl('', []),
      
      'nationIdNumber' : new FormControl('', []),
      'nationIdLink' : new FormControl('', []),

      'haveDiseases' : new FormControl(null, []),
      'diseasesOrDisabilities' : new FormControl('', []),
      'specialty' : new FormArray([]),
      'education' : new FormArray([]),
      'internship' : new FormArray([]),
      'blsCertificate' : new FormGroup({
        'expiryDate' : new FormControl(null, []),
        'uploadLink' : new FormControl('', []),
      }),
      'aclsCertificate' : new FormGroup({
        'expiryDate' : new FormControl(null, []),
        'uploadLink' : new FormControl('', []),
      }),

      'sponsorshipLetterLink' : new FormControl('', []),
      
      'isCompletedResidencyProgram' : new FormControl(null, []),      
      'completedResidencyProgramName' : new FormControl(null, []),      
      
      'holdsEnglishProficiency' : new FormControl(null, []),      
      'overallScore' : new FormControl(null, []),      
      
      'isDeclared' : new FormControl('', []),
    })
    this.applicationForm.patchValue(this.listData.userDetails)
    console.log(this.applicationForm)
    this.addEducation();
    this.addInternship();
    this.addSpecialty();

  }

  get formValues () {
    return this.applicationForm.value
  }
  get screeningFormValues () {
    return this.screeningForm.value
  }

  getIntakeYears() {
    const currentYear = new Date().getFullYear(), years = [];
    let startYear = 1980;  
    while ( startYear <= currentYear ) {
        this.intakeYears.push(startYear++);
    }  
    this.intakeYears.reverse()
  }

  get educationControls() {
    return (<FormArray>this.applicationForm.get('education')).controls;
  }
  get internshipControls() {
    return (<FormArray>this.applicationForm.get('internship')).controls;
  }
  get specialtyControls() {
    return (<FormArray>this.applicationForm.get('specialty')).controls;
  }
  addEducation() {
    this.listData.userDetails.education.forEach(element => {
      (<FormArray>this.applicationForm.get('education')).push(
        new FormGroup({
          'school' : new FormControl(element.school),
          'otherName' : new FormControl(null),
          'country' : new FormControl(element.country),
          'degreeObtained' : new FormControl(element.degreeObtained),
          'gpa' : new FormControl(element.gpa),
          'dateOfGraduation' : new FormControl(element.dateOfGraduation)
        })
      );
    });
    
  }
  addInternship() {
    this.listData.userDetails.internship.forEach(element => {
      (<FormArray>this.applicationForm.get('internship')).push(
        new FormGroup({
          'startDate' : new FormControl(element.startDate),
          'endDate' : new FormControl(element.endDate),
          'institution' : new FormControl(element.institution),
          'position' : new FormControl(element.position)
        })
      );
    });
  }

  addSpecialty() {
    this.listData.userDetails.specialty.forEach((element: any) => {
      (<FormArray>this.applicationForm.get('specialty')).push(
        new FormGroup({
          'scholarshipProjectType' : new FormControl(null, []),
          'scholarshipProject' : new FormControl(null, []),
          'specialtyName' : new FormControl(null, []),
          'sub-specialty' : new FormControl(null, []),
          'country' : new FormControl(null, [])
        })
      );
    })
    
  }

  onChange(){
    this.screeningForm.get('screeningFailedReason')?.patchValue(null)
    this.screeningForm.get('screeningFailedOtherReason')?.patchValue(null)
    this.screeningForm.get('ifOtherStatus')?.patchValue(null)

  }
  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any) {
    this.modalService.open(modal, {size : 'lg'})
  }
}
