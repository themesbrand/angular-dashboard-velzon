import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data'

@Component({
  selector: 'app-new-program-objectives',
  templateUrl: './new-program-objectives.component.html',
  styleUrls: ['./new-program-objectives.component.scss']
})
export class NewProgramObjectivesComponent implements OnInit {

  listData = data;

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
