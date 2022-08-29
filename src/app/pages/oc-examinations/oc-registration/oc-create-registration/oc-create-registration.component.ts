import { Component, Input, OnInit } from '@angular/core';
import {data} from '../data';


@Component({
  selector: 'app-oc-create-registration',
  templateUrl: './oc-create-registration.component.html',
  styleUrls: ['./oc-create-registration.component.scss']
})
export class OcCreateRegistrationComponent implements OnInit {

  isViewOnly: boolean = false;
  
  @Input('isViewOnly') 
  set setIsViewOnly(data: any){
    this.isViewOnly = data;
  }
  listData = data;
  qualificationAttachmentFile: any;
  dateRangeObject : any = {
    from: '2012-01-15',
    to : '2013-01-15'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesBLSCertificate' : {
        this.qualificationAttachmentFile.splice(this.qualificationAttachmentFile.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'qualificationAttachmentFile' : {
        this.qualificationAttachmentFile.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onChange(event : any){
    console.log(this.dateRangeObject)
    console.log(event)

  }

}
