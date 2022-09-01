import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-oc-create-appeal',
  templateUrl: './oc-create-appeal.component.html',
  styleUrls: ['./oc-create-appeal.component.scss']
})
export class OcCreateAppealComponent implements OnInit {

  createAppealForm !: FormGroup;
  filesSupportingDocuments: any;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createAppealFormInit();
  }

  createAppealFormInit() {
    this.createAppealForm = this.formBuilder.group({
      examName : new FormControl('Part 1 Exam'),
      examDate : new FormControl('2022-10-15'),
      result : new FormControl('Pass'),
      reason : new FormControl(null),
      supportingDocuments : new FormArray([]),
    })
    this.addSupportingDocumentsArray()
  }

  get createAppealFormValues () {
    return this.createAppealForm.value
  }

  get supportingDocumentsArrayControls() {
    return (<FormArray>this.createAppealForm.get('supportingDocuments')).controls
  }

  addSupportingDocumentsArray() {
    (<FormArray>this.createAppealForm.get('supportingDocuments')).push(
      new FormGroup({
        title: new FormControl(null),  
        attachment: new FormControl(null)  
      })
    ) 
  }

  onDeleteSupportingDocumentsArray(index : number) {
    if((<FormArray>this.createAppealForm.get('supportingDocuments')).length != 1) {
      (<FormArray>this.createAppealForm.get('supportingDocuments')).removeAt(index);
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
