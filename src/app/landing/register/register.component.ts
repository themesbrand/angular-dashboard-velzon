import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { data } from './data';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegistrationComponent implements OnInit {

  registrationForm !: FormGroup;
  listData = data;

  //Uploaded files
  filesResidentIdFront: File[] = [];
  filesResidentIdBack: File[] = [];
  filesPassport: File[] = [];
  filesStaffId: File[] = [];

	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.RegistrationFormInit()
  }

  RegistrationFormInit() {
    this.registrationForm = this.formBuilder.group({
      'residencyStatus' : new FormControl(null, []),
      'isOmsbMember' : new FormControl(null, []),
      'membershipType' : new FormControl(null, []),
      'isEmployed' : new FormControl(null, []),
      //Personal Details
      'firstName' : new FormControl('', []),
      'secondName' : new FormControl('', []),
      'thirdName' : new FormControl('', []),
      'familyName' : new FormControl('', []),
      'fullNameInArabic' : new FormControl('', []),
      'gender' : new FormControl(null, []),
      'nationality' : new FormControl(null, []),
      'birthDate' : new FormControl(null, []),
      'email' : new FormControl(null, []),
      'contactNumber' : new FormControl(null, []),
      //Identification Details
      'idNumber' : new FormControl('', []),
      'idLinkFront' : new FormControl(null, []),
      'idLinkBack' : new FormControl(null, []),
      'passportNumber' : new FormControl('', []),
      'passportLink' : new FormControl(null, []),
      'staffIdOrWorkId' : new FormControl('', []),
      'staffIdLink' : new FormControl(null, []),
      //Employment Details 

      'profession' : new FormControl(null, []),
      'primarySpecialty' : new FormControl(null, []),
      'ifOtherPrimarySpecialty' : new FormControl('', []),
      'secondarySpecialty' : new FormControl(null, []),
      'ifOtherSecondarySpecialty' : new FormControl(null, []),
      'jobTitle' : new FormControl(null, []),
      'primaryWorkplaceSectorType' : new FormControl(null, []),
      'primarySectorName' : new FormControl(null, []),
      'ifOtherPrimarySector' : new FormControl(null, []),
      'regionOfPrimaryWorkplace' : new FormControl(null, []),
      'ifOtherRegionOfPrimaryWorkplace' : new FormControl(null, []),
      'secondaryWorkplaceSectorType' : new FormControl(null, []),
      'secondarySectorName' : new FormControl(null, []),
      'ifOtherSecondarySectorName' : new FormControl(null, []),
      //Education Details
      'education' : new FormArray([]),
      
      'dataflowRef' : new FormControl('', []),
      'confirmationToggleOne' : new FormControl(null, []),
      'confirmationToggleTwo' : new FormControl(null, []),
      'confirmationToggleThree' : new FormControl(null, []),
      'confirmationToggleFour' : new FormControl(null, []),
      'confirmationToggleFive' : new FormControl(null, [])   
    })
    this.addEducation();
  }


  get formValues () {
    console.log(this.registrationForm.value.education)
    return this.registrationForm.value
  }

  get educationControls() {
    return (<FormArray>this.registrationForm.get('education')).controls;
  }
  addEducation() {
    (<FormArray>this.registrationForm.get('education')).push(
      new FormGroup({
        'qualification' : new FormControl(null, []),
        'country' : new FormControl(null, []),
        'universityOrInstitution' : new FormControl(null, []),
        'ifOtherUniversityOrInstitution' : new FormControl('', []),
        'graduationYear' : new FormControl(null, [])
      })
    );
  }
  
  onDeleteEducation(index : number) {
    if((<FormArray>this.registrationForm.get('education')).length != 1) {
      (<FormArray>this.registrationForm.get('education')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesResidentIdFront' : {
        this.filesResidentIdFront.splice(this.filesResidentIdFront.indexOf(event), 1);
        return
      }
      case 'filesResidentIdBack' : {
        this.filesResidentIdBack.splice(this.filesResidentIdBack.indexOf(event), 1);
        return
      }
      case 'filesPassport' : {
        this.filesPassport.splice(this.filesPassport.indexOf(event), 1);
        return
      }
      case 'filesStaffId' : {
        this.filesStaffId.splice(this.filesStaffId.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesResidentIdFront' : {
        this.filesResidentIdFront.push(...event.addedFiles);
        return
      }
      case 'filesResidentIdBack' : {
        this.filesResidentIdBack.push(...event.addedFiles);
        return
      }
      case 'filesPassport' : {
        this.filesPassport.push(...event.addedFiles);
        return
      }
      case 'filesStaffId' : {
        this.filesStaffId.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}