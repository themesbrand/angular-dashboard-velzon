import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from '../data';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  
  listData = data;

  applicationFormOne !: FormGroup;

  todayDate : Date = new Date();

  intakeYears: any[] = []
  trainingProgramsList: any[] = []
  
  //Uploaded files
  filesId: File[] = [];
  filesPassport: File[] = [];
  filesMFD: File[] = [];
  filesCertificate: File[] = [];
  filesBLSCertificate: File[] = [];
  filesACLSCertificate: File[] = [];
  filesProofDocs: File[] = [];
  filesSponsorshipLetter: File[] = [];


  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ApplicationFormOneInit();
    this.getIntakeYears()
  }

  ApplicationFormOneInit() {
    this.applicationFormOne = this.formBuilder.group({
      'intakeYear' : new FormControl(null, []),
      'examType' : new FormControl(null, []),
      'omsbSelectionExamScore' : new FormControl('', []),
      'isMfdPassed' : new FormControl(null, []),
      'mfdUploadLink' : new FormControl('', []),
      'certificateUploadLink' : new FormControl('', []),
      'isDeclared' : new FormControl('', []),
    })
  }

  get formValues () {
    return this.applicationFormOne.value
  }
  onChangeExamType() {
    console.log(this.applicationFormOne.controls['examType'].value)
    if(this.formValues.examType === 'MFD') {
      this.trainingProgramsList = [
        { name: "None", value: "None" },
        { name: "Dermatology", value: "Dermatology" }
      ];
    } else {
      this.trainingProgramsList = this.listData.examType
    }
    // Get the OMSB Selection Exam Score
    this.applicationFormOne.controls['omsbSelectionExamScore'].patchValue('20.5')
  }

  getIntakeYears() {
    const currentYear = new Date().getFullYear(), years = [];
    let endYear = currentYear + 5;  
    while ( currentYear <= endYear ) {
        this.intakeYears.push(endYear--);
    }  
    this.intakeYears.reverse()
  }

  onRemove(event : any, type: any) {
    switch(type) {
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


}
