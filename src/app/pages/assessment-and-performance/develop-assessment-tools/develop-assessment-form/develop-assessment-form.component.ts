import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-develop-assessment-form',
  templateUrl: './develop-assessment-form.component.html',
  styleUrls: ['./develop-assessment-form.component.scss']
})
export class DevelopAssessmentFormComponent implements OnInit {

  formSpecific : any = null;
  isApplicableFor : boolean = false;
  @Input() isFormCreated : boolean = false;

  constructor(
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onChangeSpecific() {
    if(this.formSpecific === 'Program Specific' ) {
      this.isApplicableFor = true
    } else {
      this.isApplicableFor = false
    } 
  }
  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
