import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-dashboards-employer',
  templateUrl: './dashboards-employer.component.html',
  styleUrls: ['./dashboards-employer.component.scss']
})
export class DashboardsEmployerComponent implements OnInit {
  listData = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
