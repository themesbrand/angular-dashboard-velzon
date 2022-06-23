import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-block-diagram',
  templateUrl: './resident-block-diagram.component.html',
  styleUrls: ['./resident-block-diagram.component.scss']
})
export class ResidentBlockDiagramComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  selectedUser: any

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Residency Block Diagram", active : true }
    ];
  }

}
