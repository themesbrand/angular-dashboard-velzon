import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from '../data';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {
  
  listData = data;
  examResult: any = null;

  createResultForm !: FormGroup;
  filesSupportingDocuments: any;

  @Input('examResult') 
  set setResultData(data: any){
    this.examResult = data;
  };

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createResultFormInit();

    if(this.examResult) {
      this.createResultForm.patchValue(this.examResult)
      this.examResult.performanceReport.forEach((element : any) => {
        (<FormArray>this.createResultForm.get('performanceReport')).push(
          new FormGroup({
            title: new FormControl(element.title)
          })
        ) 
      })
    } else {
      this.addPerformanceReportArray()
    }
  }


  createResultFormInit() {
    this.createResultForm = this.formBuilder.group({
      trainee : new FormControl(null, []),
      examRefId : new FormControl(null, []),
      examType : new FormControl(null, []),
      examDate : new FormControl(null, []),
      results : new FormControl(null, []),
      percentage : new FormControl(null, []),
      noOfAppeals : new FormControl(null, []),
      performanceReport : new FormArray([])
    })

  }

  get createResultFormValues () {
    return this.createResultForm.value
  }

  get performanceReportArrayControls() {
    return (<FormArray>this.createResultForm.get('performanceReport')).controls
  }

  addPerformanceReportArray() {
    (<FormArray>this.createResultForm.get('performanceReport')).push(
      new FormGroup({
        title: new FormControl(null),  
        attachment: new FormControl(null)  
      })
    ) 
  }

  onDeletePerformanceReportArray(index : number) {
    if((<FormArray>this.createResultForm.get('performanceReport')).length != 1) {
      (<FormArray>this.createResultForm.get('performanceReport')).removeAt(index);
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
