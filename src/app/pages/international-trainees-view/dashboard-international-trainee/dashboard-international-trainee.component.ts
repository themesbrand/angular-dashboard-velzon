import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard-international-trainee',
  templateUrl: './dashboard-international-trainee.component.html',
  styleUrls: ['./dashboard-international-trainee.component.scss'],
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
export class DashboardInternationalTraineeComponent implements OnInit {

  listData = data;

  isFilterOpened: boolean = false;
  selectedRequest: any = {};
 
  supportingLetter: File[] = [];
  relevantDocuments: File[] = [];

  requestForm !: FormGroup;

  constructor(private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.requestFormInit()
    
    
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      requestType : new FormControl(null),
      description : new FormControl(null),
      country : new FormControl(null),
      dateFrom : new FormControl(null),
      dateTo : new FormControl(null),
      NewUniversity : new FormControl(null),
    })
  }

  get fromValues() {
    return this.requestForm.value;
  } 
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  setRequest(object : any) {
    this.selectedRequest = object;
  }
  
  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingLetter' : {
        this.supportingLetter.splice(this.supportingLetter.indexOf(event), 1);
        return
      }
      case 'relevantDocuments' : {
        this.relevantDocuments.splice(this.relevantDocuments.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingLetter' : {
        this.supportingLetter.push(...event.addedFiles);
        return
      }
      case 'relevantDocuments' : {
        this.relevantDocuments.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any) {
    this.modalService.open(modal, {size : 'lg'})
  }

}
