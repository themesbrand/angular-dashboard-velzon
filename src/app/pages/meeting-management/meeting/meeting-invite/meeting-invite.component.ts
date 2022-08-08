import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meeting-invite',
  templateUrl: './meeting-invite.component.html',
  styleUrls: ['./meeting-invite.component.scss']
})
export class MeetingInviteComponent implements OnInit {
  listData = data;
  public Editor = ClassicEditor;

  breadCrumbItems!: Array<{}>;

  meetingInviteForm !: FormGroup;
  agendaForm !: FormGroup;
  preMeetingForm !: FormGroup;
  simpleDonutChart: any;

  @ViewChild('updateAgenda') updateAgenda !: TemplateRef<any>;
  @ViewChild('updatePreMeeting') updatePreMeeting !: TemplateRef<any>;
  selectedAgendaIndex: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Meeting Invite View", link : '/meeting-management/view-meetings'},
      { label: "Meeting Invite", active : true }
    ];
    this.meetingInviteFormInit();
    this.agendaFormInit();
    this.preMeetingFormInit();

    this.simpleDonutChart = {
      series: [10, 4, 5],
      labels: ['Agreed', 'Disagreed', 'Pending Response'],
      chart: {
        height: 300,
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
        formatter: function (val: any, opts : any) {
          return opts.w.config.series[opts.seriesIndex]
      },
      }
    };

  }

  meetingInviteFormInit() {
    this.meetingInviteForm = this.formBuilder.group({
      meetingType : new FormControl(null),
      title : new FormControl(null),
      selectedAttendees : new FormControl(null),
      startDate : new FormControl(null),
      startTime : new FormControl(null),
      endDate : new FormControl(null),
      endTime : new FormControl(null),
      timeZone : new FormControl(null),
      venue : new FormControl(null),
      isOnline : new FormControl(null),
      onlineLink : new FormControl(null),
      predefinedAgenda: new FormControl(null),
      departmentAgenda: new FormControl(null),
      otherAgenda: new FormArray([]),
      preMeetingArray: new FormArray([])
    })  
  }

  agendaFormInit() {
    this.agendaForm = this.formBuilder.group({
      agendaItem : new FormControl(null),
      timeDuration : new FormControl(null),
      presenter : new FormControl(null)
    })
  }

  preMeetingFormInit() {
    this.preMeetingForm = this.formBuilder.group({
      preMeetingActivity : new FormControl(null),
      attendees: new FormControl(null),
    })
  }

  get meetingInviteFormValues () {
    return this.meetingInviteForm.value
  }

  onChangeMeetingType() {

    let selectedIndex = -1;

    this.listData.availableMeetingTypes.forEach( (element: any, index : any)  => {
      if( element.meetingType === this.meetingInviteFormValues.meetingType ) {
        selectedIndex = index
      }
    })
    this.meetingInviteForm.patchValue(this.listData.availableMeetingTypes[selectedIndex])
    console.log(this.meetingInviteFormValues)
  }
  
  meetingInviteFormPatch() {
  }

  get agendaArrayControls() {
    return (<FormArray>this.meetingInviteForm.get('otherAgenda')).controls; 
  }

  get preMeetingArrayControls() {
    return (<FormArray>this.meetingInviteForm.get('preMeetingArray')).controls; 
  }

  addAgendaArray() {
    (<FormArray>this.meetingInviteForm.get('otherAgenda')).insert(0,
      new FormGroup({
        'agendaItem' : new FormControl(this.agendaForm.value.agendaItem, []),
        'timeDuration' : new FormControl(this.agendaForm.value.timeDuration, []),
        'presenter' : new FormControl(this.agendaForm.value.presenter, []),
        'isPollCreated' : new FormControl(false)
      })
    );
    this.agendaForm.reset();
    this.modalService.dismissAll();
  }

  addPreMeetingArray() {
    (<FormArray>this.meetingInviteForm.get('preMeetingArray')).insert(0,
      new FormGroup({
        'preMeetingActivity' : new FormControl(this.preMeetingForm.value.preMeetingActivity, []),
        'attendees' : new FormControl(this.preMeetingForm.value.attendees, [])
      })
    );
    this.preMeetingForm.reset();
    this.modalService.dismissAll();
  }

  onDeleteAgenda(i : any) {
    (<FormArray>this.meetingInviteForm.get('otherAgenda')).removeAt(i)
  }
  
  onDeletePreMeetingArray(i : any) {
    (<FormArray>this.meetingInviteForm.get('preMeetingArray')).removeAt(i)
  }
  
  onEditAgenda(agenda : any, i : any) {
    console.log(agenda)
    this.selectedAgendaIndex = i;
    this.agendaForm.patchValue(agenda);
    this.openModal(this.updateAgenda, 'lg')
    this.agendaForm.reset();
  }

  onEditPreMeetingArray(preMeeting : any, i : any) {
    console.log(preMeeting)
    this.selectedAgendaIndex = i;
    this.preMeetingForm.patchValue(preMeeting);
    this.openModal(this.updatePreMeeting, 'lg')
    this.agendaForm.reset();
  }

  onSubmitAgenda() {
    this.addAgendaArray();
  }

  onSubmitPreMeeting() {
    this.addPreMeetingArray()
  }

  onUpdateAgenda() {
    (<FormArray>this.meetingInviteForm.get('otherAgenda')).at(this.selectedAgendaIndex).patchValue(this.agendaForm.value)
    console.log(this.agendaForm.value)
    this.modalService.dismissAll();
  }

  onUpdatePreMeeting() {
    (<FormArray>this.preMeetingForm.get('preMeetingArray')).at(this.selectedAgendaIndex).patchValue(this.preMeetingForm.value)
    console.log(this.preMeetingForm.value)
    this.modalService.dismissAll();
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }
  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
