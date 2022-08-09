import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-exams-create-exam',
  templateUrl: './manage-exams-create-exam.component.html',
  styleUrls: ['./manage-exams-create-exam.component.scss']
})
export class ManageExamsCreateExamComponent implements OnInit {

  isFilterOpened: boolean = false;
  breadCrumbItems!: Array<{}>;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Examination", link: '/examinations/manage-exams'},
      { label: "Create Exam", active : true }
    ];
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
