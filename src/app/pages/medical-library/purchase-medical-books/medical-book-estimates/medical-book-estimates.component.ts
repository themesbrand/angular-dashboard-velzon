import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-medical-book-estimates',
  templateUrl: './medical-book-estimates.component.html',
  styleUrls: ['./medical-book-estimates.component.scss']
})
export class MedicalBookEstimatesComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;

  createEstimateForm !: FormGroup;

  selectedEstimate: any;

  lpoFile : File [] = [];
  purchaseInvoiceFile : File [] = [];
  licenseAgreementFile : File [] = [];
  eResourceEnableFile : File [] = [];

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.createEstimateFormInit();
    this.populatePurchaseRequests()
  }

  createEstimateFormInit() {
    this.createEstimateForm = this.formBuilder.group({
      purchaseRequests : new FormArray([]),
      estimateTotal : new FormControl(0),
      estimateDate : new FormControl(new Date())
    })
  }

  get createEstimateFormValues () {
    return this.createEstimateForm.value
  }

  get purchaseRequestsControls() {
    return (<FormArray>this.createEstimateForm.get('purchaseRequests')).controls;
  }

  populatePurchaseRequests() {
    this.listData.requestsTableData.forEach((element : any) => {
      (<FormArray>this.createEstimateForm.get('purchaseRequests')).push(
        new FormGroup({
          isChecked : new FormControl(null),
          programName : new FormControl(element.programName),
          title : new FormControl(element.title),
          author : new FormControl(element.author),
          edition : new FormControl(element.edition),
          isbn : new FormControl(element.isbn),
          noOfCopies : new FormControl(element.noOfCopies),
          requestedBy : new FormControl(element.requestedBy),
          requestedDate : new FormControl(element.requestedDate),
          estimatedAmount : new FormControl(0),
        })
      );

    })
  }

  onChangeEstimate(index : any) {
    let total = 0;

    (<FormArray>this.createEstimateForm.get('purchaseRequests')).controls.forEach((element: any) => {
      if(element.value.isChecked === true) {
        total = +total + +element.value.estimatedAmount
      }
    });


    this.createEstimateForm.get('estimateTotal')?.patchValue(total)
  }

  setRequest( estimate : any) {
    this.selectedEstimate = estimate;
  }

  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'lpoFile' : {
        this.lpoFile.splice(this.lpoFile.indexOf(event), 1);
        return
      }
      case 'invoiceFile' : {
        this.purchaseInvoiceFile.splice(this.purchaseInvoiceFile.indexOf(event), 1);
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
      case 'lpoFile' : {
        this.lpoFile.push(...event.addedFiles);
        return
      }
      case 'invoiceFile' : {
        this.purchaseInvoiceFile.push(...event.addedFiles);
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


  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
