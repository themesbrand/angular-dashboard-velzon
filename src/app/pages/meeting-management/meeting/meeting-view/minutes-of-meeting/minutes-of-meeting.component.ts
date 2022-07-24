import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import {data} from './data';

@Component({
  selector: 'app-minutes-of-meeting',
  templateUrl: './minutes-of-meeting.component.html',
  styleUrls: ['./minutes-of-meeting.component.scss']
})
export class MinutesOfMeetingComponent implements OnInit {

  isViewOnly : boolean = false;
  
  @Input('isViewOnly') 
  set isViewOnlyStatus(data: any){
    this.isViewOnly = data;
    console.log(this.isViewOnly)
  };


  listData = data;
  meetingMinutesForm !: FormGroup;
  public Editor = ClassicEditor;
  simpleDonutChart: any;

  supportFiles : File [] = [];
  minuteApprovalStatus: any;

  constructor(
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.meetingMinutesFormInit();
  }

  meetingMinutesFormInit() {
    this.meetingMinutesForm = this.formBuilder.group({
      content : new FormControl(null)
    })
  }

  onSaveMeetingMinutes() {
    this.listData.meetingMinutesList.push(this.meetingMinutesForm.value);
    this.modalService.dismissAll();
    this.meetingMinutesForm.reset();
  }

  setMinuteApprovalStatus(status : any) {
    console.log(status)

    this.minuteApprovalStatus = status
    if(this.minuteApprovalStatus !== undefined) {
      this.simpleDonutChart = {
        series: [status.approved, status.rejected],
        labels: ['Approved', 'Pending'],
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
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportFiles' : {
        this.supportFiles.splice(this.supportFiles.indexOf(event), 1);
        return
      }
      
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportFiles' : {
        this.supportFiles.push(...event.addedFiles);
        return
      }
      
      default : {
        break;
      }
    }
  }


  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

}
