import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-finance-e-resource-request',
  templateUrl: './finance-e-resource-request.component.html',
  styleUrls: ['./finance-e-resource-request.component.scss']
})
export class FinanceEResourceRequestComponent implements OnInit {
  listData = data;
  public Editor = ClassicEditor;

  lpoFile : File [] = [];

  requestForm !: FormGroup
  selectedRequest: any;

  constructor(
    private modalService : NgbModal,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.requestFormInit()
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      programName : new FormControl(null),
      dateOfRequest : new FormControl(new Date()),
      title : new FormControl(null),
      publisher : new FormControl(null),
      description : new FormControl(null),
      requestedBy : new FormControl(null),
      status: new FormControl(null),
      quoteDescription: new FormControl(null),
      lpoNumber : new FormControl(null),
      lpoDescription: new FormControl(null),
      updatedBy: new FormControl(null),
      updatedDate: new FormControl(null),
    })
  }

  get requestFormValues() {
    return this.requestForm.value;
  }

  setRequest(request : any) {
    this.selectedRequest = request;
    this.requestForm.patchValue(request)
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'lpoFile' : {
        this.lpoFile.splice(this.lpoFile.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'lpoFile' : {
        this.lpoFile.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

}
