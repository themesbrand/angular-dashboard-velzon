import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {data} from './data';


@Component({
  selector: 'app-research-day-reward-winners',
  templateUrl: './research-day-reward-winners.component.html',
  styleUrls: ['./research-day-reward-winners.component.scss']
})
export class ResearchDayRewardWinnersComponent implements OnInit {

  listData = data;
  tableData : any[] = []

  selectedUser : any =  'PD';

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  
  selectedActivity: any;
  selectedComments: any[]  = [];
  
  supportingFiles: File[] = [];

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Academic Activities", link: '/tafus/academic-activities'},
      { label: "Research day - Reward for Winners ", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChangeUser(event : any) {
    this.selectedUser = event  
  }
  
  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  setRequest(request : any) {
    this.selectedActivity = request;
  }
  
  setSelectedComments(course : any) {
    if(course?.comments === undefined || course?.comments?.length === 0) {
      this.selectedComments = []
    } else {
      this.selectedComments = course.comments
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
