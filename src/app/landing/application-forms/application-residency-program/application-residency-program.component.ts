import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';
import { Countries } from 'src/app/enums/countries';
import { Nationalities } from 'src/app/enums/nationality';

@Component({
  selector: 'app-application-residency-program',
  templateUrl: './application-residency-program.component.html',
  styleUrls: ['./application-residency-program.component.scss']
})
export class ApplicationResidencyProgramComponent implements OnInit {

  gender: any[] = [
    { name: "Male", value: "male" },
    { name: "Female", value: "Female" },
  ];
  examType: any[] = [
    { name: "OMSB Selection Exam", value: "OMSB_Selection_Exam" },
    { name: "MFD", value: "MFD" },
  ];
  maritalStatus: any[] = [
    { name: "Married", value: "married" },
    { name: "Unmarried", value: "unmarried" },
  ];
  GovernorateList: any[] = [
    { name: "Value 1", value: "value_1" },
    { name: "Value 2", value: "value_2" },
  ];
  WilayatList: any[] = [
    { name: "Value 1", value: "value_1" },
    { name: "Value 2", value: "value_2" },
  ];
  educationInstitutesList: any[] = [
    { name: "Sultan Qaboos Univestiry", value: "Sultan_Qaboos_Univestiry" },
    { name: "Oman Medical College ", value: "Oman_Medical_College" },
    { name: "Arabian Gulf University ", value: "Arabian_Gulf_University" },
    { name: "Royal College of Surgeons in Ireland ", value: "Royal_College_of_Surgeons_in Ireland" },
    { name: "Other", value: "other" }
  ];
  degreeList: any[] = [
    { name: "MBBS", value: "MBBS" },
    { name: "BMBS", value: "BMBS" },
    { name: "Other", value: "other" }
  ];
  currentPositionList: any[] = [
    { name: "Intern", value: "intern" },
    { name: "GFP", value: "GFP" },
    { name: "Medical Officer/ Medical House Officer ( MO/SHO)", value: "Medical_Officer/Medical_House_Officer_(MO/SHO)" }
  ];
  employmentStatus: any[] = [
    { name: "Employed", value: "employed" },
    { name: "Unemployed", value: "unemployed" },
  ];
  trainingProgramsList: any[] = [];
  jobTitle: any[] = [
    { name: "Assistant", value: "doctor" },
    { name: "Medical Officer", value: "medical_officer" },
    { name: "Senior Medical Officer", value: "senior_medical_office" },
    { name: "Other", value: "other" },
  ];
  sectorType: any[] = [
    { name: "Government", value: "government" },
    { name: "Private", value: "private" },
  ];
  sectorsList: any[] = [];
  sectorsNewJobList: any[] = [];
  privateSectorList: any[] = [{ name: "Government", value: "government" }];

  countryList = Countries.countryList;
  nationalities = Nationalities.nationalities;

  progressBarSize:any = {
    width:'width:0%',
    value : 0 
  }

  examTypeValue : any;
  educationInstituteValue : any;
  degreeValue : any;
  havePassedExam : boolean = false;
  haveSubmittedDeclaration : boolean = false;
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

  @ViewChild(WizardComponent) public wizard!: WizardComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.examTypeValue) 
  }

  onChangeExamType() {
    console.log(this.examTypeValue)
    if(this.examTypeValue === 'MFD') {
      this.trainingProgramsList = [
        { name: "None", value: "None" },
        { name: "Dermatology", value: "Dermatology" }
      ];
    } else {
      this.trainingProgramsList = [
        { name: "None", value: "None" },
        { name: "Anesthesia", value: "Anesthesia" },
        { name: "Biochemistry", value: "Biochemistry" },
        { name: "Dermatology", value: "Dermatology" },
        { name: "Emergency Medicine", value: "Emergency Medicine" }
      ];
    }
    
  }

  onRemove(event : any) {
    console.log(event);
    this.filesMFD.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelect(event : any) {
    console.log(event);
    this.filesMFD.push(...event.addedFiles);
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
    this.filesSponsorshipLetter.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectSponsorshipLetter(event : any) {
    console.log(event);
    this.filesSponsorshipLetter.push(...event.addedFiles);
  }
  onRemovePassport(event : any) {
    console.log(event);
    this.filesPassport.splice(this.filesMFD.indexOf(event), 1);
  }
  onSelectPassport(event : any) {
    console.log(event);
    this.filesSponsorshipLetter.push(...event.addedFiles);
  }

  onRemoveId(event : any) {
    console.log(event);
    this.filesId.splice(this.filesMFD.indexOf(event), 1);
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

}
