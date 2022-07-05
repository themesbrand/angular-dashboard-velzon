import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data'


@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.scss']
})
export class ViewProgramComponent implements OnInit {

  programData : any = data.programDataObject
  listData = data;

  Progress = {
    initialSlide: 0,
    slidesPerView: 4,
    navigation: true,
    scrollbar: true,
  };
  
  
  NavAndPaginatoion = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };
  
  submitted = false;
  breadCrumbItems!: Array<{}>;

  constructor(private modalService: NgbModal,
    private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "View Program", active : true }
    ];
    console.log(this.programData.team)
  }

  navigateBack() {
    this.router.navigateByUrl('/ec-setup')
  }

  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
