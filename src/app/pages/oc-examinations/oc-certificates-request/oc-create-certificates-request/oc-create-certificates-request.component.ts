import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-oc-create-certificates-request',
  templateUrl: './oc-create-certificates-request.component.html',
  styleUrls: ['./oc-create-certificates-request.component.scss']
})
export class OcCreateCertificatesRequestComponent implements OnInit {
  
  listData = data;

  requestForm !: FormGroup;
  filesSupportingDocuments: any;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      examName : new FormControl(null),
      certificateRecipientType : new FormControl(null),
      supportingDocuments : new FormArray([]),
      reason : new FormControl(null),
    })
    this.addSupportingDocumentsArray()
  }

  get requestFormValues () {
    return this.requestForm.value
  }

  get supportingDocumentsArrayControls() {
    return (<FormArray>this.requestForm.get('supportingDocuments')).controls
  }

  addSupportingDocumentsArray() {
    (<FormArray>this.requestForm.get('supportingDocuments')).push(
      new FormGroup({
        title: new FormControl(null),  
        attachment: new FormControl(null)  
      })
    ) 
  }

  onDeleteSupportingDocumentsArray(index : number) {
    if((<FormArray>this.requestForm.get('supportingDocuments')).length != 1) {
      (<FormArray>this.requestForm.get('supportingDocuments')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.splice(this.filesSupportingDocuments.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
