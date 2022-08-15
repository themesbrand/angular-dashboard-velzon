import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-create-equivalency-request',
  templateUrl: './create-equivalency-request.component.html',
  styleUrls: ['./create-equivalency-request.component.scss']
})
export class CreateEquivalencyRequestComponent implements OnInit {
  formDataObject: any = null;
  isEditable: boolean = false;

  @Input('formData') set setFormData(data : any) {
    this.formDataObject = data
  }

  @Input('isEditable') set setIsEditable(data : any) {
    this.isEditable = data
  }

  listData = data;

  newRequestForm !: FormGroup;
  
  officialLetterFiles: any [] = [];
  toBeEvaluatedFiles: any [] = [];
  dfrnFiles: any [] = [];
  otherFiles: any [] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.newRequestFormInit();
    if(this.formDataObject === null ) {
      this.addDfrnWithReceiptArray();
      this.addOtherOtherDocumentsArray();
      this.addCertificatesToBeEvaluate();
    } else {
      this.newRequestForm.patchValue(this.formDataObject)

      this.formDataObject.certificatesToBeEvaluate.forEach((element : any) => {
        (<FormArray>this.newRequestForm.get('certificatesToBeEvaluate')).push(
          new FormGroup({
            title : new FormControl(element.title),
            link : new FormControl('', []),
          })
        );
      })

      this.formDataObject.dfrnWithReceipt.forEach((element : any) => {
        (<FormArray>this.newRequestForm.get('dfrnWithReceipt')).push(
          new FormGroup({
            title : new FormControl(element.title),
            link : new FormControl('', []),
          })
        );
      })
      this.formDataObject.otherDocuments.forEach((element : any) => {
        (<FormArray>this.newRequestForm.get('otherDocuments')).push(
          new FormGroup({
            title : new FormControl(element.title),
            link : new FormControl('', []),
          })
        );
      })
      if(this.isEditable === true) {
        this.formDataObject = null
      }
    }
  }

  newRequestFormInit() {
    this.newRequestForm = this.formBuilder.group({
      name : new FormControl(null, []),
      nationality : new FormControl(null, []),
      passportNumber : new FormControl(null, []),
      passportExpiry : new FormControl(null, []),
      nationalIdNumber : new FormControl(null, []),
      nationalIdExpiry : new FormControl(null, []),
      homeTelephone : new FormControl(null, []),
      mobile : new FormControl(null, []),
      email : new FormControl(null, []),
      
      profession: new FormControl(null, []),
      officialLetterTitle: new FormControl(null, []),

      certificatesToBeEvaluate : new FormArray([]),
      dfrnWithReceipt : new FormArray([]),
      otherDocuments : new FormArray([])
    })
  }

  get certificatesToBeEvaluateControls() {
    return (<FormArray>this.newRequestForm.get('certificatesToBeEvaluate')).controls;
  }
  addCertificatesToBeEvaluate() {
    (<FormArray>this.newRequestForm.get('certificatesToBeEvaluate')).push(
      new FormGroup({
        title : new FormControl('', []),
        link : new FormControl('', []),
      })
    );
  }
  onDeleteCertificatesToBeEvaluate(index : number) {
    if((<FormArray>this.newRequestForm.get('certificatesToBeEvaluate')).length != 1) {
      (<FormArray>this.newRequestForm.get('certificatesToBeEvaluate')).removeAt(index);
    }
  }
  
  get dfrnWithReceiptArrayControls() {
    return (<FormArray>this.newRequestForm.get('dfrnWithReceipt')).controls;
  }
  addDfrnWithReceiptArray() {
    (<FormArray>this.newRequestForm.get('dfrnWithReceipt')).push(
      new FormGroup({
        title : new FormControl('', []),
        link : new FormControl('', []),
      })
    );
  }
  onDeleteDfrnWithReceiptArray(index : number) {
    if((<FormArray>this.newRequestForm.get('dfrnWithReceipt')).length != 1) {
      (<FormArray>this.newRequestForm.get('dfrnWithReceipt')).removeAt(index);
    }
  }
  
  get otherDocumentsArrayControls() {
    return (<FormArray>this.newRequestForm.get('otherDocuments')).controls;
  }
  addOtherOtherDocumentsArray() {
    (<FormArray>this.newRequestForm.get('otherDocuments')).push(
      new FormGroup({
        title : new FormControl('', []),
        link : new FormControl('', []),
      })
    );
  }
  onDeleteOtherDocumentsArray(index : number) {
    if((<FormArray>this.newRequestForm.get('otherDocuments')).length != 1) {
      (<FormArray>this.newRequestForm.get('otherDocuments')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'officialLetterFiles' : {
        this.officialLetterFiles.splice(this.officialLetterFiles.indexOf(event), 1);
        return
      }
      case 'toBeEvaluatedFiles' : {
        this.toBeEvaluatedFiles.splice(this.toBeEvaluatedFiles.indexOf(event), 1);
        return
      }
      case 'dfrnFiles' : {
        this.dfrnFiles.splice(this.dfrnFiles.indexOf(event), 1);
        return
      }
      case 'otherFiles' : {
        this.otherFiles.splice(this.otherFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'officialLetterFiles' : {
        this.officialLetterFiles = []
        this.officialLetterFiles.push(...event.addedFiles);
        return
      }
      case 'toBeEvaluatedFiles' : {
        this.toBeEvaluatedFiles = []
        this.toBeEvaluatedFiles.push(...event.addedFiles);
        return
      }
      case 'dfrnFiles' : {
        this.dfrnFiles = []
        this.dfrnFiles.push(...event.addedFiles);
        return
      }
      case 'otherFiles' : {
        this.otherFiles = []
        this.otherFiles.push(...event.addedFiles);
        return
      }
      
      default : {
        break;
      }
    }
  }


}
