import { Component, OnInit } from '@angular/core';

import { data } from './data'

@Component({
  selector: 'app-accredit-faculty-survey',
  templateUrl: './accredit-faculty-survey.component.html',
  styleUrls: ['./accredit-faculty-survey.component.scss']
})
export class AccreditFacultySurveyComponent implements OnInit {

  listData = data;

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'}
  ];

  constructor(
  ) { }

  ngOnInit(): void {

  }



}
