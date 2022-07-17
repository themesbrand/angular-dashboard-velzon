import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-application-form',
  templateUrl: './show-application-form.component.html',
  styleUrls: ['./show-application-form.component.scss']
})
export class ShowApplicationFormComponent implements OnInit {

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
      { label: "Dashboard", link : '/interviewer/dashboard' },
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
  addEducation() {
    this.listData.userDetails.education.forEach((element : any) => {
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
    this.listData.userDetails.internship.forEach((element : any) => {
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
  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }


}
