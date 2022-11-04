import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-create-new-checklist-request',
  templateUrl: './create-new-checklist-request.component.html',
  styleUrls: ['./create-new-checklist-request.component.scss']
})
export class CreateNewChecklistRequestComponent implements OnInit {

  listData = data;

  selectedProgram: any = null;

  currentSelection : number = 0 ;


  constructor() { }

  ngOnInit(): void {
  }

  changePage(dir : any) {
    if(dir === 'pre') {
      this.currentSelection = (this.currentSelection - 1) 
    } else {
      this.currentSelection = (this.currentSelection + 1) 
    }
  }
}
