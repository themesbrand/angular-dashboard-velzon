import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboards-employer',
  templateUrl: './dashboards-employer.component.html',
  styleUrls: ['./dashboards-employer.component.scss'],
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
  ]
})
export class DashboardsEmployerComponent implements OnInit {
  listData = data;
  breadCrumbItems!: Array<{}>;

  applicationSummaryChart: any;
  admissionStatisticsChart: any;

  isFilterOpened: boolean = false;

  committeeReviewForm !: FormGroup

  constructor(private router : Router, private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scholarship", link : '/scholarship/scholarship-section' },
      { label: "View Applications", active : true }
    ];
    this.committeeReviewFormInit()
    this._applicationSummaryChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._admissionStatisticsChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-secondary", "--vz-info"]');

  }

  private _applicationSummaryChart(colors : any) {
    colors = this.getChartColorsArray(colors);
    this.applicationSummaryChart = {
      series: [44, 55, 41, 17, 15],
      labels: ["Eligible for Initial Screening", "OMSB Committee Review", "Review of Acceptance", "OMSB Final Screening", "Sponsor Final Approval"],
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
      },
      colors: colors,
    };
  }

  private _admissionStatisticsChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.admissionStatisticsChart = {
      series: [
        {
            name: "Transfer",
            data: [44, 55, 41, 67, 22, 43, 21, 49,16,19,20,11],
        },
        {
            name: "Interruption",
            data: [13, 23, 20, 8, 13, 27, 33, 12,16,13,45,18],
        },
        {
            name: "Withdrawal",
            data: [11, 17, 15, 15, 21, 14, 15, 13,19,20,31,45],
        },
        {
            name: "Rejoining",
            data: [11, 17, 15, 15, 21, 14, 15, 13,19,20,31,45],
        },
        {
            name: "Supplementary Training",
            data: [11, 17, 15, 15, 21, 14, 15, 13,19,20,31,45],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
      },
      responsive: [{
          breakpoint: 480,
          options: {
              legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
              },
          },
      }, ],
      xaxis: {
          categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
          ],
      },
      fill: {
          opacity: 1,
      },
      legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50,
      },
      colors: colors,
    };
  }

  // Chart Colors Set
  private getChartColorsArray(colors:any) {
    colors = JSON.parse(colors);
    return colors.map(function (value:any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
            color = color.replace(" ", "");
            return color;
            }
            else return newValue;;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
  }


  committeeReviewFormInit() {
    this.committeeReviewForm = this.formBuilder.group({
      reviewStatus : new FormControl(null),
      notApprovedStatus: new FormControl(null),
      otherStatus: new FormControl(null),
    })
  }

  get formValues() {
    return this.committeeReviewForm.value
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onSearch() {
    this.onFilter();
    //Save functions
  }
  
  onViewForm() {

  }
  
  onNavigate(url : any ) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
