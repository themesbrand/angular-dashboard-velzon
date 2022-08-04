import { Component, OnInit } from '@angular/core';

import {data} from './data'
@Component({
  selector: 'app-residency-program-view',
  templateUrl: './residency-program-view.component.html',
  styleUrls: ['./residency-program-view.component.scss']
})
export class ResidencyProgramViewComponent implements OnInit {

  listData = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
