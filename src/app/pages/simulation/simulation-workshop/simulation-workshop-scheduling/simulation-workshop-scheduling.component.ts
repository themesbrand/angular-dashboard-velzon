import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-simulation-workshop-scheduling',
  templateUrl: './simulation-workshop-scheduling.component.html',
  styleUrls: ['./simulation-workshop-scheduling.component.scss']
})
export class SimulationWorkshopSchedulingComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;
  listData = data;

  requestForm !: FormGroup;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Workshop", link: '/simulation/workshop'},
      { label: "Workshop Scheduling", active : true }
    ];
    this.requestFormInit();
  }

  requestFormInit() {
    //Not all the form parameters were included in the form controls

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

    this.addSimulatorNeededAndQuantity()
  }

  get requestFormValues() {
    return this.requestForm.value;
  }

  get simulatorNeededAndQuantityControls() {
    return (<FormArray>this.requestForm.get('simulatorNeededAndQuantity')).controls;
  }
  get equipmentsAndConsumablesControls() {
    return (<FormArray>this.requestForm.get('equipmentsAndConsumables')).controls;
  }

  addSimulatorNeededAndQuantity() {
    (<FormArray>this.requestForm.get('simulatorNeededAndQuantity')).push(
      new FormGroup({
        simulator : new FormControl(null, []),
        otherSimulator : new FormControl('', []),
        quantity : new FormControl(null, [])
      })
    );
  }
  addEquipmentsAndConsumables() {
    (<FormArray>this.requestForm.get('equipmentsAndConsumables')).push(
      new FormGroup({
        content : new FormControl(null, [])
      })
    );
  }
  onDeleteSimulatorNeededAndQuantity(index : number) {
    (<FormArray>this.requestForm.get('simulatorNeededAndQuantity')).removeAt(index);

  }
  onDeleteEquipmentsAndConsumables(index : number) {
    (<FormArray>this.requestForm.get('equipmentsAndConsumables')).removeAt(index);

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
