import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.scss']
})
export class ViewProgramComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  constructor (private router : Router) {

  }
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Curriculum", link: '/curriculum'},
      { label: "View Program", active : true }
    ];
  }

  
  navigateBack() {
    this.router.navigateByUrl('/curriculum')
  }

  
}
