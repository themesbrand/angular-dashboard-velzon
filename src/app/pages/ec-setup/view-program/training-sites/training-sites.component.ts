import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-training-sites',
  templateUrl: './training-sites.component.html',
  styleUrls: ['./training-sites.component.scss']
})
export class TrainingSitesComponent implements OnInit {

  listData = data;
  
  profileImage: File[] = [];
  selectedModalType: any;

  constructor(private router : Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  onSelect(event : any) {
    this.profileImage = [];
    this.profileImage.push(...event.addedFiles);
  }
  onRemove(event : any) {
    this.profileImage.splice(this.profileImage.indexOf(event), 1);
   }

  selectPersonType(selection :any) {
    this.selectedModalType = selection;

  }
  openModel(modal: any, size: any) {
    this.modalService.open(modal, { centered: true, size: size });
  }
}
