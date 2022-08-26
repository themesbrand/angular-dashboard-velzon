import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'
@Component({
  selector: 'app-form-interim-proposal',
  templateUrl: './form-interim-proposal.component.html',
  styleUrls: ['./form-interim-proposal.component.scss']
})
export class FormInterimProposalComponent implements OnInit {

  formObject: any = null;
  isViewOnly : boolean = false;

  @Input('formData') set formDateValues(data : any){
    this.formObject = data;
  }
  @Input('isViewOnly') set setViewOnly(data : any){
    this.isViewOnly = data;
  }

  listData = data;

  auditReportsFiles : File[] = [];
  otherFiles : File[] = [];

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();

    if(this.formObject != null) {
      this.requestForm.patchValue(this.formObject)

      if(this.formObject?.timeline.length != 0) {
        this.formObject.timeline.forEach((element : any) => {
          (<FormArray>this.requestForm.get('timeline')).push(
            new FormGroup({
              activity : new FormControl(element.activity, []),
              start : new FormControl(element.start, []),
              end : new FormControl(element.end, []),
              status : new FormControl(element.status, []),
            })
          );
        });
      }
    } else {
      this.addTimeline();
    }
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({

      currentStage : new FormControl(null),
      achieved : new FormControl(null),
      deviations : new FormControl(null),
      actualOutcomes : new FormControl(null),
      equipmentPurchased : new FormControl(null),
      publication : new FormControl(null),
      contribution : new FormControl(null),

      
      timeline : new FormArray([]),
      
      

    })
    this.requestForm.valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  get formValues() {
    return this.requestForm.value;
  }

  get timelineControls() {
    return (<FormArray>this.requestForm.get('timeline')).controls;
  }

  addTimeline() {
    (<FormArray>this.requestForm.get('timeline')).push(
      new FormGroup({
        activity : new FormControl(null, []),
        start : new FormControl(null, []),
        end : new FormControl(null, []),
        status : new FormControl(null, [])
      })
    );
  }

  onDeleteTimeline(index : number) {
    if((<FormArray>this.requestForm.get('timeline')).length != 1) {
      (<FormArray>this.requestForm.get('timeline')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'auditReportsFiles' : {
        this.auditReportsFiles.splice(this.auditReportsFiles.indexOf(event), 1);
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
      case 'auditReportsFiles' : {
        this.auditReportsFiles = []
        this.auditReportsFiles.push(...event.addedFiles);
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
