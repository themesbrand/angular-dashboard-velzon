import { Component, OnInit } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-modify-assessment-review-team',
  templateUrl: './modify-assessment-review-team.component.html',
  styleUrls: ['./modify-assessment-review-team.component.scss']
})
export class ModifyAssessmentReviewTeamComponent implements OnInit {

  listData = data;
  isSearch: boolean = false;
  isSearchOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  searchTrainee() {
    this.isSearch = true;
  }

  closeSearchTrainee() {
    this.isSearch = false;
    this.isSearchOpen = false;
  }

  openSearch() {
    this.isSearchOpen = true;
  }
  closeSearch() {
    this.isSearch = false; 
  }


}
