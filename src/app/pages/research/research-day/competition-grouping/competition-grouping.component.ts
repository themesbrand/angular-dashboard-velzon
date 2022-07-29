import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-competition-grouping',
  templateUrl: './competition-grouping.component.html',
  styleUrls: ['./competition-grouping.component.scss']
})
export class CompetitionGroupingComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;

  isSelectedAll: boolean = false;

  nomineeGroupForm !: FormGroup
  isGroupCreated: boolean = false;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: 'research/research-day'},
      { label: "Competition Grouping", active : true }
    ];
    this.nomineeGroupInit()
  }

  get nomineeGroupValues () {
    return this.nomineeGroupForm.value
  }

  nomineeGroupInit() {
    this.nomineeGroupForm = this.formBuilder.group({
      isSelectedAll : new FormControl(false),
      isSelectedAllTwo : new FormControl(false),
      nomineeGroupOneArray : new FormArray([]),
      nomineeGroupTwoAndThreeArray : new FormArray([])
    })
    this.addNomineeGroupOneArray()
    this.addNomineeGroupTwoAndThreeArray();
  }

  get nomineeGroupOneControls() {
    return (<FormArray>this.nomineeGroupForm.get('nomineeGroupOneArray')).controls;
  }
  get nomineeGroupTwoAndThreeControls() {
    return (<FormArray>this.nomineeGroupForm.get('nomineeGroupTwoAndThreeArray')).controls;
  }

  addNomineeGroupOneArray() {
    this.listData.nominees.forEach(user => {
      (<FormArray>this.nomineeGroupForm.get('nomineeGroupOneArray')).push(
        new FormGroup({
          name : new FormControl(user),
          isSelected : new FormControl(false)
        })
      );
    })
  }
  addNomineeGroupTwoAndThreeArray() {
    this.listData.nominees.forEach(user => {
      (<FormArray>this.nomineeGroupForm.get('nomineeGroupTwoAndThreeArray')).push(
        new FormGroup({
          name : new FormControl(user),
          isSelected : new FormControl(false)
        })
      );
    })
  }

  onClickSelectAll() {
    if(this.nomineeGroupValues.isSelectedAll === true) {
      this.nomineeGroupOneControls.forEach((element, index) => {
        this.nomineeGroupOneControls[index].patchValue({
          isSelected : true
        })
      });
    } else {
      this.nomineeGroupOneControls.forEach((element, index) => {
        this.nomineeGroupOneControls[index].patchValue({
          isSelected : false
        })
      });
    }
  }
  onClickSelectAllTwo() {
    if(this.nomineeGroupValues.isSelectedAllTwo === true) {
      this.nomineeGroupTwoAndThreeControls.forEach((element, index) => {
        this.nomineeGroupTwoAndThreeControls[index].patchValue({
          isSelected : true
        })
      });
    } else {
      this.nomineeGroupTwoAndThreeControls.forEach((element, index) => {
        this.nomineeGroupTwoAndThreeControls[index].patchValue({
          isSelected : false
        })
      });
    }
  }

  onCreateGroup( ) {
    this.isGroupCreated = true;
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }


}
