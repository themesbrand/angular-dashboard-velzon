import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data'

@Component({
  selector: 'app-agenda-request',
  templateUrl: './agenda-request.component.html',
  styleUrls: ['./agenda-request.component.scss']
})
export class AgendaRequestComponent implements OnInit {
  listData = data;
  public Editor = ClassicEditor;

  agendaRequestForm !: FormGroup
  files: File[] = [];

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.agendaRequestFormInit();
  }

  agendaRequestFormInit() {
    this.agendaRequestForm = this.formBuilder.group({
      meetingType : new FormControl(null),
      presenter : new FormControl(null),
      services : new FormArray([]),
      comments : new FormControl(null),
    })
    this.addServicesArrayControls();
  }

  get servicesArrayControls() {
    return (<FormArray>this.agendaRequestForm.get('services')).controls; 
  }

  addServicesArrayControls () {
    (<FormArray>this.agendaRequestForm.get('services')).insert(0, 
      new FormGroup({
        serviceName : new FormControl(null),
        serviceLink : new FormControl(null)
      }))
  }

  
  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);

  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }
}
