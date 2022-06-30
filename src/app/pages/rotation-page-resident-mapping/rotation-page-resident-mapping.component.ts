import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { data } from './data';

@Component({
  selector: 'app-rotation-page-resident-mapping',
  templateUrl: './rotation-page-resident-mapping.component.html',
  styleUrls: ['./rotation-page-resident-mapping.component.scss']
})
export class RotationPageResidentMappingComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Master Rotation", active : true }
    ];
    
  }

  
  
}
