import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-checklist-request',
  templateUrl: './update-checklist-request.component.html',
  styleUrls: ['./update-checklist-request.component.scss']
})
export class UpdateChecklistRequestComponent implements OnInit {


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
