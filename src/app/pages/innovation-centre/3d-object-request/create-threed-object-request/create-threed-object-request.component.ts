import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-threed-object-request',
  templateUrl: './create-threed-object-request.component.html',
  styleUrls: ['./create-threed-object-request.component.scss']
})
export class CreateThreedObjectRequestComponent implements OnInit {
  requestFormObject: any = null;
  isEditable: boolean = false;

  @Input('requestFormData') set requestData (data: any) {
    this.requestFormObject = data;
  }
  @Input('isEditable') set editableStatus (data: any) {
    this.isEditable = data;
  }

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();

    if(this.requestFormObject != null) {
      this.requestForm.patchValue(this.requestFormObject)
    }
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      modelName : new FormControl(null, []),
      quantity : new FormControl(null, []),
      details : new FormControl(null, []),

      startDateTime : new FormControl(null, []),
      endDateTime : new FormControl(null, []),
      
      operatorComment : new FormControl(null, []),
      directorComment : new FormControl(null, []),
    })
  }


  get requestFormValues () {
    return this.requestForm.value;
  }

}
