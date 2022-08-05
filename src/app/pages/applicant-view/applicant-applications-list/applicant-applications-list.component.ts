import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-applicant-applications-list',
  templateUrl: './applicant-applications-list.component.html',
  styleUrls: ['./applicant-applications-list.component.scss']
})
export class ApplicantApplicationsListComponent implements OnInit {


  listData = data;

  constructor(
    private modalService : NgbModal,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
