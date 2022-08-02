import { Component, OnInit } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-admission-schedule-interview',
  templateUrl: './admission-schedule-interview.component.html',
  styleUrls: ['./admission-schedule-interview.component.scss']
})
export class AdmissionScheduleInterviewComponent implements OnInit {

  listData = data;

  constructor() { }

  ngOnInit(): void {
  }

}
