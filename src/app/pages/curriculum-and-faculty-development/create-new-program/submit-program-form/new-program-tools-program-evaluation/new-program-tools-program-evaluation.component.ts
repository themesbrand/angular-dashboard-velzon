import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-new-program-tools-program-evaluation',
  templateUrl: './new-program-tools-program-evaluation.component.html',
  styleUrls: ['./new-program-tools-program-evaluation.component.scss']
})
export class NewProgramToolsProgramEvaluationComponent implements OnInit {

  public Editor = ClassicEditor;

  toolsForProgramEvaluationList : any [] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    const object = {
      heading : '',
      content : ''
    }

    this.toolsForProgramEvaluationList.push(object)
  }

  onDelete(index : any) {
    this.toolsForProgramEvaluationList.splice(index, 1)
  }

}
