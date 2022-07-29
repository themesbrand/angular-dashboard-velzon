import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-upload-presentation',
  templateUrl: './upload-presentation.component.html',
  styleUrls: ['./upload-presentation.component.scss']
})
export class UploadPresentationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = false;

  uploadPresentationForm !: FormGroup;
  files: any;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: 'research/research-day'},
      { label: "Upload Presentation", active : true }
    ];
    this.uploadPresentationFormInit();
  }

  uploadPresentationFormInit() {
    this.uploadPresentationForm = this.formBuilder.group({
      presentationsArray : new FormArray([])
    })
    this.addPresentationsArray();
  }

  
  get presentationsArrayControls() {
    return (<FormArray>this.uploadPresentationForm.get('presentationsArray')).controls;
  }
  
  addPresentationsArray() {
    (<FormArray>this.uploadPresentationForm.get('presentationsArray')).push(
      new FormGroup({
        category : new FormControl(null, [])
      })
    );
  }
  deletePresentationsArray(i : any) {
    (<FormArray>this.uploadPresentationForm.get('presentationsArray')).removeAt(i)
  }
  

  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);
  }

  

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }

}
