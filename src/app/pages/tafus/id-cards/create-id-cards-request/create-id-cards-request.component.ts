import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {data} from './data'


@Component({
  selector: 'app-create-id-cards-request',
  templateUrl: './create-id-cards-request.component.html',
  styleUrls: ['./create-id-cards-request.component.scss']
})
export class CreateIdCardsRequestComponent implements OnInit {
  listData = data;

  attachmentsFile : File[] = [];

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      requestReason : new FormControl(null),
      reason : new FormControl(null),
      amount : new FormControl(null)
    })
  }

  get formValues () {
    return this.requestForm.value
  }

  onChangeReason(event : any) {
    this.requestForm.get('amount')?.patchValue(event.fee)
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'attachmentsFile' : {
        this.attachmentsFile.splice(this.attachmentsFile.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'attachmentsFile' : {
        this.attachmentsFile = []
        this.attachmentsFile.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
