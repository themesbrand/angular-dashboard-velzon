import { Component, OnInit } from '@angular/core';

import {data} from './data'

@Component({
  selector: 'app-equate-certificates',
  templateUrl: './equate-certificates.component.html',
  styleUrls: ['./equate-certificates.component.scss']
})
export class EquateCertificatesComponent implements OnInit {

  listData = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
