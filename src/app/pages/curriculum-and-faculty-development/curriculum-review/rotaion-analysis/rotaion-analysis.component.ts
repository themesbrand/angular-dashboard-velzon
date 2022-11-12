import { Component, OnInit, Input } from '@angular/core';

import {data} from './data';
@Component({
  selector: 'app-rotaion-analysis',
  templateUrl: './rotaion-analysis.component.html',
  styleUrls: ['./rotaion-analysis.component.scss']
})
export class RotaionAnalysisComponent implements OnInit {

  listData = data;

  tableData: any [] = []

  @Input() formData : any = null;

  constructor() { }

  ngOnInit(): void {
  }

  addNew() {
    const object : any = {
      rotationName : null
    }
    this.tableData.push(object)
  }
}
