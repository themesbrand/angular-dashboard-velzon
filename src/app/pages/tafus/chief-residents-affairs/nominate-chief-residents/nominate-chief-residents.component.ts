import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from '../sharedData'

@Component({
  selector: 'app-nominate-chief-residents',
  templateUrl: './nominate-chief-residents.component.html',
  styleUrls: ['./nominate-chief-residents.component.scss']
})
export class NominateChiefResidentsComponent implements OnInit {

  sharedData = data;

  breadCrumbItems!: Array<{}>;

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Chief Residents Affairs", link: '/tafus/chief-residents-affairs'},
      { label: "Nominate Chief Residents", active : true }
    ];
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

}
