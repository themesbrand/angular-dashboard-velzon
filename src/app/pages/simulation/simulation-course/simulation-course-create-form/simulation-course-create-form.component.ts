import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simulation-course-create-form',
  templateUrl: './simulation-course-create-form.component.html',
  styleUrls: ['./simulation-course-create-form.component.scss']
})
export class SimulationCourseCreateFormComponent implements OnInit {

  breadCrumbItems !: Array<{}>;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Course", link: '/course/workshop'},
      { label: "Create Form", active : true }
    ];
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
