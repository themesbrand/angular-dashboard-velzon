import { Component, OnInit } from '@angular/core';

import {userDetails} from 'src/app/landing/application-forms/data';


@Component({
  selector: 'app-three-d-object-request-form',
  templateUrl: './three-d-object-request-form.component.html',
  styleUrls: ['./three-d-object-request-form.component.scss']
})
export class ThreeDObjectRequestFormComponent implements OnInit {

  userDetails: any = userDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
