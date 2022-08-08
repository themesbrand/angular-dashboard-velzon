import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-interruption-application',
  templateUrl: './interruption-application.component.html',
  styleUrls: ['./interruption-application.component.scss']
})
export class InterruptionApplicationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;

  listBlockFrom : any = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  listBlockTo : any = []

  applicationForm !: FormGroup
  selectedApplication: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Interruption", link: '/admission/interruption'},
      { label: "Application", active : true }
    ];
    this.applicationFormInit();
  }

  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      interruptionType : new FormControl(null, []),
      blockFrom : new FormControl(null, []),
      blockTo : new FormControl(null, []),
    })
  }


  onChangeBlockFrom(event : any) {
    const blockFrom =  this.applicationFormValues.blockFrom;

    if(this.applicationFormValues.interruptionType === 'One Block') {
      this.listBlockTo = [blockFrom]
      this.applicationForm.get('blockTo')?.patchValue(blockFrom)
    }

    if(this.applicationFormValues.interruptionType === 'Upto 3 Blocks') {
      this.listBlockTo = []
      for (let index = blockFrom; index < (blockFrom+3); index++) {
        if(index < 14) {
          this.listBlockTo.push(index)
        }
      }
    }
    if(this.applicationFormValues.interruptionType === 'Upto 1 Year') {
      this.listBlockTo = []
      for (let index = blockFrom; index < (blockFrom+13); index++) {
        if(index < 14) {
          this.listBlockTo.push(index)
        }
      }
    }




    // for (let index = res.blockFrom; index < 13; index++) {
      //   this.listBlockTo.push(index+1)
      // }
  }

  get applicationFormValues() {
    return this.applicationForm.value
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }
  
  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
