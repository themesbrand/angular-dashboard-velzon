import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from './data';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "My Appointments", active : true }
    ];
  }

  onNavigate(url : any) {
    this.router.navigate([url])
  }
}
