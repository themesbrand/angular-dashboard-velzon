import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-simulation-workshop-view-application',
  templateUrl: './simulation-workshop-view-application.component.html',
  styleUrls: ['./simulation-workshop-view-application.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class SimulationWorkshopViewApplicationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;
  public Editor = ClassicEditor;

  standardizedPatientsForm !: FormGroup;

  selectedApplication: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.standardizedPatientsFormInit();
  }

  standardizedPatientsFormInit() {
    this.standardizedPatientsForm = this.formBuilder.group({
      standardizedPatients : new FormArray([])
    })
    this.addStandardizedPatientsArray();

  }
  get standardizedPatientsControls() {
    return (<FormArray>this.standardizedPatientsForm.get('standardizedPatients')).controls;
  }
  addStandardizedPatientsArray() {
    (<FormArray>this.standardizedPatientsForm.get('standardizedPatients')).push(
      new FormGroup({
        patient : new FormControl(null, [])
      })
    );
  }
  deleteStandardizedPatientsArray(i : any) {
    (<FormArray>this.standardizedPatientsForm.get('standardizedPatients')).removeAt(i)
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

    
  setApplication (application : any) {
    this.selectedApplication = application;
  }
  
  
  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
