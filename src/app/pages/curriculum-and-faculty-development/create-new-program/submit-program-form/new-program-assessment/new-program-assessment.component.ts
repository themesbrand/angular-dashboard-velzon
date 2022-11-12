import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-program-assessment',
  templateUrl: './new-program-assessment.component.html',
  styleUrls: ['./new-program-assessment.component.scss']
})
export class NewProgramAssessmentComponent implements OnInit {

  public Editor = ClassicEditor;

  formativeList : any [] = []
  summativeList : any [] = []


  constructor() { }

  ngOnInit(): void {
  }

  addFormative() {
    const object = {
      heading : '',
      content : ''
    }

    this.formativeList.push(object)
  }

  onDeleteFormative(index : any) {
    this.formativeList.splice(index, 1)
  }

  addSummativeList() {
    const object = {
      heading : '',
      content : ''
    }

    this.summativeList.push(object)
  }

  onDeleteSummativeList(index : any) {
    this.summativeList.splice(index, 1)
  }

}
