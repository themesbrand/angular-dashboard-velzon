import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from '../data';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  listData = data;

  applicationFormThree !: FormGroup;

  todayDate : Date = new Date();
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.ApplicationFormThreeInit()

  }

  ApplicationFormThreeInit() {
    this.applicationFormThree = this.formBuilder.group({
      //DEMOGRAPHIC INFORMATION SECTION
      'name' : new FormControl('', []),
      'birthday' : new FormControl(null, []),
      'nationality' : new FormControl(null, []),
      'nationalIDNo' : new FormControl('', []),
      'passportNo' : new FormControl('', []),
      'maritalStatus' : new FormControl(null, []),
      'permanentAddress' : new FormControl('', []),
      'wilayatRegion' : new FormControl('', []),
      'mobileNumber' : new FormControl('', []),
      'nameNextKin' : new FormControl('', []),
      'contactNextKin' : new FormControl('', []),
      
      //QUALIFICATION DATA SECTION
      'secondarySchool' : new FormArray([]),
      'medicineSchool' : new FormArray([]),
      'clinicalElectives' : new FormArray([]),
      'certificateCourses' : this.formBuilder.group({
        'blsCertificateExpiry' : new FormControl(null, []),
        'aclsCertificateExpiry' : new FormControl(null, [])
      }),
      'internship' : new FormArray([]),
      'research' : new FormArray([]),
      'publications' : new FormControl('', []),
      'presentations' : new FormControl('', []),
      'honorsAndAwards' : new FormControl('', []),
      'communityService' : new FormArray([])

    })
    
    this.addSecondarySchool();
    this.addMedicineSchool();
    this.addClinicalElectives();
    this.addInternship();
    this.addResearch();
    this.addCommunityService();
  }

  get secondarySchoolControls() {
    return (<FormArray>this.applicationFormThree.get('secondarySchool')).controls;
  }
  get medicineSchoolControls() {
    return (<FormArray>this.applicationFormThree.get('medicineSchool')).controls;
  }
  get clinicalElectivesControls() {
    return (<FormArray>this.applicationFormThree.get('clinicalElectives')).controls;
  }
  get internshipControls() {
    return (<FormArray>this.applicationFormThree.get('internship')).controls;
  }
  get researchControls() {
    return (<FormArray>this.applicationFormThree.get('research')).controls;
  }
  get addCommunityServiceControls() {
    return (<FormArray>this.applicationFormThree.get('communityService')).controls;
  }
  addSecondarySchool() {
    (<FormArray>this.applicationFormThree.get('secondarySchool')).push(
      new FormGroup({
        'school' : new FormControl('', []),
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'country' : new FormControl(null, [])
      })
    );
  }
  addMedicineSchool() {
    (<FormArray>this.applicationFormThree.get('medicineSchool')).push(
      new FormGroup({
        'school' : new FormControl('', []),
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'country' : new FormControl(null, [])
      })
    );
  }
  addClinicalElectives() {
    (<FormArray>this.applicationFormThree.get('clinicalElectives')).push(
      new FormGroup({
        'department' : new FormControl('', []),
        'date' : new FormControl(null, [])
      })
    );
  }
  addInternship() {
    (<FormArray>this.applicationFormThree.get('internship')).push(
      new FormGroup({
        'startDate' : new FormControl(null, []),
        'endDate' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'country' : new FormControl(null, []),
      })
    );
  }
  addResearch() {
    (<FormArray>this.applicationFormThree.get('research')).push(
      new FormGroup({
        'projectTitle' : new FormControl('', []),
        'position' : new FormControl('', []),
        'inclusiveDates' : new FormControl(null, []),
        'institution' : new FormControl('', []),
        'department' : new FormControl('', []),
        'mentor' : new FormControl('', [])
      })
    );
  }
  addCommunityService() {
    (<FormArray>this.applicationFormThree.get('communityService')).push(
      new FormGroup({
        'fromDate' : new FormControl(null, []),
        'toDate' : new FormControl(null, []),
        'description' : new FormControl('', [])
      })
    );
  }
  onDeleteSecondarySchool(index : number) {
    if((<FormArray>this.applicationFormThree.get('secondarySchool')).length != 1) {
      (<FormArray>this.applicationFormThree.get('secondarySchool')).removeAt(index);
    }
  }
  onDeleteMedicineSchool(index : number) {
    if((<FormArray>this.applicationFormThree.get('medicineSchool')).length != 1) {
      (<FormArray>this.applicationFormThree.get('medicineSchool')).removeAt(index);

    }
  }
  onDeleteClinicalElectives(index : number) {
    if((<FormArray>this.applicationFormThree.get('clinicalElectives')).length != 1) {
      (<FormArray>this.applicationFormThree.get('clinicalElectives')).removeAt(index);

    }
  }
  onDeleteInternship(index : number) {
    if((<FormArray>this.applicationFormThree.get('internship')).length != 1) {
      (<FormArray>this.applicationFormThree.get('internship')).removeAt(index);

    }
  }
  onDeleteResearch(index : number) {
    if((<FormArray>this.applicationFormThree.get('research')).length != 1) {
      (<FormArray>this.applicationFormThree.get('research')).removeAt(index);

    }
  }
  onDeleteCommunityService(index : number) {
    if((<FormArray>this.applicationFormThree.get('communityService')).length != 1) {
      (<FormArray>this.applicationFormThree.get('communityService')).removeAt(index);

    }
  }

}
