import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {data} from '../data'

@Component({
  selector: 'app-view-procedure',
  templateUrl: './view-procedure.component.html',
  styleUrls: ['./view-procedure.component.scss']
})
export class ViewProcedureComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;

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

    
  get formValues() {
    return this.eventForm.value
  }
  
  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }
  
}
