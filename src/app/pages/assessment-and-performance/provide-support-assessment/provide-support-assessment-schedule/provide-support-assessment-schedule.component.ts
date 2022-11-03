import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-provide-support-assessment-schedule',
  templateUrl: './provide-support-assessment-schedule.component.html',
  styleUrls: ['./provide-support-assessment-schedule.component.scss']
})
export class ProvideSupportAssessmentScheduleComponent implements OnInit {

  public Editor = ClassicEditor;
  listData = data;

  requestForm !: FormGroup;

  constructor(
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      newActivity : new FormControl(null),
      existingActivity : new FormControl(null),
      isRepeated : new FormControl(null),
      location : new FormControl(null),
      settingsForScenarios : new FormControl(null),
      simulatorNeededAndQuantity : new FormArray([]),
      isAppliedForAccreditation : new FormControl(null),
      previousExperienceOnSimulations : new FormControl(null),
      isStandardizedPatientNeed : new FormControl(null),
      equipmentsAndConsumables : new FormArray([]),
    })
  }

  get requestFormValues() {
    return this.requestForm.value;
  }

  get equipmentsAndConsumablesControls() {
    return (<FormArray>this.requestForm.get('equipmentsAndConsumables')).controls;
  }

  addEquipmentsAndConsumables() {
    (<FormArray>this.requestForm.get('equipmentsAndConsumables')).push(
      new FormGroup({
        content : new FormControl(null, [])
      })
    );
  }

  onDeleteEquipmentsAndConsumables(index : number) {
    (<FormArray>this.requestForm.get('equipmentsAndConsumables')).removeAt(index);

  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
