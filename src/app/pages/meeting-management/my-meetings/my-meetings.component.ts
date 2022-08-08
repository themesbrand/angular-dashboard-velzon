import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventApi, EventClickArg } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-my-meetings',
  templateUrl: './my-meetings.component.html',
  styleUrls: ['./my-meetings.component.scss']
})
export class MyMeetingsComponent implements OnInit {

  listData = data;
  slotDurationValue: any = '00:30'

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek',
      center: 'title',
      right: 'prev,next'
    },
    initialView: "timeGridWeek",
    themeSystem: "bootstrap",
    initialEvents: this.listData.calendarEvents,
    weekends: true,
    allDaySlot: false,
    expandRows: true,
    slotDuration: this.slotDurationValue,
    editable: true,
    eventDurationEditable : true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.addEvent.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    };
    
  @ViewChild("viewEvent") viewEvent !: TemplateRef<any>;
  selectedEvent: any;

  constructor(private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  addEvent(event : any) {
  

  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log(clickInfo.event.extendedProps)
    this.selectedEvent = clickInfo.event.extendedProps;
    this.openModal(this.viewEvent, 'md');

  }

  navigateToEvent () {
    this.router.navigateByUrl('/meeting-management/view', {
      state : {
        meetingObject : this.selectedEvent,
        isViewOnly : true,
        isResponse : true,
        returnUrl: '/meeting-management/my-meetings'
      }
    })
    this.modalService.dismissAll()
  }

  handleEvents(events: EventApi[]) {
    console.log(events)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }



}
