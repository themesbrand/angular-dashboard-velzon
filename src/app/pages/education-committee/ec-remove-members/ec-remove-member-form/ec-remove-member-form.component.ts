import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ec-remove-member-form',
  templateUrl: './ec-remove-member-form.component.html',
  styleUrls: ['./ec-remove-member-form.component.scss']
})
export class EcRemoveMemberFormComponent implements OnInit {

  requestFiles: File[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

    
  onRemove(event : any, type: any) {
    switch(type) {
      case 'requestFiles' : {
        this.requestFiles.splice(this.requestFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'requestFiles' : {
        this.requestFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }
}
