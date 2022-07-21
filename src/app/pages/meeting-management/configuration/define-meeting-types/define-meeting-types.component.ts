import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-define-meeting-types',
  templateUrl: './define-meeting-types.component.html',
  styleUrls: ['./define-meeting-types.component.scss']
})
export class DefineMeetingTypesComponent implements OnInit {

  listData = data;

  public Editor = ClassicEditor;
  defineMeetingTypeForm !: FormGroup;
  agendaForm !: FormGroup;
  selectedAgendaIndex: any;

  isViewMode : boolean = false;

  @ViewChild("viewAgenda") viewAgenda !: TemplateRef<any>;
  selectedMeetingTypeIndex: any;

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }



  ngOnInit(): void {
    this.defineMeetingTypeFormInit();
    this.agendaFormInit();
  }

  defineMeetingTypeFormInit() {
    this.defineMeetingTypeForm = this.formBuilder.group({
      meetingType : new FormControl(null),
      numberOfMeetingPerCalendar: new FormControl(null),
      isReminderRequired: new FormControl(null),
      numberOfReminders: new FormControl(null),
      remindersArray: new FormArray([]),
      isPredefinedAgenda: new FormControl(null),
      agendaArray: new FormArray([]),
      attendeesGroupArray: new FormArray([]),
      authorizedUsersArray: new FormArray([]),
    })
  }

  agendaFormInit() {
    this.agendaForm = this.formBuilder.group({
      agenda : new FormControl(null),
      timeDuration : new FormControl(null),
      presenter : new FormControl(null)
    })
  }

  get defineMeetingFormValues() {
    return this.defineMeetingTypeForm.value;
  }

  get remindersArrayControls() {
    return (<FormArray>this.defineMeetingTypeForm.get('remindersArray')).controls; 
  }

  get agendaArrayControls() {
    return (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).controls; 
  }

  get attendeesGroupArrayControls() {
    return (<FormArray>this.defineMeetingTypeForm.get('attendeesGroupArray')).controls; 
  }
  get authorizedUsersArrayControls() {
    return (<FormArray>this.defineMeetingTypeForm.get('authorizedUsersArray')).controls; 
  }

  onChangeNumberOfReminders () {

    const reminders = this.defineMeetingFormValues.numberOfReminders;
    while (this.remindersArrayControls.length !== 0) {
      (<FormArray>this.defineMeetingTypeForm.get('remindersArray')).removeAt(0)
    }
    for(let i = 0; i < reminders ; i++) {
      (<FormArray>this.defineMeetingTypeForm.get('remindersArray')).push(
        new FormGroup({
          reminderNumber : new FormControl(`Reminder ${(i+1)} : Before `),
          reminderDays : new FormControl(null),
        })
      );
    }
  }

  addAgendaArray() {
    (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).insert(0,
      new FormGroup({
        'agendaItem' : new FormControl(this.agendaForm.value.agenda, []),
        'timeDuration' : new FormControl(this.agendaForm.value.timeDuration, []),
        'presenter' : new FormControl(this.agendaForm.value.presenter, [])
      })
    );
    this.agendaForm.reset();
    this.modalService.dismissAll();
  }

  setAgendaIndex(i : any) {
    this.agendaForm.patchValue({
      'agenda' : this.agendaArrayControls[i].value.agendaItem,
      'timeDuration' : this.agendaArrayControls[i].value.timeDuration,
      'presenter' : this.agendaArrayControls[i].value.presenter
    })
    this.openModal(this.viewAgenda, 'lg')
  }

  onSubmitAgenda() {
    this.addAgendaArray()
  }

  onUpdateAgenda() {
    (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).at(this.selectedAgendaIndex).patchValue({
      'agendaItem' : this.agendaForm.value.agenda,
      'timeDuration' : this.agendaForm.value.timeDuration,
      'presenter' : this.agendaForm.value.presenter
    })
    this.modalService.dismissAll()
  }

  onDeleteAgenda(i : any) {
    (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).removeAt(i)
  }

  addAttendeesGroupArray(user : any) {
    (<FormArray>this.defineMeetingTypeForm.get('attendeesGroupArray')).insert(0,
      new FormGroup({
        'name' : new FormControl(user.name, []),
        'email' : new FormControl(user.email, []),
        
      })
    );
    this.modalService.dismissAll();
  }

  onDeleteAttendeesGroupArray(i : any) {
    (<FormArray>this.defineMeetingTypeForm.get('attendeesGroupArray')).removeAt(i)

  }
  addAuthorizedUsersArray(user : any) {
    (<FormArray>this.defineMeetingTypeForm.get('authorizedUsersArray')).insert(0,
      new FormGroup({
        'name' : new FormControl(user.name, []),
        'email' : new FormControl(user.email, []),
        
      })
    );
    this.modalService.dismissAll();
  }

  onDeleteAuthorizedUsersArray(i : any) {
    (<FormArray>this.defineMeetingTypeForm.get('authorizedUsersArray')).removeAt(i)
  }

  onSaveMeetingType(){
    this.listData.availableMeetingTypes.push(
      this.defineMeetingFormValues
    )
    this.resetForm();
  }

  onUpdateMeetingType() {
    this.listData.availableMeetingTypes[this.selectedMeetingTypeIndex] = this.defineMeetingFormValues;
    this.isViewMode = false;
    this.resetForm()
  }

  onCancelEditMeetingType() {
    this.isViewMode = false;
    this.resetForm()
  }

  resetForm() {
    while (this.remindersArrayControls.length !== 0) {
      (<FormArray>this.defineMeetingTypeForm.get('remindersArray')).removeAt(0)
    }
    while (this.attendeesGroupArrayControls.length !== 0) {
      (<FormArray>this.defineMeetingTypeForm.get('attendeesGroupArray')).removeAt(0)
    }
    while (this.agendaArrayControls.length !== 0) {
      (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).removeAt(0)
    }
    while (this.authorizedUsersArrayControls.length !== 0) {
      (<FormArray>this.defineMeetingTypeForm.get('authorizedUsersArray')).removeAt(0)
    }
    this.defineMeetingTypeForm.reset();
  }

  onSelectMeetingType(meeting: any, i : any) {
    console.log(meeting)

    this.isViewMode = true;
    this.selectedMeetingTypeIndex = i

    const remindersArray = meeting.remindersArray.forEach((element: any, index : any) => {
      (<FormArray>this.defineMeetingTypeForm.get('remindersArray')).push(
        new FormGroup({
          reminderNumber : new FormControl(element.reminderNumber),
          reminderDays : new FormControl(element.reminderDays),
        })
      )
    });

    const agendaArray = meeting.agendaArray.forEach((element: any, index : any) => {
      (<FormArray>this.defineMeetingTypeForm.get('agendaArray')).push(
        new FormGroup({
          agendaItem : new FormControl(element.agendaItem),
          timeDuration : new FormControl(element.timeDuration),
          presenter : new FormControl(element.presenter)
        })
      )
    });
    const attendeesGroupArray = meeting.attendeesGroupArray.forEach((element: any, index : any) => {
      (<FormArray>this.defineMeetingTypeForm.get('attendeesGroupArray')).push(
        new FormGroup({
          'name' : new FormControl(element.name),
          'email' : new FormControl(element.email),
        })
      )
    });
    const authorizedUsersArray = meeting.authorizedUsersArray.forEach((element: any, index : any) => {
      (<FormArray>this.defineMeetingTypeForm.get('authorizedUsersArray')).push(
        new FormGroup({
          'name' : new FormControl(element.name),
          'email' : new FormControl(element.email),
        })
      )
    });
    
    this.defineMeetingTypeForm.patchValue({
      meetingType: meeting.meetingType,
      numberOfMeetingPerCalendar: meeting.numberOfMeetingPerCalendar,
      isReminderRequired: meeting.isReminderRequired,
      numberOfReminders: meeting.numberOfReminders,
      remindersArray: remindersArray,
      isPredefinedAgenda: meeting.isPredefinedAgenda,
      agendaArray: agendaArray,
      attendeesGroupArray: attendeesGroupArray,
      authorizedUsersArray: authorizedUsersArray,

    })
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }



}
