import { Component, OnInit } from "@angular/core";
import { Nationalities } from "src/app/enums/nationality";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegistrationComponent implements OnInit {
  //Form Selector Values
  gender: any[] = [
    { name: "Male", value: "male" },
    { name: "Female", value: "Female" },
  ];
  nationalities: any[] = Nationalities.nationalities;
  employmentStatus: any[] = [
    { name: "Employed", value: "employed" },
    { name: "Unemployed", value: "unemployed" },
  ];
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

  employmentStatusValue: any;
  sectorTypeValue: any;
  sectorTypeValueNewJob: any;
  jobTitleValue: any;
  employmentStatusValueNewJob: any;
  sectorValue: any;
  sectorValueNewJob: any;
  jobTitleValueNewJob: any;
  isAnotherJob: boolean = false;

  files: File[] = [];
  filesId: File[] = [];

  constructor() {}

  ngOnInit(): void {}

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

  onSelect(event : any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event : any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSelectId(event : any) {
    console.log(event);
    this.filesId.push(...event.addedFiles);
  }

  onRemoveId(event : any) {
    console.log(event);
    this.filesId.splice(this.filesId.indexOf(event), 1);
  }
}
