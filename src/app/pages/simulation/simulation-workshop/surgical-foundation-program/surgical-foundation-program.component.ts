import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


import {data} from './data';
@Component({
  selector: 'app-surgical-foundation-program',
  templateUrl: './surgical-foundation-program.component.html',
  styleUrls: ['./surgical-foundation-program.component.scss']
})
export class SurgicalFoundationProgramComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  selectedRequest: any

  userRole: string | null = null;
  listData = data;

  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Workshop", link: '/simulation/workshop'},
      { label: "Surgical Foundation Program Scores", active : true }
    ];
  }

  setRequest(request : any){
    this.selectedRequest = request;
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
