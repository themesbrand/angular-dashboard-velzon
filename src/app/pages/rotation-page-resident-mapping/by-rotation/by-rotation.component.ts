import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data'  

@Component({
  selector: 'app-by-rotation',
  templateUrl: './by-rotation.component.html',
  styleUrls: ['./by-rotation.component.scss']
})
export class ByRotationComponent implements OnInit {

  listData = data;
  status : any[] = [];
  selectedRotationCode : any = ''

  blockColorCodes: any[][] =[]

  studentList: any[] = [];
  facultyList: any[] = [];

  isRotationVsTrainee : boolean = true
  isFullscreenMode : boolean = false

  colorCodeArray: any[] =[]
  colorBlocksArray: any[][] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {


    this.listData.rotationCodes.forEach(r => {
      this.status.push(false)
    })
    this.fetchTableColumnList()
  }

  fetchTableColumnList() {
    if(this.isRotationVsTrainee) {
      data.students.forEach(s => {
        const object = {
          student : s,
          blockValue: ['','','','','','','','','','','','','']
        }
        this.studentList.push(object)
      })
    } else {
      data.faculty.forEach(f => {
        const object = {
          faculty : f,
          blockValue: ['','','','','','','','','','','','','']
        }
        this.facultyList.push(object)
      })
    }
    this.generateColorCodes()
  }

  generateColorCodes() {
    for(var i = 0; i < this.listData.rotationCodes.length; i++) {
      
    }
    this.listData.rotationCodes.forEach( code => {
      if(code === 'Annual Leave' || code === 'Medical Leave' )  {

        this.colorCodeArray.push('#000000')  
      } else {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        const randomColor = '#' + ('000000' + color + '8f').slice(6);
        this.colorCodeArray.push(randomColor)  
      }

    })


    if(this.isRotationVsTrainee) { 
      for(var i = 0; i < this.studentList.length; i++) {
        let colorRow = [];
        for(var j = 0; j < 13; j++) {
          colorRow.push('#ffffff')
        }
        this.colorBlocksArray.push(colorRow)  
      }
    } else {
      for(var i = 0; i < this.facultyList.length; i++) {
        let colorRow = [];
        for(var j = 0; j < 13; j++) {
          colorRow.push('#ffffff')
        }
        this.colorBlocksArray.push(colorRow)  
      }
    }

  }

  //Change the Table 1st Column Data 
  onChangeListView() {
    this.studentList = [];
    this.facultyList = [];
    this.fetchTableColumnList()
  }

  onSelectRotationCode(code : any, index : any) {
    this.resetRotationCodeSelector()
    this.selectedRotationCode = code;
    this.status[index] = true;
  }

  setBlock(name : any, index : any) {
    if(this.isRotationVsTrainee) {
      const result = this.studentList.findIndex(x => {
        return x.student.name === name
      })
      this.studentList[result].blockValue[index] = this.selectedRotationCode
      
      if(this.selectedRotationCode != '') {
        const _result = this.listData.rotationCodes.findIndex(y => {
          return y === this.selectedRotationCode
        })
        this.colorBlocksArray[result][index] = this.colorCodeArray[_result]
      } else {
        this.colorBlocksArray[result][index] = '#ffffff'
      }   
    } else {
      const result = this.facultyList.findIndex(x => {
        return x.faculty.name === name
      })
      this.facultyList[result].blockValue[index] = this.selectedRotationCode
      if(this.selectedRotationCode != '') {
        const _result = this.listData.rotationCodes.findIndex(y => {
          return y === this.selectedRotationCode
        })
        this.colorBlocksArray[result][index] = this.colorCodeArray[_result]
      } else {
        this.colorBlocksArray[result][index] = '#ffffff'
      }     
    }

    this.resetRotationCodeSelector()
    console.log(this.colorCodeArray)
    console.log(this.colorBlocksArray)
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
