import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-repair-requests',
  templateUrl: './create-repair-requests.component.html',
  styleUrls: ['./create-repair-requests.component.scss']
})
export class CreateRepairRequestsComponent implements OnInit {

  requestFormObject: any = null;
  isEquipmentStatusChangeable: boolean = false;

  @Input('requestFormData') set requestData (data: any) {
    this.requestFormObject = data;
  }
  
  @Input('equipmentStatus') set changeEquipmentStatus (data: any) {
    this.isEquipmentStatusChangeable = data;
  }
  
  requestForm !: FormGroup;
  attachmentFiles: File[] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();
    if(this.requestFormObject != null) {
      this.requestForm.patchValue(this.requestFormObject)
      if(this.isEquipmentStatusChangeable) {
        this.requestForm.get('equipmentStatus')?.patchValue(null)
      }
    } 

  }
  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      equipmentName : new FormControl(null, []),
      model : new FormControl(null, []),
      supplierName : new FormControl(null, []),
      serialNumber : new FormControl(null, []),
      complains : new FormControl(null, []),

      equipmentStatus : new FormControl('In need of Repair', []),
      
      condemnationReason : new FormControl(null, []),
      
      comments : new FormControl(null, []),

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
