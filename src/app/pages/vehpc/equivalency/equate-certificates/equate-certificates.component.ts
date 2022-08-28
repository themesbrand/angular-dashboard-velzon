import { Component, Input, OnInit } from '@angular/core';

import {data} from './data'

@Component({
  selector: 'app-equate-certificates',
  templateUrl: './equate-certificates.component.html',
  styleUrls: ['./equate-certificates.component.scss']
})
export class EquateCertificatesComponent implements OnInit {

  isViewOnly: boolean = false;

  @Input('isViewOnly') set viewOnlyStatus(data : any) {
    console.log(data)
    this.isViewOnly = data;
  }
  listData = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
