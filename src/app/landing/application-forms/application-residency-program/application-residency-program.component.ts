import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WizardComponent } from 'angular-archwizard';
import { Countries } from 'src/app/enums/countries';
import { Nationalities } from 'src/app/enums/nationality';

import { data } from './data';
import {userDetails} from 'src/app/landing/application-forms/data';

@Component({
  selector: 'app-application-residency-program',
  templateUrl: './application-residency-program.component.html',
  styleUrls: ['./application-residency-program.component.scss']
})
export class ApplicationResidencyProgramComponent implements OnInit {

  userDetails: any = userDetails;

  
  listData = data;
  trainingProgramsList: any[] = [];
  sectorsList: any[] = [];
  sectorsNewJobList: any[] = [];

  countryList = Countries.countryList;
  nationalities = Nationalities.nationalities;
  todayDate : Date = new Date();

  progressBarSize:any = {
    width:'width:0%',
    value : 0 
  }

  educationInstituteValue : any;
  degreeValue : any;
  haveDiseases : boolean = false;
  IsRequiredLabCoat : boolean = false;

  employmentStatusValue: any;
  sectorTypeValue: any;
  sectorTypeValueNewJob: any;
  jobTitleValue: any;
  employmentStatusValueNewJob: any;
  sectorValue: any;
  sectorValueNewJob: any;
  jobTitleValueNewJob: any;
  isAnotherJob: boolean = false;

  filesId: File[] = [];
  filesPassport: File[] = [];
  filesMFD: File[] = [];
  filesCertificate: File[] = [];
  filesBLSCertificate: File[] = [];
  filesACLSCertificate: File[] = [];
  filesProofDocs: File[] = [];
  filesSponsorshipLetter: File[] = [];

  applicationFormThree !: FormGroup;

  @ViewChild(WizardComponent) public wizard!: WizardComponent;
  educationDetails_1_List: any[] = [
    {
      id : 0
    }
  ];
  internshipDetails_1_List: any[] = [
    {
      id : 0
    }
  ];

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

  }


  onRemoveCertificate(event : any) {
    console.log(event);
    this.filesCertificate.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectCertificate(event : any) {
    console.log(event);
    this.filesCertificate.push(...event.addedFiles);
  }

  onRemoveBLSCertificate(event : any) {
    console.log(event);
    this.filesBLSCertificate.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectBLSCertificate(event : any) {
    console.log(event);
    this.filesBLSCertificate.push(...event.addedFiles);
  }
  onRemoveACLSCertificate(event : any) {
    console.log(event);
    this.filesACLSCertificate.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectACLSCertificate(event : any) {
    console.log(event);
    this.filesACLSCertificate.push(...event.addedFiles);
  }

  onRemoveProofDocs(event : any) {
    console.log(event);
    this.filesProofDocs.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectProofDocs(event : any) {
    console.log(event);
    this.filesProofDocs.push(...event.addedFiles);
  }

  onRemoveSponsorshipLetter(event : any) {
    console.log(event);
    this.filesSponsorshipLetter.splice(this.filesSponsorshipLetter.indexOf(event), 1);
  }
  onSelectSponsorshipLetter(event : any) {
    console.log(event);
    this.filesSponsorshipLetter.push(...event.addedFiles);
  }
  onRemovePassport(event : any) {
    console.log(event);
    this.filesPassport.splice(this.filesPassport.indexOf(event), 1);
  }
  onSelectPassport(event : any) {
    console.log(event);
    this.filesPassport.push(...event.addedFiles);
  }

  onRemoveId(event : any) {
    console.log(event);
    this.filesId.splice(this.filesId.indexOf(event), 1);
  }
  onSelectId(event : any) {
    console.log(event);
    this.filesId.push(...event.addedFiles);
  }

  enterStep(step : any) {
    console.log(step)
    this.wizard.goToStep(step)
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    if(step === 1) {
      this.progressBarSize = {
        width:'width:30%',
        value : 30 
      }
    }
    if(step === 2) {
      this.progressBarSize = {
        width:'width:60%',
        value : 60 
      }
    }
    
  }

  onChangeSectorType(value: any) {
    this.sectorValue = null;
    if (value === "government") {
      this.sectorsList = [
        { name: "Armed Forces Medical Services", value: "armed_forces" },
        { name: "Diwan Medical Service", value: "diwan_medical_service" },
        { name: "Other", value: "other" },
      ];
    } else if (value === "private") {
      this.sectorsList = [
        { name: "Private Sector", value: "private_sector" },
        { name: "Other", value: "other" },
      ];
    }
  }
  onChangeSectorNewJobType(value: any) {
    this.sectorValueNewJob = null;
    if (value === "government") {
      this.sectorsNewJobList = [
        { name: "Armed Forces Medical Services", value: "armed_forces" },
        { name: "Diwan Medical Service", value: "diwan_medical_service" },
        { name: "Other", value: "other" },
      ];
    } else if (value === "private") {
      this.sectorsNewJobList = [
        { name: "Private Sector", value: "private_sector" },
        { name: "Other", value: "other" },
      ];
    }
  }

  addEducationDetails_1() {
    const object = {
      id : this.educationDetails_1_List.length
    }
    this.educationDetails_1_List.push(object)
  }
  removeEducationDetails_1(id : any) {
    if(this.educationDetails_1_List.length === 1) {
      return;
    }
    this.educationDetails_1_List.forEach((value,index)=>{
      if(value.id==id) this.educationDetails_1_List.splice(index,1);
    });
  }
  addInternshipDetails_1() {
    const object = {
      id : this.internshipDetails_1_List.length
    }
    this.internshipDetails_1_List.push(object)
  }
  removeInternshipDetails_1(id : any) {
    if(this.internshipDetails_1_List.length === 1) {
      return;
    }
    this.internshipDetails_1_List.forEach((value,index)=>{
      if(value.id==id) this.internshipDetails_1_List.splice(index,1);
    });
  }

}
