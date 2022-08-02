import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-sponsor-setup',
  templateUrl: './sponsor-setup.component.html',
  styleUrls: ['./sponsor-setup.component.scss'],
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
export class SponsorSetupComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  sponsorSetupForm !: FormGroup

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.breadCrumbItems = [
      { label: "Admission", link: '/admission/admission'},
      { label: "Sponsor Setup", active : true }
    ];
    this.addSponsorSetupFormInit();
  }

  addSponsorSetupFormInit() {
    this.sponsorSetupForm = this.formBuilder.group({
      sponsorName : new FormControl(null),
      authorizedPersonsArray : new FormArray([])
    })
    this.addAuthorizedPersonsArray()
  }
  
  get authorizedPersonsArrayControls() {
    return (<FormArray>this.sponsorSetupForm.get('authorizedPersonsArray')).controls;
  }
  
  addAuthorizedPersonsArray() {
    (<FormArray>this.sponsorSetupForm.get('authorizedPersonsArray')).push(
      new FormGroup({
        civilId : new FormControl(null, []),
        name : new FormControl(null, []),
        designation : new FormControl(null, [])
      })
    );
  }

  deleteAuthorizedPersonsArray(i : any) {
    (<FormArray>this.sponsorSetupForm.get('authorizedPersonsArray')).removeAt(i)
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
