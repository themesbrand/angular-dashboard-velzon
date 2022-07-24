import { Component, Input, OnInit } from '@angular/core';

import {data} from './data'

@Component({
  selector: 'app-action-items-summary',
  templateUrl: './action-items-summary.component.html',
  styleUrls: ['./action-items-summary.component.scss']
})
export class ActionItemsSummaryComponent implements OnInit {

  listData = data;
  
  isViewOnly : boolean = false;
  
  @Input('isViewOnly') 
  set isViewOnlyStatus(data: any){
    this.isViewOnly = data;
    console.log(this.isViewOnly)
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {

  }

}
