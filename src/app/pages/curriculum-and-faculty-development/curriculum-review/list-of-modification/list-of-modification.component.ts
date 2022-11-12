import { Component, OnInit, Input } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-list-of-modification',
  templateUrl: './list-of-modification.component.html',
  styleUrls: ['./list-of-modification.component.scss']
})
export class ListOfModificationComponent implements OnInit {

  listData = data;

  tableData: any [] = []

  @Input() isEditable : boolean = false;

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
