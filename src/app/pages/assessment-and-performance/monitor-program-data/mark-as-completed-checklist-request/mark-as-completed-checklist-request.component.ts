import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-as-completed-checklist-request',
  templateUrl: './mark-as-completed-checklist-request.component.html',
  styleUrls: ['./mark-as-completed-checklist-request.component.scss']
})
export class MarkAsCompletedChecklistRequestComponent implements OnInit {

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
