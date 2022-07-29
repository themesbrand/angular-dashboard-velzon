import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'

@Component({
  selector: 'app-research-day-registration',
  templateUrl: './research-day-registration.component.html',
  styleUrls: ['./research-day-registration.component.scss']
})
export class ResearchDayRegistrationComponent implements OnInit {

  listData = data;

  registrationForm !: FormGroup
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationFormInit()
  }

  registrationFormInit() {
    this.registrationForm = this.formBuilder.group({
      registerAs : new FormControl(null),
      institutionOfStudy : new FormControl(null),
      hospital : new FormControl(null)
    })
  }

  get registerFormValues () {
    return this.registrationForm.value
  }

}
