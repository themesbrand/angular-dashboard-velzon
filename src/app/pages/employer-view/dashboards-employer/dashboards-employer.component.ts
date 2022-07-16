import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {data} from './data';

@Component({
  selector: 'app-dashboards-employer',
  templateUrl: './dashboards-employer.component.html',
  styleUrls: ['./dashboards-employer.component.scss']
})
export class DashboardsEmployerComponent implements OnInit {
  listData = data;
  breadCrumbItems!: Array<{}>;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Dashboard', active: true }
    ];
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
