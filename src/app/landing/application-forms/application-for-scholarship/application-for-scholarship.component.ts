import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { data } from './data';
import {userDetails} from 'src/app/landing/application-forms/data';

@Component({
  selector: 'app-application-for-scholarship',
  templateUrl: './application-for-scholarship.component.html',
  styleUrls: ['./application-for-scholarship.component.scss']
})
export class ApplicationForScholarshipComponent implements OnInit {

  userDetails: any = userDetails;

  listData = data;

  applicationForm !: FormGroup;

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

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ApplicationFormOneInit();
    this.getIntakeYears();

  }

  ApplicationFormOneInit() {
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
    this.addEducation();
    this.addInternship();
    this.addSpecialty();

    this.applicationForm.patchValue({
      'fullName': 'Abbas Al Ajmi',
      'email': 'ajmi@gmail.com',
      'contactNumber': '13255618',
    })
  }

  get formValues () {
    return this.applicationForm.value
  }

  getIntakeYears() {
    const currentYear = new Date().getFullYear(), years = [];
    let endYear = currentYear + 5;  
    while ( currentYear <= endYear ) {
        this.intakeYears.push(endYear--);
    }  
    this.intakeYears.reverse()
  }

  onChangeExamType() {
    console.log(this.applicationForm.controls['examType'].value)
    if(this.formValues.examType === 'MFD') {
      this.trainingProgramsList = [
        { name: "None", value: "None" },
        { name: "Dermatology", value: "Dermatology" }
      ];
    } else {
      this.trainingProgramsList = this.listData.examType
    }
    // Get the OMSB Selection Exam Score
    this.applicationForm.controls['omsbSelectionExamScore'].patchValue('20.5')
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
    (<FormArray>this.applicationForm.get('education')).push(
      new FormGroup({
        'school' : new FormControl(null, []),
        'otherName' : new FormControl(null, []),
        'country' : new FormControl(null, []),
        'degreeObtained' : new FormControl(null, []),
        'gpa' : new FormControl('', []),
        'dateOfGraduation' : new FormControl(null, [])
      })
    );
  }
  addInternship() {
    (<FormArray>this.applicationForm.get('internship')).push(
      new FormGroup({
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'position' : new FormControl(null, []),
      })
    );
  }
  addSpecialty() {
    (<FormArray>this.applicationForm.get('specialty')).push(
      new FormGroup({
        'scholarshipProjectType' : new FormControl(null, []),
        'scholarshipProject' : new FormControl(null, []),
        'specialtyName' : new FormControl(null, []),
        'sub-specialty' : new FormControl(null, []),
        'country' : new FormControl(null, [])
      })
    );
  }
  onDeleteEducation(index : number) {
    if((<FormArray>this.applicationForm.get('education')).length != 1) {
      (<FormArray>this.applicationForm.get('education')).removeAt(index);
    }
  }
  onDeleteInternship(index : number) {
    if((<FormArray>this.applicationForm.get('internship')).length != 1) {
      (<FormArray>this.applicationForm.get('internship')).removeAt(index);

    }
  }
  onDeleteSpecialty(index : number) {
    if((<FormArray>this.applicationForm.get('specialty')).length != 1) {
      (<FormArray>this.applicationForm.get('specialty')).removeAt(index);

    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesBLSCertificate' : {
        this.filesBLSCertificate.splice(this.filesBLSCertificate.indexOf(event), 1);
        return
      }
      case 'filesACLSCertificate' : {
        this.filesACLSCertificate.splice(this.filesACLSCertificate.indexOf(event), 1);
        return
      }
      case 'filesProofDocs' : {
        this.filesProofDocs.splice(this.filesProofDocs.indexOf(event), 1);
        return
      }
      case 'filesSponsorshipLetter' : {
        this.filesProofDocs.splice(this.filesSponsorshipLetter.indexOf(event), 1);
        return
      }
      
      case 'filesMFD' : {
        this.filesMFD.splice(this.filesMFD.indexOf(event), 1);
        return
      }
      case 'filesCertificate' : {
        this.filesCertificate.splice(this.filesCertificate.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesBLSCertificate' : {
        this.filesBLSCertificate.push(...event.addedFiles);
        return
      }
      case 'filesACLSCertificate' : {
        this.filesACLSCertificate.push(...event.addedFiles);
        return
      }
      case 'filesProofDocs' : {
        this.filesProofDocs.push(...event.addedFiles);
        return
      }
      case 'filesSponsorshipLetter' : {
        this.filesSponsorshipLetter.push(...event.addedFiles);
        return
      }
      case 'filesMFD' : {
        this.filesMFD.push(...event.addedFiles);
        return
      }
      case 'filesCertificate' : {
        this.filesCertificate.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onSubmit() {
    console.log(this.formValues)
  }

}
