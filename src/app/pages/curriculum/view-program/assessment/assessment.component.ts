import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;
  editableContent: any = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onEdit(i: any, type : any) {
    if(type === 'formativeAssessment') {
      this.listData.formativeAssessment[i].editable = true
    }
    if(type === 'summativeAssessment') {
      this.listData.summativeAssessment[i].editable = true
    }
  }
  
  onSave(i: any, type : any) {
    if(type === 'formativeAssessment') {
      this.listData.formativeAssessment[i].editable = false;
    }
    if(type === 'formativeAssessment') {
      this.listData.summativeAssessment[i].editable = false;
    }
  }

  onDelete(i: any, type : any) {
    if(type === 'formativeAssessment') {
      this.listData.formativeAssessment.splice(i, 1);
    }
    if(type === 'summativeAssessment') {
      this.listData.summativeAssessment.splice(i, 1);
    }
  }

  
  openModel(modal: any) {
    this.modalService.open(modal, { centered: true, size: 'lg' });
  }

  onClick() {
    console.log(this.editableContent)
  }

}
