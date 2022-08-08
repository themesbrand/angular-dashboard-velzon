import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mark-attendance-meeting',
  templateUrl: './mark-attendance-meeting.component.html',
  styleUrls: ['./mark-attendance-meeting.component.scss']
})
export class MarkAttendanceMeetingComponent implements OnInit {

  isViewOnly : boolean = false;
  
  @Input('isViewOnly') 
  set isViewOnlyStatus(data: any){
    this.isViewOnly = data;
    console.log(this.isViewOnly)
  };

  simpleDonutChart: any;

  userList : any[] = [
    {name : 'Madan Al Abri', availability : 'Yes', mobile : '+968648213', email: 'madan@email.com'},
    {name : 'Saleh Mahfoudh', availability : 'Yes', mobile : '+968999785', email: 'saleh@email.com'},
    {name : 'Madan Khan', availability : 'Yes', mobile : '+968456132', email: 'abdel@email.com'},
    {name : 'Abdel Maddali', availability : 'Yes', mobile : '+968478965', email: 'madan@email.com'},
    {name : 'Al Abri Falsal', availability : 'Yes', mobile : '+968648213', email: 'abri@email.com'},
    {name : 'Al Abri Ibraham', availability : 'Yes', mobile : '+968132486', email: 'madan@email.com'},
    {name : 'Abu Nasser', availability : 'No', mobile : '+968648213', email: 'madan@email.com'},
    {name : 'Faisal Gawas', availability : 'No', mobile : '+968648213', email: 'madan@email.com'},
    {name : 'Hilal basheer', availability : 'No', mobile : '+968415782', email: 'madan@email.com'},
  ]
  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    
    this.simpleDonutChart = {
      series: [6,3],
      labels: ['Attended', 'Not Attended'],
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

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
