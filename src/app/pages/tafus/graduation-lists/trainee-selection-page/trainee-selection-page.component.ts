import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from '../data';

@Component({
  selector: 'app-trainee-selection-page',
  templateUrl: './trainee-selection-page.component.html',
  styleUrls: ['./trainee-selection-page.component.scss'],
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
export class TraineeSelectionPageComponent implements OnInit {

  listData = data;
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  screeningForm !: FormGroup;
  selectedApplication: any;

  selectedStatusValue : any;

  statusList : any  = [ 'Graduation', 'Extension Required' ]
  selectedTrainee: any = null;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Graduation", link: '/tafus/graduation'},
      { label: "Trainee Selection", active : true }
    ];
  }
      
  onSearch() {
    this.onFilter();
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  updateStatus() {
    this.listData.tableData.forEach((element, index) => {
      if(element.statusValue === true) {
        element.status = this.selectedStatusValue;
        element.statusValue = false;
      }
    });    
  }

  contactTraineeAction() {
    
    const indexOfObject = this.listData.tableData.findIndex((object) => {
      console.log(object)
      console.log(this.selectedTrainee.name)
      return object.name === this.selectedTrainee.name;
    });

    console.log( indexOfObject)

    if (indexOfObject !== -1) {
      this.listData.tableData.splice(indexOfObject, 1);
    }

    this.modalService.dismissAll();
    
  }


  selectTrainee(trainee: any) {
    this.selectedTrainee = trainee;
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
