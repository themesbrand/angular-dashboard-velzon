import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from '../data';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  listData = data;

  filesBLSCertificate: File[] = [];
  filesACLSCertificate: File[] = [];
  filesProofDocs: File[] = [];
  filesSponsorshipLetter: File[] = [];

  todayDate : Date = new Date();

  applicationFormTwo !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ApplicationFormTwoInit();
  }

  ApplicationFormTwoInit() {
    this.applicationFormTwo = this.formBuilder.group({
      'maritalStatus' : new FormControl(null, []),
      'address' : new FormControl('', []),
      'governorate' : new FormControl(null, []),
      'wilayatOrRegion' : new FormControl(null, []),
      'nextOfKin' : new FormControl('', []),
      'contactNextOfKin' : new FormControl('', []),
      'omsbAdmissionScore' : new FormControl('', []),
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
      'qualificationsAndTrainings' : new FormControl('', []),
      'proofOfDocumentsLinks' : new FormControl('', []),
      'specialtyProgramOne' : new FormControl(null, []),
      'specialtyProgramTwo' : new FormControl(null, []),
      'isRequiredLabCoat' : new FormControl(null, []),
      'labCoatSize' : new FormControl(null, []),
      'sponsorshipLetterLink' : new FormControl('', [])
    })
    this.addEducation();
    this.addInternship();
  }

  get formValues () {
    return this.applicationFormTwo.value
  }

  get educationControls() {
    return (<FormArray>this.applicationFormTwo.get('education')).controls;
  }
  get internshipControls() {
    return (<FormArray>this.applicationFormTwo.get('internship')).controls;
  }

  addEducation() {
    (<FormArray>this.applicationFormTwo.get('education')).push(
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
    (<FormArray>this.applicationFormTwo.get('internship')).push(
      new FormGroup({
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'position' : new FormControl(null, []),
      })
    );
  }
  onDeleteEducation(index : number) {
    if((<FormArray>this.applicationFormTwo.get('education')).length != 1) {
      (<FormArray>this.applicationFormTwo.get('education')).removeAt(index);
    }
  }
  onDeleteInternship(index : number) {
    if((<FormArray>this.applicationFormTwo.get('internship')).length != 1) {
      (<FormArray>this.applicationFormTwo.get('internship')).removeAt(index);

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
