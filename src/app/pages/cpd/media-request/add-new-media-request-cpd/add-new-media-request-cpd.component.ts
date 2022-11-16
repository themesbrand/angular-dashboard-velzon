import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-media-request-cpd',
  templateUrl: './add-new-media-request-cpd.component.html',
  styleUrls: ['./add-new-media-request-cpd.component.scss']
})
export class AddNewMediaRequestCpdComponent implements OnInit {

  constructor() { }
  
  files: any[] = [];

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
