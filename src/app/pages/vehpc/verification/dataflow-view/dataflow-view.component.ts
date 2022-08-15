import { Component, OnInit } from '@angular/core';
import {data} from './data'

@Component({
  selector: 'app-dataflow-view',
  templateUrl: './dataflow-view.component.html',
  styleUrls: ['./dataflow-view.component.scss']
})
export class DataflowViewComponent implements OnInit {
  listData = data;
  qualificationAttachmentFile: any;
  dateRangeObject : any = {
    from: '2012-01-15',
    to : '2013-01-15'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
