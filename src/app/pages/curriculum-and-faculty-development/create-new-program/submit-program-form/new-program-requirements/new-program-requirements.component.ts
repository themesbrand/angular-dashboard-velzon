import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-program-requirements',
  templateUrl: './new-program-requirements.component.html',
  styleUrls: ['./new-program-requirements.component.scss']
})
export class NewProgramRequirementsComponent implements OnInit {

  newRequirement: any;

  public Editor = ClassicEditor;

  admissionRequirements: any=[] = []

  constructor() { }

  ngOnInit(): void {
    this.getEditableObjects();
  }

  getEditableObjects() {
  }

  onEdit(i : any) {

  }
  
  onSave(i : any) {

  }
  
  onDelete(i : any) {
    this.admissionRequirements.splice(i, 1)
  }

  addNew() {
    this.admissionRequirements.push('')
  }

  onChangeContent() {

  }
}
