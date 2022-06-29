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
    console.log(this.selectedRotationCode)
    if(this.isRotationVsTrainee) {
      if(this.selectedRotationCode != '') {
        const result = this.studentList.findIndex(x => {
          return x.student.name === name
        })
        this.studentList[result].blockValue[index] = this.selectedRotationCode
        
      } else {
        const result = this.studentList.findIndex(x => {
          return x.student.name === name
        })
        this.studentList[result].blockValue[index] = this.selectedRotationCode
      }   
    } else {
      if(this.selectedRotationCode != '') {
        const result = this.facultyList.findIndex(x => {
          return x.faculty.name === name
        })
        this.facultyList[result].blockValue[index] = this.selectedRotationCode
        
      } else {
        const result = this.facultyList.findIndex(x => {
          return x.faculty.name === name
        })
        this.facultyList[result].blockValue[index] = this.selectedRotationCode
      }   
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
