import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.scss']
})
export class CreateScholarshipProgramComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;

  programForm !: FormGroup;
  academicYearsForm !: FormGroup;
  OfferedCountriesForm !: FormGroup;
  employersSetupForm !: FormGroup;
  
  @ViewChild("setupAcademicYear") setupAcademicYear !: TemplateRef<any>;
  @ViewChild("offeredCountries") offeredCountries !: TemplateRef<any>;
  @ViewChild("employersSetup") employersSetup !: TemplateRef<any>;

  isEditMode: boolean = false;
  selectedProgramIndex: any;
  isUnitAvailable: boolean = false;

  selectedCountiesSelector : any;

  constructor(private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "Create Program", active : true }
    ];
    this.programFormInit();
  }

  programFormInit() {
    this.programForm = this.formBuilder.group({
      programs : new FormArray([])
    })
    this.patchFormArray();
  }
  
  get formValues () {
    return this.programForm.value
  }

  patchFormArray() {
    console.log(this.listData.programDataTable)
    if(this.listData.programDataTable.length === 0) {
      this.onAddProgram()
    } else {
      this.listData.programDataTable.forEach(element => {
        (<FormArray>this.programForm.get('programs')).insert(0,
          new FormGroup({
            programName : new FormControl(element.programName),
            programType : new FormControl(element.programType),
            programSpecialization : new FormControl(element.programSpecialization),
            programSubSpecialization : new FormControl(element.programSubSpecialization),
            sponsoredBy : new FormControl(element.sponsoredBy),
            academicYear : new FormControl(element.academicYear),
            offeredCountries : new FormControl(element.offeredCountries),
            employersSetup : new FormControl(element.employersSetup),
            isEdit : new FormControl(false),
          })
        );
      })
    }
    
  }
  
  get getProgramControls() {
    return (<FormArray>this.programForm.get('programs')).controls;
  }

  onAddProgram() {
    this.isEditMode = true;
    (<FormArray>this.programForm.get('programs')).insert(0,
      new FormGroup({
        programName : new FormControl(null),
        programType : new FormControl(null),
        programSpecialization : new FormControl(null),
        programSubSpecialization : new FormControl(null),
        sponsoredBy : new FormControl(null),
        academicYear : new FormControl(null),
        offeredCountries : new FormControl(null),
        employersSetup : new FormControl(null),
        isEdit : new FormControl(true)
      })
    );
  }

  onEditProgram(i : any) {
    this.isEditMode = true
    const object = this.getProgramControls[i].value
    this.getProgramControls[i].patchValue({
      isEdit : true
    })
  }

  onDeleteProgram(i : any) {
    (<FormArray>this.programForm.get('programs')).removeAt(i);
  }

  onSaveProgram(i : any) {
    const object = this.getProgramControls[i].value
    this.isEditMode = false;
    this.getProgramControls[i].get('isEdit')?.patchValue(false)
  }
  // End of Program Functions

  selectAcademicYear(academicYears : any[], programIndex : any) {
    this.selectedProgramIndex = programIndex;

    this.isUnitAvailable = this.getProgramControls[this.selectedProgramIndex].value.programType === 'Stroke Units Residency Program' || this.getProgramControls[this.selectedProgramIndex].value.programType === 'Stroke Units Fellowship program';

    console.log(this.isUnitAvailable)

    this.academicYearsForm = this.formBuilder.group({
      academicYearArray : new FormArray([])
    })
    if(academicYears) {
      academicYears.forEach(element => {
        (<FormArray>this.academicYearsForm.get('academicYearArray')).insert(0,
          new FormGroup({        
            applicableAcademicYear : new FormControl(element.applicableAcademicYear),
            noOfScholarships : new FormControl(element.noOfScholarships),
            unit : new FormControl(element.unit),
            startDate : new FormControl(element.startDate),
            startTime : new FormControl(element.startTime),
            endDate : new FormControl(element.endDate),
            endTime : new FormControl(element.endTime),
            isEdit : new FormControl(false)
          })
        );
      })
    }
    this.modalService.dismissAll();
    this.openModal(this.setupAcademicYear, 'xl');
  }

  get formAcademicYearValues () {
    return this.academicYearsForm.value
  }

  get getAcademicYearControls() {
    return (<FormArray>this.academicYearsForm.get('academicYearArray')).controls;
  }

  onAddAcademicYear() {
    this.isEditMode = true;
    (<FormArray>this.academicYearsForm.get('academicYearArray')).insert(0,
      new FormGroup({          
        applicableAcademicYear : new FormControl(null),
        noOfScholarships : new FormControl(null),
        unit : new FormControl(null),
        startDate : new FormControl(null),
        startTime : new FormControl(null),
        endDate : new FormControl(null),
        endTime : new FormControl(null),
        isEdit : new FormControl(true)
      })
    );
  }

  onEditAcademicYear(i : any) {
    this.isEditMode = true;
    if(this.formAcademicYearValues.academicYearArray[i].isEdit === false ) {
      this.getAcademicYearControls[i].get('isEdit')?.patchValue(true)
    }
  }

  onDeleteAcademicYear(i : any) {
    (<FormArray>this.academicYearsForm.get('academicYearArray')).removeAt(i);
    this.getProgramControls[this.selectedProgramIndex].patchValue({
      academicYear : this.academicYearsForm.get('academicYearArray')?.value
    })
  }
  
  onSaveAcademicYear(data : any, i : any) {
    this.isEditMode = false;
    this.getAcademicYearControls[i].patchValue({
      isEdit : false
    })
    this.getProgramControls[this.selectedProgramIndex].patchValue({
      academicYear : this.academicYearsForm.get('academicYearArray')?.value
    })
  }

  // End of AcademicYear
  
  selectOfferedCountries(offeredCountries : any, programTypeIndex : any) {
    this.selectedProgramIndex = programTypeIndex;
    this.selectedCountiesSelector = this.getProgramControls[this.selectedProgramIndex].get('offeredCountries')?.value;
    this.modalService.dismissAll();
    this.openModal(this.offeredCountries, 'md');
  }
  saveOfferedCountries() {
    const i = this.selectedProgramIndex;

    this.getProgramControls[i].get('offeredCountries')?.patchValue(this.selectedCountiesSelector);
    this.selectedCountiesSelector = null;
    this.modalService.dismissAll();
  }

  // End of Offered Countries
  
  selectEmployerSetup(employersSetup : any[], programIndex : any) {
    this.selectedProgramIndex = programIndex;

    this.employersSetupForm = this.formBuilder.group({
      employersSetupArray : new FormArray([])
    })
    if(employersSetup) {
      employersSetup.forEach(element => {
        (<FormArray>this.employersSetupForm.get('employersSetupArray')).insert(0,
          new FormGroup({        
            employerName : new FormControl(element.employerName),
            employerNameOther : new FormControl(element.employerNameOther),
            hospitalName : new FormControl(element.hospitalName),
            hospitalNameOther : new FormControl(element.hospitalNameOther),
            authorizedIndividuals : new FormArray(element.authorizedIndividuals.map(
              (item: any) => {
                const group = this.initAuthorizedIndividuals();
                group.patchValue(item);
                return group;
                })
              ),            
            isEdit : new FormControl(false)
          })
        );
      })
    }
    this.modalService.dismissAll();
    console.log(this.employersSetupForm.value)
    console.log(this.getEmployersSetupControls)
    this.openModal(this.employersSetup, 'xl');
  }
  
  initAuthorizedIndividuals() {
    return new FormGroup({
      name: new FormControl(''),
      civilId: new FormControl(''),
      title: new FormControl(''),
      isEdit: new FormControl(false),
      
    });
  }

  get formEmployersSetupValues () {
    return this.employersSetupForm.value
  }

  get getEmployersSetupControls() {
    return (<FormArray>this.employersSetupForm.get('employersSetupArray')).controls;
  }

  onAddEmployersSetup() {
    this.isEditMode = true;
    (<FormArray>this.employersSetupForm.get('employersSetupArray')).insert(0,
      new FormGroup({          
        employerName : new FormControl(null),
        employerNameOther : new FormControl(null),
        hospitalName : new FormControl(null),
        hospitalNameOther : new FormControl(null),
        authorizedIndividuals : new FormArray([]),
        isEdit : new FormControl(true)
      })
    );
  }
  onEditEmployersSetup(i : any) {
    this.isEditMode = true;
    if(this.formEmployersSetupValues.employersSetupArray[i].isEdit === false ) {
      this.getEmployersSetupControls[i].get('isEdit')?.patchValue(true)
    }
  }
  onDeleteEmployersSetup(i : any) {
    (<FormArray>this.employersSetupForm.get('employersSetupArray')).removeAt(i);
    this.getProgramControls[this.selectedProgramIndex].patchValue({
      employersSetup : this.employersSetupForm.get('employersSetupArray')?.value
    })
  }
  onSaveEmployersSetup(i : any) {
    this.isEditMode = false;
    this.getEmployersSetupControls[i].patchValue({
      isEdit : false
    })
    this.getProgramControls[this.selectedProgramIndex].patchValue({
      employersSetup : this.employersSetupForm.get('employersSetupArray')?.value
    })
  }

  onChangeEmployerName(i : any) {
    this.getEmployersSetupControls[i].patchValue({
      employerNameOther : null,
      hospitalName : null,
      hospitalNameOther : null

    })
  }
  onChangeHospitalName(i : any) {
    this.getEmployersSetupControls[i].patchValue({
      hospitalNameOther : null
    })
  }
  //End of Employer Setup - Starting authorizedIndividuals

  
  authorizedIndividualControls(i : any) {  
    const employersSetupArrayForm = (<FormArray>this.employersSetupForm.get('employersSetupArray')).controls[i] as FormGroup    
    return (<FormArray>employersSetupArrayForm.get('authorizedIndividuals')).controls

  } 

  onAddAuthorizedIndividual(employerSetupIndex : any){
    this.isEditMode = true;

    (<FormArray>this.getEmployersSetupControls[employerSetupIndex].get('authorizedIndividuals')).insert(0,
      new FormGroup({
        name : new FormControl(null),
        civilId : new FormControl(null),
        title : new FormControl(null),
        isEdit : new FormControl(true)
      })
    );
  }

  onEditAuthorizedIndividual(employerSetupIndex : any, individualIndex : any) {
    this.isEditMode = true;
    const employersSetupArrayForm = (<FormArray>this.employersSetupForm.get('employersSetupArray')).controls[employerSetupIndex] as FormGroup    
    this.isEditMode = false;
    (<FormArray>employersSetupArrayForm.get('authorizedIndividuals')).controls[individualIndex].patchValue({
      isEdit : true
    })
  }
  onSaveAuthorizedIndividual(employerSetupIndex : any, individualIndex : any) {
    const employersSetupArrayForm = (<FormArray>this.employersSetupForm.get('employersSetupArray')).controls[employerSetupIndex] as FormGroup    
    this.isEditMode = false;
    (<FormArray>employersSetupArrayForm.get('authorizedIndividuals')).controls[individualIndex].patchValue({
      isEdit : false
    })
  }
  onDeleteAuthorizedIndividual(employerSetupIndex : any, individualIndex : any) {
    const employersSetupArrayForm = (<FormArray>this.employersSetupForm.get('employersSetupArray')).controls[employerSetupIndex] as FormGroup    
    this.isEditMode = false;
    (<FormArray>employersSetupArrayForm.get('authorizedIndividuals')).removeAt(individualIndex)

  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

  onNavigate() {
    this.router.navigateByUrl('/scholarship/scholarship-section')
  }
}
