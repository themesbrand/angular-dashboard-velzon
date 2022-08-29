import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-oc-view-exam-registrations',
  templateUrl: './oc-view-exam-registrations.component.html',
  styleUrls: ['./oc-view-exam-registrations.component.scss']
})
export class OcViewExamRegistrationsComponent implements OnInit {
  listData = data;

  constructor() { }

  ngOnInit(): void {
  }

}
