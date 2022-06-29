import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { data } from './data';

@Component({
  selector: 'app-application-for-scholarship',
  templateUrl: './application-for-scholarship.component.html',
  styleUrls: ['./application-for-scholarship.component.scss']
})
export class ApplicationForScholarshipComponent implements OnInit {

  userDetails: any = {
    'residencyStatus' : 'Omani National',
    'isOmsbMember' : 'true',
    'membershipType' : 'Staff',
    'isEmployed' : 'true',
  
    
    'firstName' : 'Abbas',
    'thirdName' : 'Al',
    'familyName' : 'Ajmi',
    'fullNameInArabic' : 'عباس أل أجمع',
    'gender' : 'male',
    'nationality' : 'Omani',
    'birthDate' : '1984-09-15',
    'email' : 'abbas@gmail.com',
    'contactNumber' : '132153213',
    
    'idNumber' : '97513256',
    // 'idLinkFront' : '',
    // 'idLinkBack' : '',
    'passportNumber' : '26934345',
    // 'passportLink' : '',
    'staffIdOrWorkId' : '24651923',
    // 'staffIdLink' : '',
  
    'profession' : 'Doctor',
    'primarySpecialty' : 'Medical',
    // 'ifOtherPrimarySpecialty' : '',
    'secondarySpecialty' : 'Other',
    'ifOtherSecondarySpecialty' : 'Other',
    'jobTitle' : 'OPD Consultant Doctor',
    'primaryWorkplaceSectorType' : 'Government',
    'primarySectorName' : 'Diwan Medical Service',
    // 'ifOtherPrimarySector' : '',
    'regionOfPrimaryWorkplace' : 'Value 1',
    // 'ifOtherRegionOfPrimaryWorkplace' : '',
    'secondaryWorkplaceSectorType' : 'Non-Applicable',
    // 'secondarySectorName' : '',
    // 'ifOtherSecondarySectorName' : '',
  
    'education' : [
      {'qualification' : 'BSC', 
      'country' : 'Oman', 
      'universityOrInstitution': 'Other', 
      'ifOtherUniversityOrInstitution' : 'Dhofar University',
      'graduationYear' : '2015'}
    ],
    
    'dataflowRef' : '#SC56-513213548',
    // 'confirmationToggleOne' : '',
    // 'confirmationToggleTwo' : '',
    // 'confirmationToggleThree' : '',
    // 'confirmationToggleFour' : '',
    // 'confirmationToggleFive' : ''   
  };

  listData = data;

  applicationForm !: FormGroup;

  todayDate : Date = new Date();

  intakeYears: any[] = []

  filesBLSCertificate: File[] = [];
  filesACLSCertificate: File[] = [];
  filesProofDocs: File[] = [];
  filesSponsorshipLetter: File[] = [];

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
      'omsbAdmissionScore' : new FormControl('', []),
      'nationIdNumber' : new FormControl('', []),
      'staffIdNumber' : new FormControl('', []),

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
      
      'specialtyProgramOne' : new FormControl(null, []),
      'specialtyProgramTwo' : new FormControl(null, []),
      'sponsorshipLetterLink' : new FormControl('', []),
      
      'isCompletedResidencyProgram' : new FormControl(null, []),      
      'completedResidencyProgramName' : new FormControl(null, []),      
      
      'holdsEnglishProficiency' : new FormControl(null, []),      
      'overallScore' : new FormControl(null, []),      
      
      'isDeclared' : new FormControl('', []),
    })
    this.addEducation();
    this.addInternship();
  }

  get formValues () {
    return this.applicationForm.value
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
      default : {
        break;
      }
    }
  }

}
