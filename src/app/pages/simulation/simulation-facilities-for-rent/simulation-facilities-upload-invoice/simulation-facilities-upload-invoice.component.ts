import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-facilities-upload-invoice',
  templateUrl: './simulation-facilities-upload-invoice.component.html',
  styleUrls: ['./simulation-facilities-upload-invoice.component.scss']
})
export class SimulationFacilitiesUploadInvoiceComponent implements OnInit {

  supportingFiles: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }


}
