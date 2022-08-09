import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { data } from './data';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegistrationComponent implements OnInit {

  userDetailObject : any;

  @Input('userDetails') 
  set userDetails(data: any){
    this.userDetailObject = data;
    console.log(this.userDetailObject)
  };

  registrationForm !: FormGroup;
  listData = data;

  nationalIdFiles : File[] =[];
  civilIdFiles : File[] =[];
  passportFiles : File[] =[];
  cvFiles : File[] =[];

  programNames: any[] = [];

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
      residencyStatus : new FormControl(null),

      nationalID : new FormControl(null),
      passportNumber : new FormControl(null),
      passportExpiryDate : new FormControl(null),

      civilID : new FormControl(null),
      countryOfNationality : new FormControl(null),
      passportIssuedCountry : new FormControl(null),
      
      firstName : new FormControl(null),
      secondName : new FormControl(null),
      thirdName : new FormControl(null),
      familyName : new FormControl(null),
      fullNameInArabic : new FormControl(null),
      gender : new FormControl(null),
      nationality : new FormControl(null),
      birthDate : new FormControl(null),
      email : new FormControl(null),
      contactNumber : new FormControl(null),
      
      isAssociatedWithOmsb : new FormControl(false),
      role : new FormControl(null),

      purpose : new FormControl(null),
      
      department : new FormControl(null),
      section : new FormControl(null),
      position : new FormControl(null),
      ifOtherPosition : new FormControl(null),
      program : new FormControl(null),

      programType : new FormControl(null),
      programName : new FormControl(null),
      facultyRole : new FormControl(null),

      roleInTheProgram : new FormControl(null),
      purposeOther : new FormControl(null),
      
      dataFlowRef : new FormControl(null),

      education : new FormArray([]),
      employment : new FormArray([]),

    })
       

    if(this.userDetailObject === undefined) {
      this.registrationForm.patchValue({
        'firstName' : 'Abbas',
        'secondName' : 'Al',
        'thirdName' : 'Ajmi',
        'familyName' : 'Ajmi',
        'fullNameInArabic' : 'عباس أل أجمع',
        'gender' : 'Male',
        'nationality' : 'Omani',
      })

      this.onChangeFormValues();
      this.addEducation();
      this.addEmployment();

    } else {
      this.registrationForm.patchValue(this.userDetailObject)
      
      this.userDetailObject.education.forEach((element: any) => {
        (<FormArray>this.registrationForm.get('education')).push(
          new FormGroup({
            qualification : new FormControl(element.qualification),
            country : new FormControl(element.country),
            institution : new FormControl(element.institution),
          })
        );
      });
      this.userDetailObject.employment.forEach((element: any) => {
        (<FormArray>this.registrationForm.get('employment')).push(
          new FormGroup({
            profession : new FormControl(element.profession),
            primarySpecialty : new FormControl(element.primarySpecialty),
            secondarySpecialty : new FormControl(element.secondarySpecialty),
            jobDesignation : new FormControl(element.jobDesignation),
            primaryWorkPlaceSector : new FormControl(element.primaryWorkPlaceSector),
            primarySectorName : new FormControl(element.primarySectorName),
            primaryWorkRegion : new FormControl(element.primaryWorkRegion),
          })
        );
      });
    }
  }

  onChangeFormValues() {
    this.registrationForm.valueChanges.subscribe(res => {
      if(res.programType === "Specialty program") {
        this.programNames = this.listData.specialtyPrograms
      }
      if(res.programType === "Fellowship program") {
        this.programNames = this.listData.fellowshipPrograms
      }
      if(res.programType === "GFP program") {
        this.programNames = this.listData.gfpPrograms
      }
    })
  }

  onChange(event : any) {
    this.registrationForm.get('role')?.patchValue(null)
    this.registrationForm.get('purpose')?.patchValue(null)
  }

  get registrationFormValues () {
    return this.registrationForm.value
  }

  get educationControls() {
    return (<FormArray>this.registrationForm.get('education')).controls;

  }
  get employmentControls() {
    return (<FormArray>this.registrationForm.get('employment')).controls;

  }

  addEducation() {
    (<FormArray>this.registrationForm.get('education')).push(
      new FormGroup({
        qualification : new FormControl(null, []),
        country : new FormControl(null, []),
        institution : new FormControl(null, []),
      })
    );
  }
  addEmployment() {
    (<FormArray>this.registrationForm.get('employment')).push(
      new FormGroup({
        profession : new FormControl(null, []),
        primarySpecialty : new FormControl(null, []),
        secondarySpecialty : new FormControl(null, []),
        jobDesignation : new FormControl(null, []),
        primaryWorkPlaceSector : new FormControl(null, []),
        primarySectorName : new FormControl(null, []),
        primaryWorkRegion : new FormControl(null, []),
      })
    );
  }
  onDeleteEducation(index : number) {
    if((<FormArray>this.registrationForm.get('education')).length != 1) {
      (<FormArray>this.registrationForm.get('education')).removeAt(index);
    }
  }
  onDeleteEmployment(index : number) {
    if((<FormArray>this.registrationForm.get('employment')).length != 1) {
      (<FormArray>this.registrationForm.get('employment')).removeAt(index);
    }
  }
  onRemove(event : any, type: any) {
    switch(type) {
      case 'nationalIdFiles' : {
        this.nationalIdFiles.splice(this.nationalIdFiles.indexOf(event), 1);
        return
      }
      case 'civilIdFiles' : {
        this.civilIdFiles.splice(this.civilIdFiles.indexOf(event), 1);
        return
      }
      case 'passportFiles' : {
        this.passportFiles.splice(this.passportFiles.indexOf(event), 1);
        return
      }
      case 'cvFiles' : {
        this.cvFiles.splice(this.cvFiles.indexOf(event), 1);
        return
      }


      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'nationalIdFiles' : {
        this.nationalIdFiles.push(...event.addedFiles);
        return
      }
      case 'civilIdFiles' : {
        this.civilIdFiles.push(...event.addedFiles);
        return
      }
      case 'passportFiles' : {
        this.passportFiles.push(...event.addedFiles);
        return
      }
      case 'cvFiles' : {
        this.cvFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }


}