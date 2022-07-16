import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { data } from './data';

@Component({
  selector: 'app-mmr-dashboard',
  templateUrl: './mmr-dashboard.component.html',
  styleUrls: ['./mmr-dashboard.component.scss']
})
export class MmrDashboardComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  selectedAppointmentId: any;

  appointmentScheduleForm !: FormGroup

  constructor(private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MMR Dashboard", active : true }
    ];
    this.appointmentScheduleFormInit()
  }

  appointmentScheduleFormInit() {
    this.appointmentScheduleForm = this.formBuilder.group({
      scheduleType : new FormControl(null),
      
      counsellorsSelector : new FormControl(null),

      internalReferral : new FormArray([]),
      referralTo : new FormArray([]),

      date : new FormControl(null),
      time : new FormControl(null),
      venue : new FormControl(null),
      mode : new FormControl(null)
    })
    
  }

  get formValues () {
    return this.appointmentScheduleForm.value
  }

  get referralToControls() {
    return (<FormArray>this.appointmentScheduleForm.get('referralTo')).controls;
  }

  addReferralToControl () {
    const referral = this.formValues.counsellorsSelector;
  
    (<FormArray>this.appointmentScheduleForm.get('referralTo')).push(
      new FormGroup({
        'name' : new FormControl(referral.counsellorsName, []),
        'designation' : new FormControl(referral.designation, []),
        'institution' : new FormControl(referral.institution, []),
        'mobile' : new FormControl(referral.mobile, []),
        'email' : new FormControl(referral.email, [])
      })
    );
    this.appointmentScheduleForm.get('counsellorsSelector')?.patchValue(null)
  }
  deleteReferralTo(i : any) {
    (<FormArray>this.appointmentScheduleForm.get('referralTo')).removeAt(i)
  }

  get internalReferralControls() {
    return (<FormArray>this.appointmentScheduleForm.get('internalReferral')).controls;
  }

  addInternalReferralControl () {
    const referral = this.formValues.counsellorsSelector;
  
    (<FormArray>this.appointmentScheduleForm.get('internalReferral')).push(
      new FormGroup({
        'name' : new FormControl(referral.counsellorsName, []),
        'mobile' : new FormControl(referral.mobile, []),
        'email' : new FormControl(referral.email, [])
      })
    );
    this.appointmentScheduleForm.get('counsellorsSelector')?.patchValue(null)
  }
  deleteInternalReferral(i : any) {
    (<FormArray>this.appointmentScheduleForm.get('internalReferral')).removeAt(i)
  }

  selectAppointment(i : any) {
    this.selectedAppointmentId = i;
  }

  onChangeCounselee() {
    this.appointmentScheduleForm.get('mobile')?.patchValue(this.formValues.counsellorsName.mobile)
    this.appointmentScheduleForm.get('email')?.patchValue(this.formValues.counsellorsName.mobile)
  }

  onSave() {
    if(this.formValues.scheduleType === 'Internal') {
      const appointment = this.listData.appointmentRequestData[this.selectedAppointmentId]
  
      appointment.counsellorName = this.formValues.counsellorsName.counsellorsName
      appointment.appointmentDate = this.formValues.date
  
      this.listData.appointmentRequestData[this.selectedAppointmentId] = appointment
    } else {
      const appointment = this.listData.appointmentRequestData[this.selectedAppointmentId]
  
      console.log(this.formValues.referralTo)
      this.formValues.referralTo.forEach((element: any) => {
        if(appointment.counsellorName === '' ) {
          appointment.counsellorName = element.name
        } else {
          appointment.counsellorName = appointment.counsellorName + ", " + element.name
        }
      })
      appointment.appointmentDate = this.formValues.date
  
      this.listData.appointmentRequestData[this.selectedAppointmentId] = appointment
      
    }

    this.modalService.dismissAll();
    this.appointmentScheduleForm.reset()
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

  onNavigate() {
    this.router.navigate(['/counselling/self-referral']);
  }

}
