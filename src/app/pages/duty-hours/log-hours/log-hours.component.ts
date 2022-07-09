import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarOptions, EventClickArg, EventApi } from '@fullcalendar/angular';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data} from '../data'

@Component({
  selector: 'app-log-hours',
  templateUrl: './log-hours.component.html',
  styleUrls: ['./log-hours.component.scss']
})
export class LogHoursComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;

  // calendar
  calendarEvents !: any[];
  editEvent: any;
  formEditData!: FormGroup;
  newEventDate: any;
  category!: any[];
  submitted = false;

  slotDurationValue: any = '00:30'
  tablePreferenceValue: any = 'horizontal'

  addEventForm !: FormGroup
  
  @ViewChild("addEventModal") addEventModal !: TemplateRef<any>;


  /***
 * Calender Set
 */
  calendarOptions: CalendarOptions = {
  headerToolbar: {
    left: 'dayGridMonth,timeGridWeek',
    center: 'title',
    right: 'prevYear,prev,next,nextYear'
  },
  initialView: "timeGridWeek",
  themeSystem: "bootstrap",
  initialEvents: this.listData.calendarEvents,
  weekends: true,
  expandRows: true,
  slotDuration: this.slotDurationValue,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  dateClick: this.addEvent.bind(this),
  eventClick: this.handleEventClick.bind(this),
  eventsSet: this.handleEvents.bind(this)
  };
  
  currentEvents: EventApi[] = [];
  slotDuration: any;
  currentEvent: any;

  recurringDatesSelector: any;
  recurringDatesArray: any[] = [];
  
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Log Hours", active : true }
    ];
    this.addEventFormInit()
  }

  addEventFormInit() {
    this.addEventForm = this.formBuilder.group({
      department: new FormControl(null, []),
      assignment: new FormControl(null, []),
      trainingCenter: new FormControl(null, []),
      eventDuration: new FormControl(null, []),
      recurringDates : new FormControl(null, []),
      slotDuration : new FormControl(null, [])
    })
  }

  onSubmitEvent() {
        let endDate = new Date(this.currentEvent.date)

    const calendarApi = this.currentEvent.view.calendar;

    if(this.formValues.eventDuration === 'multiple') {
      const dates = this.formValues.recurringDates.split(',')
      console.log(dates)
      dates.forEach((element: any) => {
        const date = new Date(element)
        const currentEventDate = new Date(this.currentEvent.date)
        date.setMinutes(currentEventDate.getMinutes())
        date.setHours(currentEventDate.getHours())
        calendarApi.addEvent({
          title : this.formValues.assignment.assignmentName,
          start: date,
          end: new Date(date.getTime() + this.formValues.slotDuration.value *60000),
          color: this.formValues.assignment.colorCode
        });


      });
    } else {
      calendarApi.addEvent({
        title : this.formValues.assignment.assignmentName,
        start: this.currentEvent.date,
        end: new Date(endDate.getTime() + this.formValues.slotDuration.value *60000),
        color: this.formValues.assignment.colorCode
      });
      const date = new Date(endDate.getTime() + this.formValues.slotDuration.value *60000)

      console.log(this.formValues.slotDuration.value)
    }
    this.modalService.dismissAll();
    this.addEventForm.reset();
  }

  /**
   * Event click modal show
   */
  handleEventClick(clickInfo: EventClickArg) {

    
  }

  /**
   * Events bind in calander
   * @param events events
   */
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  /**
   * Close event modal
   */
  closeEventModal() {

  }

  onChangeTablePreferences(view : any) {

  }
  
  get formValues() {
    return this.addEventForm.value
  }


  onChangeSlotDuration(duration : any) {
    this.calendarOptions.slotDuration = duration
  }

  onSelectAssignment(object : any) {
    this.addEventForm.get('assignment')?.patchValue(object)
  }

  addEvent(event : any) {
    console.log(event)
    this.currentEvent = event;
    this.openModal(this.addEventModal, 'lg');
  }

  savePreference() {
    this.modalService.dismissAll();
  }

  /**
 * Event add modal
 */
  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }

}
