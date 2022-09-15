import { Component, Input, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-create-terminate-request',
  templateUrl: './create-terminate-request.component.html',
  styleUrls: ['./create-terminate-request.component.scss']
})
export class CreateTerminateRequestComponent implements OnInit {

  listData = data;
  supportingDocs: File[] = [];

  selectedUser: any;

  @Input('selectedUser') set setSelectedUser(data : any) {
    this.selectedUser = data
  }

  constructor() { }

  ngOnInit(): void {
  }


  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingDocs' : {
        this.supportingDocs.splice(this.supportingDocs.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingDocs' : {
        this.supportingDocs.push(...event.addedFiles);
        return;
      }
      default : {
        break;
      }
    }
  }
}
