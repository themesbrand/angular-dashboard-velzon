import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-checklist-request',
  templateUrl: './view-checklist-request.component.html',
  styleUrls: ['./view-checklist-request.component.scss']
})
export class ViewChecklistRequestComponent implements OnInit {

  @Input() requestData : any = null;

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
