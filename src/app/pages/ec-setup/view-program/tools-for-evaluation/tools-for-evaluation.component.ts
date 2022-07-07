import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-tools-for-evaluation',
  templateUrl: './tools-for-evaluation.component.html',
  styleUrls: ['./tools-for-evaluation.component.scss']
})
export class ToolsForEvaluationComponent implements OnInit {

  listData = data;
  public Editor = ClassicEditor;
  editableContent: any = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onEdit(i: any) {
    this.listData.objects[i].editable = true
  }
  
  onSave(i: any) {
    this.listData.objects[i].editable = false;

  }

  onDelete(i: any) {
    this.listData.objects.splice(i, 1);
  }

  
  openModel(modal: any) {
    this.modalService.open(modal, { centered: true, size: 'lg' });
  }

  onClick() {
    console.log(this.editableContent)
  }

}
