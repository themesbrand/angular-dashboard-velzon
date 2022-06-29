import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data'  

@Component({
  selector: 'app-by-trainee',
  templateUrl: './by-trainee.component.html',
  styleUrls: ['./by-trainee.component.scss']
})
export class ByTraineeComponent implements OnInit {

  listData = data;
  status : any[] = [];
  selectedRotationCode : any = ''

  rotationCodeList: any[] = [];
  facultyList: any[] = [];

  isFullscreenMode : boolean = false

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listData.rotationCodes.forEach(r => {
      this.status.push(false)
    })
    this.fetchTableColumnList()
  }

  fetchTableColumnList() {
    data.rotationCodes.forEach(c => {
      const object = {
        rotationCode : c,
        blockValue: ['','','','','','','','','','','','','']
      }
      this.rotationCodeList.push(object)
    })
  }

  onSelectRotationCode(code : any, index : any) {
    this.resetRotationCodeSelector()
    this.selectedRotationCode = code;
    this.status[index] = true;
  }

  setBlock(name : any, index : any) {
    if(this.selectedRotationCode != '') {
      const result = this.rotationCodeList.findIndex(x => {
        return x.rotationCode === name
      })
      this.rotationCodeList[result].blockValue[index] = this.selectedRotationCode
      
    } else {
      const result = this.rotationCodeList.findIndex(x => {
        return x.rotationCode === name
      })
      this.rotationCodeList[result].blockValue[index] = this.selectedRotationCode
    }   
    this.resetRotationCodeSelector()
  }

  resetRotationCodeSelector() {
  //reset color codes
    this.status = []
    this.listData.rotationCodes.forEach(r => {
      this.status.push(false)
    })
    this.selectedRotationCode = ''
  }

  fullModal(smallDataModal: any) {
    this.isFullscreenMode = true;
    this.modalService.open(smallDataModal, { size: 'fullscreen', windowClass: 'modal-holder' });
  }

  closeModal() {
    this.isFullscreenMode = false;
    this.modalService.dismissAll();
  }
}
