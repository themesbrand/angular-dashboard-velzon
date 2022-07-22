import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-attendance-meeting',
  templateUrl: './mark-attendance-meeting.component.html',
  styleUrls: ['./mark-attendance-meeting.component.scss']
})
export class MarkAttendanceMeetingComponent implements OnInit {

  simpleDonutChart: any;

  userList : any[] = [
    {name : 'Madan Al Abri', availability : 'Yes'},
    {name : 'Saleh Mahfoudh', availability : 'Yes'},
    {name : 'Madan Khan', availability : 'Yes'},
    {name : 'Abdel Maddali', availability : 'Yes'},
    {name : 'Al Abri Falsal', availability : 'Yes'},
    {name : 'Al Abri Ibraham', availability : 'Yes'},
    {name : 'Abu Nasser', availability : 'No'},
    {name : 'Faisal Gawas', availability : 'No'},
    {name : 'Hilal basheer', availability : 'No'},
  ]
  constructor() { }

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

}
