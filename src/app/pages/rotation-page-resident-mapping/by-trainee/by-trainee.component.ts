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
  selectedStudentName : any = ''

  rotationCodeList: any[] = [];
  facultyList: any[] = [];
  colorCodeArray: any[] =[]
  colorBlocksArray: any[][] = [];

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
    this.generateColorCodes()
  }

  generateColorCodes() {
    
    for(var i = 0; i < this.listData.students.length; i++) {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      const randomColor = '#' + ('000000' + color + '8f').slice(6);
      this.colorCodeArray.push(randomColor)  
    }

    for(var i = 0; i < this.rotationCodeList.length; i++) {
      let colorRow = [];
      for(var j = 0; j < 13; j++) {
        colorRow.push('#ffffff')
      }
      this.colorBlocksArray.push(colorRow)  
    }


  }

  onSelectRotationCode(code : any, index : any) {
    this.resetRotationCodeSelector()
    this.selectedStudentName = code;
    this.status[index] = true;
  }

  setBlock(name : any, index : any) {

    const result = this.rotationCodeList.findIndex(x => {
      return x.rotationCode === name
    })
    this.rotationCodeList[result].blockValue[index] = this.selectedStudentName

    if(this.selectedStudentName != '') {
      const _result = this.listData.students.findIndex(y => {
        return y.name === this.selectedStudentName
      })
      this.colorBlocksArray[result][index] = this.colorCodeArray[_result]
      
    } else {
      this.colorBlocksArray[result][index] = '#ffffff'
    }   
    this.resetRotationCodeSelector()
  }

  resetRotationCodeSelector() {
  //reset color codes
    this.status = []
    this.listData.rotationCodes.forEach(r => {
      this.status.push(false)
    })
    this.selectedStudentName = ''
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
