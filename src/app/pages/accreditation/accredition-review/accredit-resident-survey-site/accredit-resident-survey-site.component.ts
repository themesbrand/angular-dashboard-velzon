import { Component, OnInit } from '@angular/core';

import { data } from './data'
@Component({
  selector: 'app-accredit-resident-survey-site',
  templateUrl: './accredit-resident-survey-site.component.html',
  styleUrls: ['./accredit-resident-survey-site.component.scss']
})
export class AccreditResidentSurveySiteComponent implements OnInit {

  listData = data;

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
