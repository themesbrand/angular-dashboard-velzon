import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-program-syllabus',
  templateUrl: './new-program-syllabus.component.html',
  styleUrls: ['./new-program-syllabus.component.scss']
})
export class NewProgramSyllabusComponent implements OnInit {

  public Editor = ClassicEditor;

  syllabusList : any [] = []

  constructor() { }

  ngOnInit(): void {
  }

  addSyllabus() {
    const object = {
      heading : '',
      content : ''
    }

    this.syllabusList.push(object)
  }

  onDelete(index : any) {
    this.syllabusList.splice(index, 1)
  }
}
