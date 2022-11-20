import { Component, OnInit } from '@angular/core';

import { data } from './data'

@Component({
  selector: 'app-accredit-resident-survey-program',
  templateUrl: './accredit-resident-survey-program.component.html',
  styleUrls: ['./accredit-resident-survey-program.component.scss']
})
export class AccreditResidentSurveyProgramComponent implements OnInit {

  listData = data;

  public choices = [
    {description: 'Strongly Disagree', value: '1'},
    {description: "Disagree", value: '2'},
    {description: "Agree", value: '3'},
    {description: "Strongly Agree", value: '4'}
  ];


  ngOnInit(): void {
  }

}
