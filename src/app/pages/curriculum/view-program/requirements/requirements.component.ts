import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { data } from './data'

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  listData = data;

  newRequirement: any;

  public Editor = ClassicEditor;

  isEditObjects : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getEditableObjects();
  }

  getEditableObjects() {
    this.listData.admissionRequirements.content.forEach(e => {
      this.isEditObjects.push(false)
    })
  }

  onEdit(i : any) {
    this.isEditObjects[i] = true;
    this.newRequirement = this.listData.admissionRequirements.content[i]
  }
  
  onSave(i : any) {
    this.isEditObjects[i] = false;
    this.listData.admissionRequirements.content[i] = this.newRequirement
    this.newRequirement = ''
  }

  addNew() {
    this.isEditObjects.push(false);
    this.listData.admissionRequirements.content.push('')
    const length = this.isEditObjects.length;

    this.isEditObjects[length-1] = true;
    this.newRequirement = this.listData.admissionRequirements.content[length-1]
  }

  onChangeContent() {
    if(this.listData.residencyTrainingRequirements.editable) {
      this.listData.residencyTrainingRequirements.editable = false;
    } else {
      this.listData.residencyTrainingRequirements.editable = true;
    }
    console.log(this.listData.residencyTrainingRequirements.content)
  }

}
