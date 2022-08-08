import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from '../data'

@Component({
  selector: 'app-view-hours',
  templateUrl: './view-hours.component.html',
  styleUrls: ['./view-hours.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class ViewHoursComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  eventForm !: FormGroup;
  selectedEvent: any;

  constructor(private modalService: NgbModal,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "View Hours", active : true }
    ];
    this.intiForm()
  }

  intiForm() {
    this.eventForm = this.formBuilder.group({
      department: new FormControl(null, []),
      assignment: new FormControl(null, []),
      trainingCenter: new FormControl(null, []),
      eventDuration: new FormControl(null, []),
      eventDate : new FormControl(null, []),
      startTime : new FormControl(null, []),
      endTime : new FormControl(null, []),
      recurringDates : new FormControl(null, []),
      slotDuration : new FormControl(null, [])
    })
  }

  selectEvent(event : any) {
    this.selectedEvent = event
  }

  onSelectAssignment(object : any) {

  }

  onSubmitEvent() {

  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

    
  get formValues() {
    return this.eventForm.value
  }
  
  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }
  
}
