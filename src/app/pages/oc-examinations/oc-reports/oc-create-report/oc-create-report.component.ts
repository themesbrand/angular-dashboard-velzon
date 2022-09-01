import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-oc-create-report',
  templateUrl: './oc-create-report.component.html',
  styleUrls: ['./oc-create-report.component.scss']
})
export class OcCreateReportComponent implements OnInit {
  
  requestData: any = null;

  @Input('requestData') 
  set setRequestData(data: any){
    this.requestData = data;
  };


  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit()
    if(this.requestData != null) {
      this.requestForm.patchValue(this.requestData)
    }
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      reportName : new FormControl(null),
      institution : new FormControl(null),
      reportFields : new FormControl(null),
      status : new FormControl(null),
    })
  }

}
