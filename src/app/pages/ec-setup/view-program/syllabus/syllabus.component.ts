import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onEdit(i: any) {
    this.listData.syllabusContents[i].editable = true
  }
  
  onSave(i: any) {
    this.listData.syllabusContents[i].editable = false;
  }

  onDelete(i: any) {
    this.listData.syllabusContents.splice(i, 1);
  }

  openModel(modal: any) {
    this.modalService.open(modal, { centered: true, size: 'lg' });
  }

}
