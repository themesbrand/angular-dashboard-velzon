import { Component, OnInit } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-view-exam-registrations',
  templateUrl: './view-exam-registrations.component.html',
  styleUrls: ['./view-exam-registrations.component.scss']
})
export class ViewExamRegistrationsComponent implements OnInit {

  listData = data;

  constructor() { }

  ngOnInit(): void {
  }

}
