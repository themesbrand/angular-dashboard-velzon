import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {data} from './data'

@Component({
  selector: 'app-create-certificate-request',
  templateUrl: './create-certificate-request.component.html',
  styleUrls: ['./create-certificate-request.component.scss']
})
export class CreateCertificateRequestComponent implements OnInit {

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
      type : new FormControl(null),
      reason : new FormControl(null),
      amount : new FormControl(null)
    })
  }

  get formValues () {
    return this.requestForm.value
  }

  onChangeType(event : any) {
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
