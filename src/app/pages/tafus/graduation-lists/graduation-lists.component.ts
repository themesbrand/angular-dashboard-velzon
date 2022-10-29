import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-graduation-lists',
  templateUrl: './graduation-lists.component.html',
  styleUrls: ['./graduation-lists.component.scss']
})
export class GraduationListsComponent implements OnInit {

  userRole: string | null = null;
  breadCrumbItems!: Array<{}>;
  
  constructor(
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Graduation", link: '/tafus/graduation'},
      { label: "Graduation Achievements List", active : true }
    ];
  }

}
