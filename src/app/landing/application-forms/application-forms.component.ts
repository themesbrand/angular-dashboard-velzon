import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Countries } from 'src/app/enums/countries';
import { Nationalities } from 'src/app/enums/nationality';

@Component({
  selector: 'app-application-forms',
  templateUrl: './application-forms.component.html',
  styleUrls: ['./application-forms.component.scss']
})
export class ApplicationFormsComponent implements OnInit {

  gender: any[] = [
    { name: "Male", value: "male" },
    { name: "Female", value: "Female" },
  ];
  employmentStatus: any[] = [
    { name: "Employed", value: "employed" },
    { name: "Unemployed", value: "unemployed" },
  ];
  sectorType: any[] = [
    { name: "Government", value: "government" },
    { name: "Private", value: "private" },
  ];
  jobTitle: any[] = [
    { name: "Assistant", value: "doctor" },
    { name: "Medical Officer", value: "medical_officer" },
    { name: "Senior Medical Officer", value: "senior_medical_office" },
    { name: "Other", value: "other" },
  ];
  sectorsList: any[] = [];
  sectorsNewJobList: any[] = [];
  privateSectorList: any[] = [{ name: "Government", value: "government" }];

  employmentStatusValue: any;
  sectorTypeValue: any;
  sectorTypeValueNewJob: any;
  jobTitleValue: any;
  employmentStatusValueNewJob: any;
  sectorValue: any;
  sectorValueNewJob: any;
  jobTitleValueNewJob: any;
  isAnotherJob: boolean = false;
  
  countryList = Countries.countryList;
  nationalities = Nationalities.nationalities;

  filesId: File[] = [];
  filesPassport: File[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }


  onNavigate(type : any) {
    switch (type) {
        case 'Residency Program' : {
            this.router.navigateByUrl('/home/application-forms/residency-program')
            break;
        }
        default : {
            break;
        }
    }
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
