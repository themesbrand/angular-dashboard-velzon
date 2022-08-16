import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast-service';

@Component({
  selector: 'app-dashboard-trainee',
  templateUrl: './dashboard-trainee.component.html',
  styleUrls: ['./dashboard-trainee.component.scss']
})
export class DashboardTraineeComponent implements OnInit {

  arrayData = [
    {
      y: 2.2,
      quarters: [
        {
          x: "Q1",
          y: 1.2
        },
        {
          x: "Q2",
          y: 0.5
        },
        {
          x: "Q3",
          y: 0.25
        },
        {
          x: "Q4",
          y: 0.25
        }
      ]
    },
    {
      y: 1.8,
      quarters: [
        {
          x: "Q1",
          y: 0.6
        },
        {
          x: "Q2",
          y: 0.4
        },
        {
          x: "Q3",
          y: 0.2
        },
        {
          x: "Q4",
          y: 0.6
        }
      ]
    },
    {
      y: 2.4,
      quarters: [
        {
          x: "Q1",
          y: 0.4
        },
        {
          x: "Q2",
          y: 0.8
        },
        {
          x: "Q3",
          y: 0.25
        },
        {
          x: "Q4",
          y: 0.75
        }
      ]
    },
    {
      y: 1.7,
      quarters: [
        {
          x: "Q1",
          y: 0.6
        },
        {
          x: "Q2",
          y: 0.5
        },
        {
          x: "Q3",
          y: 0.3
        },
        {
          x: "Q4",
          y: 0.3
        }
      ]
    },
    {
      y: 2.2,
      quarters: [
        {
          x: "Q1",
          y: 0.3
        },
        {
          x: "Q2",
          y: 0.5
        },
        {
          x: "Q3",
          y: 0.4
        },
        {
          x: "Q4",
          y: 1
        }
      ]
    },
    {
      y: 2.1,
      quarters: [
        {
          x: "Q1",
          y: 0.35
        },
        {
          x: "Q2",
          y: 0.65
        },
        {
          x: "Q3",
          y: 0.5
        },
        {
          x: "Q4",
          y: 0.6
        }
      ]
    }
  ];

  dynamicLoadedChart: any;
  dynamicQuarterLoadedChart:any;

  constructor(public toastService: ToastService,
    private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('toast')){
      this.toastService.show('Login Was Successfully.', { classname: 'bg-success text-center text-white', delay: 5000 });
      localStorage.removeItem('toast');
    }    
    
    this._dynamicQuarterLoadedChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-dark", "--vz-info"]');
    this._dynamicLoadedChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-dark", "--vz-info"]');
    
  }
  
  private _dynamicLoadedChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    var dataSet = this.shuffleArray(this.arrayData);
    this.dynamicLoadedChart = {
      series: [{
        name: "Result",
        data: [
          {
            x: "ENT",
            y: dataSet[0].y,
            color: colors[0],
            quarters: dataSet[0].quarters
          },
          {
            x: "Anastasia",
            y: dataSet[1].y,
            color: colors[1],
            quarters: dataSet[1].quarters
          },
          {
            x: "Medical Microbiology",
            y: dataSet[2].y,
            color: colors[2],
            quarters: dataSet[2].quarters
          },
          {
            x: "Pediatrics",
            y: dataSet[3].y,
            color: colors[3],
            quarters: dataSet[3].quarters
          },
          {
            x: "Histopathology",
            y: dataSet[4].y,
            color: colors[4],
            quarters: dataSet[4].quarters
          },
          {
            x: "Emergency Medicine",
            y: dataSet[5].y,
            color: colors[5],
            quarters: dataSet[5].quarters
          }
        ],
      }, ],
      chart: {
        id: "barYear",
        height: 400,
        width: "100%",
        type: "bar",
        events: {
          dataPointSelection: (e:any, chart:any, opts:any) => {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");
  
            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl!.classList.contains("active")) {
                this.updateQuarterChart(chart, "barQuarter");
              } else {
                yearChartEl!.classList.add("chart-quarter-activated");
                quarterChartEl!.classList.add("active");
                this.updateQuarterChart(chart, "barQuarter");
              }
            } else {
              this.updateQuarterChart(chart, "barQuarter");
            }
  
            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl!.classList.remove("chart-quarter-activated");
              quarterChartEl!.classList.remove("active");
            }
          },
          updated: (chart:any) => {
            this.updateQuarterChart(chart, "barQuarter");
          }
        }
      },
      plotOptions: {
        bar: {
            distributed: true,
            horizontal: true,
            barHeight: "75%",
            dataLabels: {
                position: "bottom",
            },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
            colors: ["#fff"],
        },
        formatter: function (val:any, opt:any) {
            return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
            enabled: true,
        },
      },
      colors: colors,
      states: {
        normal: {
            filter: {
                type: "desaturate",
            },
        },
        active: {
            allowMultipleDataPointsSelection: true,
            filter: {
                type: "darken",
                value: 1,
            },
        },
      },
      title: {
        text: "Yearly Results",
        offsetX: 15,
      },
      subtitle: {
          text: "(Click on bar to see details)",
          offsetX: 15,
      },
      yaxis: {
          labels: {
              show: false,
          },
      },
      legend: {
          show: false
      }
    };
  }
  
  private _dynamicQuarterLoadedChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.dynamicQuarterLoadedChart = {
      series: [
        {
          name: "quarter",
          data: []
        }
      ],
      chart: {
        id: "barQuarter",
        height: 400,
        width: "100%",
        type: "bar",
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          horizontal: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "Quarterly Results",
        offsetX: 10
      },
      tooltip: {
        x: {
          formatter: function (val:any, opts:any) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          }
        }
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

  private shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  private updateQuarterChart(sourceChart: any, destChartIDToUpdate: any) {
    var series = [];
    var seriesIndex = 0;
    var colors = [];
  
    if (sourceChart.w.globals.selectedDataPoints[0]) {
      var selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
        var selectedIndex = selectedPoints[seriesIndex][i];
        var yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters
        });
        colors.push(yearSeries.data[selectedIndex].color);
      }
  
      if (series.length === 0)
        series = [
          {
            data: []
          }
        ];
  
      return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
        series: series,
        colors: colors,
        fill: {
          colors: colors
        }
      });
    }
  }
  
  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
