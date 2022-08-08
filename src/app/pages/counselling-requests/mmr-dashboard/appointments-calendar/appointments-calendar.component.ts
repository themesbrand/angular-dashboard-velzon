import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventApi, EventClickArg } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from '../data';

@Component({
  selector: 'app-appointments-calendar',
  templateUrl: './appointments-calendar.component.html',
  styleUrls: ['./appointments-calendar.component.scss']
})
export class AppointmentsCalendarComponent implements OnInit {

  listData = data;
  
  calendarEvents: any[] = [];

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek',
      center: 'title',
      right: 'prev,next'
    },
    initialView: "dayGridMonth",
    themeSystem: "bootstrap",
    initialEvents: this.calendarEvents,
    weekends: true,
    allDaySlot: false,
    expandRows: true,
    editable: true,
    eventDurationEditable : true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.addEvent.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };

  currentEvents: EventApi[] | undefined;

  @ViewChild("eventModal") eventModal !: TemplateRef<any>;
  selectedEvent: any;

  constructor(private modalService: NgbModal,
    private router : Router) { }

  ngOnInit(): void {

    this.generateEvents()
  }

  generateEvents() {

    this.listData.appointmentRequestData.forEach(event => {
      if(event.appointmentDate) {
        const object = {
          title : event.nameOfCounselee,
          start : new Date(event.appointmentDate),
          extendedProps : event
        }
        this.calendarEvents.push(object)
      }
    })
    
  }


  addEvent(event : any) { 

  }


  handleEventClick(clickInfo: EventClickArg) {
    console.log(clickInfo.event.extendedProps)
    this.selectedEvent = clickInfo.event.extendedProps
    this.openModal(this.eventModal, 'md')

  } 

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }

  onNavigate() {
    this.router.navigateByUrl('counselling/mmr-dashboard/mini-medical-record')
    this.modalService.dismissAll()
  }


}
