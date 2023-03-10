import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-simulation-standardized-patients',
  templateUrl: './simulation-standardized-patients.component.html',
  styleUrls: ['./simulation-standardized-patients.component.scss'],
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
  ],
})
export class SimulationStandardizedPatientsComponent implements OnInit {

  isFilterOpened: boolean = false;
  selectedApplication: any;
  listData = data;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
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
