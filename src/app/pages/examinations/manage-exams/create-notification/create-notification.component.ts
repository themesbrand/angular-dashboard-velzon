import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {pageData} from './data'

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent implements OnInit {

  pageData = pageData;

  notificationData: any;

  @Input('notificationData') 
  set isNotificationData(data: any){
    this.notificationData = data;
  };

  createNotificationForm ! : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNotificationFormInit();
  }

  createNotificationFormInit() {
    this.createNotificationForm = this.formBuilder.group({
      message : new FormControl(null),
      selectedRecipients : new FormControl(null)
    })
    if(this.notificationData) {
      this.createNotificationForm.patchValue(this.notificationData)

    }


  }

}
