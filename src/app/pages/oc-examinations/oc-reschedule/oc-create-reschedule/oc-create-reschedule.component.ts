import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-oc-create-reschedule',
  templateUrl: './oc-create-reschedule.component.html',
  styleUrls: ['./oc-create-reschedule.component.scss']
})
export class OcCreateRescheduleComponent implements OnInit {

  filesSupportingDocuments: any;

  rescheduleRequest: any = null;

  @Input('rescheduleRequest') 
  set isRescheduleRequest(data: any){
    this.rescheduleRequest = data;
  };

  constructor(
    private formBuilder : FormBuilder
  ) { }

  requestForm !: FormGroup

  ngOnInit(): void {
    this.requestFormInit();
    if(this.rescheduleRequest) {
      this.requestForm.patchValue(this.rescheduleRequest)
      this.rescheduleRequest.supportingDocumentsArray.forEach((element: any) => {
        (<FormArray>this.requestForm.get('supportingDocumentsArray')).push(
          new FormGroup({
            title : new FormControl(element.title),
            supportingDocument : new FormControl(element.supportingDocument)
          })
        );
      })
    } else {
      this.addSupportingDocumentsArray();
    }
  }
  
  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      reason : new FormControl(null),
      reScheduleType : new FormControl(null),
      newExamDate : new FormControl(null),
      supportingDocumentsArray : new FormArray([])
    })
  }

  get supportingDocumentsControls() {
    return (<FormArray>this.requestForm.get('supportingDocumentsArray')).controls;
  }
  addSupportingDocumentsArray() {
    (<FormArray>this.requestForm.get('supportingDocumentsArray')).push(
      new FormGroup({
        title : new FormControl(null, []),
        supportingDocument : new FormControl(null, [])
      })
    );
  }
  onDeleteSupportingDocumentsArray(index : number) {
    if((<FormArray>this.requestForm.get('supportingDocumentsArray')).length != 1) {
      (<FormArray>this.requestForm.get('supportingDocumentsArray')).removeAt(index);
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
