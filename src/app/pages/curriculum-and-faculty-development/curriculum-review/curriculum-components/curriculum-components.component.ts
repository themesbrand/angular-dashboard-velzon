import { Component, OnInit, Input } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-curriculum-components',
  templateUrl: './curriculum-components.component.html',
  styleUrls: ['./curriculum-components.component.scss']
})
export class CurriculumComponentsComponent implements OnInit {

  listData = data;

  @Input() formData : any = null;

  isViewOnly : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.formData !== null) {
      this.isViewOnly = true
    }
  }

}
