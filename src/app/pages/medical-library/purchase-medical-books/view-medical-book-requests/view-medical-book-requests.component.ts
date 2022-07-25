import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-view-medical-book-requests',
  templateUrl: './view-medical-book-requests.component.html',
  styleUrls: ['./view-medical-book-requests.component.scss']
})
export class ViewMedicalBookRequestsComponent implements OnInit {


  listData = data;
  public Editor = ClassicEditor;

  requestForm !: FormGroup
  selectedRequest: any;

  supportingFiles : File [] = [];

  constructor(
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit()
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      programName : new FormControl(null),
      title : new FormControl(null),
      author : new FormControl(null),
      edition : new FormControl(null),
      isbn : new FormControl(null),
      noOfCopies : new FormControl(null),
      requestedBy : new FormControl(null),
      requestedDate : new FormControl(null),
      status: new FormControl(null),

      applicationStatus : new FormControl(null),
    })
  }

  get requestFormValues() {
    return this.requestForm.value;
  }
  
  setRequest(request : any) {
    this.selectedRequest = request;
    this.requestForm.patchValue(request)
  }

  clearForm() {
    this.requestForm.reset();
  }

  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size})
  }
}
