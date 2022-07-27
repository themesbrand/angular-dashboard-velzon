import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simulation-workshop-order-food',
  templateUrl: './simulation-workshop-order-food.component.html',
  styleUrls: ['./simulation-workshop-order-food.component.scss'],
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
export class SimulationWorkshopOrderFoodComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;
  selectedOrderDetails: any;

  orderRequirementForm !: FormGroup
  
  filesOrderRequest: File[] = [];

  constructor(    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Workshop", link: '/simulation/workshop'},
      { label: "Order Food", active : true }
    ];
    this.orderRequirementFormInit()
  }

  orderRequirementFormInit() {
    this.orderRequirementForm = this.formBuilder.group({
      requestsArray : new FormArray([])
    })

    this.addRequestsArray()
  }

  get RequestsArrayControls() {
    return (<FormArray>this.orderRequirementForm.get('requestsArray')).controls;
  }

  addRequestsArray() {
    (<FormArray>this.orderRequirementForm.get('requestsArray')).push(
      new FormGroup({
        foodPreference : new FormControl(null, []),
        foodItems : new FormControl(null, [])
      })
    );
  }
  onDeleteEducation(index : number) {
    (<FormArray>this.orderRequirementForm.get('requestsArray')).removeAt(index);
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesOrderRequest' : {
        this.filesOrderRequest.splice(this.filesOrderRequest.indexOf(event), 1);
        return
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesOrderRequest' : {
        this.filesOrderRequest.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  setOrderDetails(order : any) {
    this.selectedOrderDetails = order;
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
