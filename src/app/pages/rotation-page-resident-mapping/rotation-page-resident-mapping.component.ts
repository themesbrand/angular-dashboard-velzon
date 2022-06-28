import { Component, OnInit } from '@angular/core';


import { data } from './data';

@Component({
  selector: 'app-rotation-page-resident-mapping',
  templateUrl: './rotation-page-resident-mapping.component.html',
  styleUrls: ['./rotation-page-resident-mapping.component.scss']
})
export class RotationPageResidentMappingComponent implements OnInit {

  listData = data;
  status : any[] = [];
  selectedRotationCode : any = ''

  breadCrumbItems!: Array<{}>;
  studentList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Residency Block Diagram", active : true }
    ];

    this.listData.rotationCodes.forEach(r => {
      this.status.push(false)
    })
    this.fetchStudentList()
  }

  fetchStudentList() {
    data.students.forEach(s => {
      const object = {
        student : s,
        blockValue: ['','','','','','','','','','','','','']
      }
      this.studentList.push(object)
    })
  }

  onSelectRotationCode(code : any, index : any) {
    this.resetRotationCodeSelector()
    this.selectedRotationCode = code;
    this.status[index] = true;
  }

  setStudentBlock(studentName : any, index : any) {
    console.log(this.selectedRotationCode)
    if(this.selectedRotationCode != '') {
      const result = this.studentList.findIndex(x => {
        return x.student === studentName
      })
      this.studentList[result].blockValue[index] = this.selectedRotationCode
      
    } else {
      const result = this.studentList.findIndex(x => {
        return x.student === studentName
      })
      this.studentList[result].blockValue[index] = this.selectedRotationCode


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
}
