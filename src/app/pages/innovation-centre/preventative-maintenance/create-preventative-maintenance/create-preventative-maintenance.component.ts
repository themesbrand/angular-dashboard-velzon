import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-preventative-maintenance',
  templateUrl: './create-preventative-maintenance.component.html',
  styleUrls: ['./create-preventative-maintenance.component.scss']
})
export class CreatePreventativeMaintenanceComponent implements OnInit {
  requestFormObject: any = null;
  isEditable: boolean = false;

  @Input('requestFormData') set requestData (data: any) {
    this.requestFormObject = data;
  }
  
  @Input('isEditable') set editableStatus (data: any) {
    this.isEditable = data;
  }

  requestForm !: FormGroup;
  attachmentFiles: File[] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();

    if(this.requestFormObject != null) {
      this.requestForm.get('equipmentName')?.disable();
      this.requestForm.get('model')?.disable();
      this.requestForm.get('supplierName')?.disable();
      this.requestForm.get('serialNumber')?.disable();
      this.requestForm.get('dateOfPurchase')?.disable();
      this.requestForm.get('endOfWarranty')?.disable();

      this.requestForm.patchValue(this.requestFormObject)
    }
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      equipmentName : new FormControl(null, []),
      model : new FormControl(null, []),
      supplierName : new FormControl(null, []),
      serialNumber : new FormControl(null, []),
      dateOfPurchase : new FormControl(null, []),
      endOfWarranty :new FormControl(null, []),
      maintenanceStartDate : new FormControl(null, []),
      maintenanceEndDate : new FormControl(null, []),
      status : new FormControl(null, []),
      approvalStatus : new FormControl(null, []),
      nextMaintenance : new FormControl(null, []),
    })
  }

  get requestFormValues () {
    return this.requestForm.value;
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'attachmentFiles' : {
        this.attachmentFiles.splice(this.attachmentFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'attachmentFiles' : {
        this.attachmentFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
