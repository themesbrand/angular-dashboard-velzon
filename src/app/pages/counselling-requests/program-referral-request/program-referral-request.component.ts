import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from '../data';

@Component({
  selector: 'app-program-referral-request',
  templateUrl: './program-referral-request.component.html',
  styleUrls: ['./program-referral-request.component.scss']
})
export class ProgramReferralRequestComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Program Referral", active : true }
    ];
  }

  onNavigate(url: any) {
    if(url === '/counselling/self-referral') {
      this.router.navigate([url], { queryParams: { returnUrl: 'counselling/program-referral' } });
      return;
    }
    this.router.navigateByUrl(url)


  }

}
