import { Component, Input, OnInit } from '@angular/core';

import {data} from './data'

@Component({
  selector: 'app-portfolio-form-view',
  templateUrl: './portfolio-form-view.component.html',
  styleUrls: ['./portfolio-form-view.component.scss']
})
export class PortfolioFormViewComponent implements OnInit {

  listData = data


  @Input() onEditMode = false;
  @Input() isPortfolioHidden = false;

  progressSummary : any[] = ['Overall Progress', 'Patient Care',	'Medical Knowledge',	'Systems Based Practice',	'Practice Based Learning and Improvement',	'Professionalism',	'Interpersonal'
]

competencyByRotationChart_1: any;
competencyByRotationChart_2: any;
competencyByRotationChart_3: any;
competencyByRotationChart_4: any;
competencyByRotationChart_5: any;
competencyByRotationChart_6: any;

  @Input() requestData: any = null;

  rotationRequirementsChart:any;
  competencyTrainingYearChart: any;

  constructor() { }

  ngOnInit(): void {
    this._rotationRequirementsChart('["--vz-success", "--vz-primary"]');
    this._competencyTrainingYearChart('["--vz-danger", "--vz-primary", "--vz-success", "--vz-warning"]');
    this._competencyByRotationChart('["--vz-primary"]');
  }

  private _rotationRequirementsChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.rotationRequirementsChart = {
      series: [{
        name: "Actual",
        data: [{
            x: "Anesthesia for General Surgery",
            y: 2.5,
            goals: [{
              name: "Expected",
              value: 3,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Anesthesia for General Surgery - Ambulatory Cases",
            y: 1,
            goals: [{
              name: "Expected",
              value: 3.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Anesthesia for General Surgery – Urology Surgery",
            y: 2,
            goals: [{
              name: "Expected",
              value: 3.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Anesthesia for General Surgery – Vascular Surgery",
            y: 2,
            goals: [{
              name: "Expected",
              value: 3.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Anesthesia for ENT/Ophthalmology/ Oral & Maxillofacial Surgery",
            y: 1,
            goals: [{
              name: "Expected",
              value: 3.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Obstetrics and Gynecology Anesthesia",
            y: 2.5,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Regional Anesthesia",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Anesthesia for Orthopedic Surgery",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
          {
            x: "Pre-Anesthesia Clinic (PAC)",
            y: 2,
            goals: [{
              name: "Expected",
              value: 2.5,
              strokeWidth: 5,
              strokeColor: "#564ab1",
            }, ],
          },
        ],
        }, ],
        chart: {
          height: 450,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: colors,
        dataLabels: {
            formatter: function (val:any) {
                return val.toString();
            }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#0AB39C", "#2d0689"],
          },
        },
    };
  }

  private _competencyTrainingYearChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.competencyTrainingYearChart = {
      series: [{
        name: "R1",
        data: [3.27,3.2,3.5,3.22, 3.15, 3.2],
      },
      {
          name: "R2",
          data: [3.87,3.0,3.25,3.42, 3.85, 3.8],
      },
      {
          name: "R3",
          data: [3.17,3.02,3.5,3.82, 3.40, 3.2],
      },
      {
          name: "R4",
          data: [3.17,3.98,3.15,3.52, 3.65, 3.2],
      },
      ],
      chart: {
        height: 200,
        type: "bar",
        toolbar: {
            show: false,
        },
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: "45%",
          },
      },
      dataLabels: {
          enabled: false,
      },
      stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
      },
      colors: colors,
      xaxis: {
          categories: [
              "Patient Care",
              "Medical Knowledge",
              "Systems Based",
              "Practice Based",
              "Professionalism",
              "Interpersonal"
          ],
      },
      // yaxis: {
      //     title: {
      //         text: "$ (thousands)",
      //     },
      // },
      grid: {
          borderColor: "#f1f1f1",
      },
      fill: {
          opacity: 1,
      },
      tooltip: {
          y: {
              formatter: function (val:any) {
                  return  val ;
              },
          },
      },
    };
    }

  private _competencyByRotationChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.competencyByRotationChart_1  = {
      series: [{
        data: [3.45, 3.00, 3.00, 3.15, 3.15, 3.00]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
    this.competencyByRotationChart_2  = {
      series: [{
        data: [3.00, 3.15, 3.15, 3.15, 3.15, 3.45]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
    this.competencyByRotationChart_3  = {
      series: [{
        data: [3.00, 3.25, 3.45, 3.05, 3.25, 3.25]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
    this.competencyByRotationChart_4  = {
      series: [{
        data: [3.00, 3.00, 3.80, 3.20, 3.40, 3.00]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
    this.competencyByRotationChart_5  = {
      series: [{
        data: [3.00, 3.20, 3.40, 3.00, 3.40, 3.00]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
    this.competencyByRotationChart_6  = {
      series: [{
        data: [3.80, 3.00, 3.20, 3.20, 3.60, 3.20]
      }],
      chart: {
        height: 150,
        width: 120,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: colors,
    };
  }
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

}
