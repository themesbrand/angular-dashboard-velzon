import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-new-media-request-cpd',
  templateUrl: './action-new-media-request-cpd.component.html',
  styleUrls: ['./action-new-media-request-cpd.component.scss']
})
export class ActionNewMediaRequestCpdComponent implements OnInit {

  @Input() formData : any = null

  files: any[] = [];

  
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'files' : {
        this.files.splice(this.files.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'files' : {
        this.files.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }
}
