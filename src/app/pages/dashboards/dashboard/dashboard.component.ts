import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ToastService } from '../toast-service';

import { ChartType } from '../dashboard.model';
import { statData } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {

  examinationStatisticsToggle : boolean = false;

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  analyticsChart!: ChartType;
  BestSelling: any;
  TopSelling: any;
  RecentSelling: any;
  SalesCategoryChart!: ChartType;
  statData!: any;

  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;

  examinationStatics: any;
  examinationSummary: any;
  studentChart: any;
  examToppers: any;

  longitude = 72.858881;
  latitude = 19.109281;
  markers: any;

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Dashboard', active: true }
    ];
    
    if(localStorage.getItem('toast')){
      this.toastService.show('Login Was Successfully.', { classname: 'bg-success text-center text-white', delay: 5000 });
      localStorage.removeItem('toast');
    }    

     /**
     * Fetches the data
     */
      this.fetchData();

      this._ExaminationStatics('["--vz-primary", "--vz-success", "--vz-warning"]', null);
      this._ExaminationSummary('["--vz-success", "--vz-warning", "--vz-danger"]');
      this._studentChart('["--vz-primary", "--vz-warning", "--vz-info"]');

      this.getExamToppers()
  }
  /**
 * Fetches the data
 */
  private fetchData() {
    this.statData = statData;

    //get Calendar data
    this.markers = [
      { latitude: 19.612930725808756, longitude: 73.25839757224428 },
      { latitude: 19.53529511068319, longitude: 74.08786534568178 },
      { latitude: 19.234753835553626, longitude: 73.62094640036928 },
      { latitude: 18.489966671919543, longitude: 74.52028737817791 }
    ];
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
  
       /**
 * Stacked Column 100
 */
  private _ExaminationStatics(colors:any, stackType : any) {
    colors = this.getChartColorsArray(colors);
    this.examinationStatics = {
      series: [{
        name: "Pass",
        data: [2, 0, 3, 2, 0, 0],
        },
        {
            name: "Reappear",
            data: [2, 10, 1, 2, 0, 0],
        },
        {
            name: "Absent",
            data: [2, 0, 0, 0, 1, 0],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: stackType,
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
              "011",
              "642",
              "BHC",
              "Bsc_Arts_2020",
              "FDD",
              "PAT"
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


  ShowAsPercentage() {
    if(this.examinationStatisticsToggle) {
      this._ExaminationStatics('["--vz-primary", "--vz-success", "--vz-warning"]', null);
      
    } else {
      this._ExaminationStatics('["--vz-primary", "--vz-success", "--vz-warning"]', "100%");
    }
  }

    /**
 * Custom DataLabels Bar
 */
    private _ExaminationSummary(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.examinationSummary = {
      series: [{
        data: [400, 430, 448],
      }, ],
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: colors,
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val:any, opt:any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "Overall Pass",
          "Reappear",
          "Absent"
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };
  }

  getExamToppers() {
    this.examToppers = [
      {
        imgUrl : 'assets/images/user-illustarator-1.png',
        name : 'Param',
        marks : '900',
        marksHigh: '900'
      },
      {
        imgUrl : 'assets/images/user-illustarator-1.png',
        name : 'Parveen',
        marks : '700',
        marksHigh: '900'
      },
      {
        imgUrl : 'assets/images/user-illustarator-1.png',
        name : 'karan',
        marks : '180',
        marksHigh: '900'
      },
    ]
  }

     /**
 * Line & Column Charts
 */
  private _studentChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.studentChart = {
      series: [{
        name: 'Program Code',
        type: 'column',
        data: [5,7,9,4,5,3]
    }, {
        name: 'Boys',
        type: 'line',
        data: [1,4,3,1,3,2]
    }, {
        name: 'Girls',
        type: 'line',
        data: [4,3,6,3,2,1]
      }],
      chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar: {
              show: false,
          }
      },
      stroke: {
          width: [0, 5, 5],
          curve: 'smooth'
      },
      plotOptions: {
          bar: {
              columnWidth: '50%'
          }
      },
      fill: {
          opacity: [0.85, 0.75, 1],
          gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
          }
      },
      labels: ['001', '642', 'BHC', 'Bsc_Arts_2020','FDD', 'PAT'],
      markers: {
          size: 0
      },
      tooltip: {
          shared: true,
          intersect: false,
          y: {
              formatter: function (y:any) {
                  if (typeof y !== "undefined") {
                      return y.toFixed(0);
                  }
                  return y;

              }
          }
      },
      colors: colors
    };
  }

  /**
 *
 * @param position position where marker added
 */
    placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    console.log(lat, lng)
    this.markers.push({ latitude: lat, longitude: lng });
  }

}
