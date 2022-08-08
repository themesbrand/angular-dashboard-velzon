import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-e-resource-renewal-request',
  templateUrl: './e-resource-renewal-request.component.html',
  styleUrls: ['./e-resource-renewal-request.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class EResourceRenewalRequestComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;
  isFilterOpened: boolean = false;

  supportingFiles : File [] = [];
  quoteFile : File [] = [];
  lpoFile : File [] = [];
  invoiceFile : File [] = [];
  licenseAgreementFile : File [] = [];
  eResourceEnableFile : File [] = [];

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

      invoiceNumber: new FormControl(null),
      invoiceDescription: new FormControl(null),     

      eResourceDescription: new FormControl(null),     
      eResourceExpiryDate: new FormControl(null),     

      updatedBy: new FormControl(null),
      updatedDate: new FormControl(null),
    })
  }

  get requestFormValues() {
    return this.requestForm.value;
  }

  setRequest(request : any) {
    this.selectedRequest = request;
    this.requestForm.reset();
    this.requestForm.patchValue(request)
    console.log(this.selectedRequest)
  }

  clearForm() {
    this.requestForm.reset()
    this.requestForm.get('dateOfRequest')?.patchValue(new Date())

  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      case 'quoteFile' : {
        this.quoteFile.splice(this.quoteFile.indexOf(event), 1);
        return
      }
      case 'lpoFile' : {
        this.lpoFile.splice(this.lpoFile.indexOf(event), 1);
        return
      }
      case 'invoiceFile' : {
        this.invoiceFile.splice(this.invoiceFile.indexOf(event), 1);
        return
      }
      case 'licenseAgreementFile' : {
        this.licenseAgreementFile.splice(this.licenseAgreementFile.indexOf(event), 1);
        return
      }
      case 'eResourceEnableFile' : {
        this.eResourceEnableFile.splice(this.eResourceEnableFile.indexOf(event), 1);
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
      case 'quoteFile' : {
        this.quoteFile.push(...event.addedFiles);
        return
      }
      case 'lpoFile' : {
        this.lpoFile.push(...event.addedFiles);
        return
      }
      case 'invoiceFile' : {
        this.invoiceFile.push(...event.addedFiles);
        return
      }
      case 'licenseAgreementFile' : {
        this.licenseAgreementFile.push(...event.addedFiles);
        return
      }
      case 'eResourceEnableFile' : {
        this.eResourceEnableFile.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

}
