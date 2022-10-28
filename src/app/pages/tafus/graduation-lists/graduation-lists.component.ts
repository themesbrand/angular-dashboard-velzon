import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-graduation-lists',
  templateUrl: './graduation-lists.component.html',
  styleUrls: ['./graduation-lists.component.scss']
})
export class GraduationListsComponent implements OnInit {

  userRole: string | null = null;

  constructor(
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

}
