import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-new-program-form',
  templateUrl: './view-new-program-form.component.html',
  styleUrls: ['./view-new-program-form.component.scss']
})
export class ViewNewProgramFormComponent implements OnInit {

  @Input() requestData : any = null
  @Input() isPreviewOnly : any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
