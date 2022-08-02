import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.scss'],
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
export class ViewApplicationsComponent implements OnInit {
  
  listData = data;
  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  screeningForm !: FormGroup;
  selectedApplication: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Admission", link: '/admission/admission'},
      { label: "View Application", active : true }
    ];
    this.screeningFormInit();
  }

  screeningFormInit() {
    this.screeningForm = this.formBuilder.group({
      screeningStatus : new FormControl(null),
      screeningFailedReason : new FormControl(null),
      screeningFailedOtherReason : new FormControl(null),
      ifOtherStatus : new FormControl(null),
    })
  }
  
  get screeningFormValues () {
    return this.screeningForm.value
  }
      
  onChange(){
    this.screeningForm.get('screeningFailedReason')?.patchValue(null)
    this.screeningForm.get('screeningFailedOtherReason')?.patchValue(null)
    this.screeningForm.get('ifOtherStatus')?.patchValue(null)

  }

  onSearch() {
    this.onFilter();
    //Save functions
  }

  setApplication(application: any) {
    this.selectedApplication = application
    console.log(this.selectedApplication)
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
