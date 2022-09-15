import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from '../sharedData'

@Component({
  selector: 'app-view-chief-residents',
  templateUrl: './view-chief-residents.component.html',
  styleUrls: ['./view-chief-residents.component.scss']
})
export class ViewChiefResidentsComponent implements OnInit {

  sharedData = data;
  selectedProgram : any;

  breadCrumbItems!: Array<{}>;

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Chief Residents Affairs", link: '/tafus/chief-residents-affairs'},
      { label: "View Chief Residents", active : true }
    ];
  }

  onChangeProgram(event : any) {
    const result = this.sharedData.chiefResidentsList.filter((element : any) => {
      return event === element.program;
    }) 
    this.selectedProgram = result[0]
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

}

