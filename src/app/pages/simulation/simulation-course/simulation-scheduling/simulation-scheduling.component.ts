import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-simulation-scheduling',
  templateUrl: './simulation-scheduling.component.html',
  styleUrls: ['./simulation-scheduling.component.scss'],
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
export class SimulationSchedulingComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  listData = data;
  public Editor = ClassicEditor;

  files : File[] = []

  createSchedulingForm !: FormGroup

  currentDate = new Date();
  selectedScheduling: any;

  constructor(    
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Course", link: '/simulation/course'},
      { label: "Scheduling", active : true }
    ];
    this.createSchedulingFormInit();
  }

  createSchedulingFormInit() {
    this.createSchedulingForm = this.formBuilder.group({
      courseName : new FormControl(null),
      registrationStartDate : new FormControl(null),
      registrationEndDate : new FormControl(null),
      courseStartDate : new FormControl(null),
      courseStartTime : new FormControl(null),
      courseEndDate : new FormControl(null),
      courseEndTime : new FormControl(null),
      noOfSeats : new FormControl(null),
      venue : new FormControl(null),
      isFoodRequired : new FormControl(null),
      foodRequired : new FormControl(null),
      termsAndConditions : new FormControl(null),
      isInPersonPaymentsAllowed : new FormControl(null)
    })
  }

  get createSchedulingFormValues(){
    return this.createSchedulingForm.value
  }

  onChangeFromDate(event : any) {
    console.log(event?.value)
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onSubmit() {
    console.log(this.createSchedulingForm.value)
  }

  setScheduling(scheduling : any) {
    this.selectedScheduling = scheduling
  }

  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
