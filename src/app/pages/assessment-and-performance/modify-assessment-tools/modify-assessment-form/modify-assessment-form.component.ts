import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data';

@Component({
  selector: 'app-modify-assessment-form',
  templateUrl: './modify-assessment-form.component.html',
  styleUrls: ['./modify-assessment-form.component.scss']
})
export class ModifyAssessmentFormComponent implements OnInit {

  listData = data;

  formSpecific : any = null;
  formListSelection : any = null;
  isApplicableFor : boolean = false;

  selectedForm : any = null;

  @Input() isFormCreated : boolean = false;


  formList : any[] = []

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.listData.tableData.forEach(element => {
      this.formList.push(element.formName)
    });
  }

  onChangeSpecific() {
    if(this.formSpecific === 'Program Specific' ) {
      this.isApplicableFor = true
    } else {
      this.isApplicableFor = false
    } 
  }

  onChangeForm() {
    console.log(this.formListSelection)
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
