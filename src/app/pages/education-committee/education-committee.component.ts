import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-committee',
  templateUrl: './education-committee.component.html',
  styleUrls: ['./education-committee.component.scss']
})
export class EducationCommitteeComponent implements OnInit {

  userRole: string | null = null;

  constructor( ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

}
