import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-facilities-agreement-template',
  templateUrl: './simulation-facilities-agreement-template.component.html',
  styleUrls: ['./simulation-facilities-agreement-template.component.scss']
})
export class SimulationFacilitiesAgreementTemplateComponent implements OnInit {

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
