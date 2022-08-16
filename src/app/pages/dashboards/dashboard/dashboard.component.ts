import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast-service';
import moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  coursesCommencedStatics: any;
  orderFoodStatics: any;
  scheduleChartStatics: any;

  constructor(public toastService: ToastService, private router : Router) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('toast')){
      this.toastService.show('Login Was Successfully.', { classname: 'bg-success text-center text-white', delay: 5000 });
      localStorage.removeItem('toast');
    }    

    this._courseCommencedStatics('["--vz-primary", "--vz-success", "--vz-warning"]', null);
    this._orderFoodStatics('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._scheduleChartStatics('["--vz-primary", "--vz-danger", "--vz-success", "--vz-warning", "--vz-info"]');

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
  
  private _courseCommencedStatics(colors:any, stackType : any) {
    colors = this.getChartColorsArray(colors);
    this.coursesCommencedStatics = {
      series: [
        {
            name: "Courses",
            data: [2, 4, 7, 3, 5, 4],
        },
        {
            name: "Workshops",
            data: [4, 9, 4, 4, 2, 2],
        }
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
          categories: [ 'May','Jun','Jul', 'Aug','Sep','Oct'],
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

  private _orderFoodStatics(colors: any) {

    colors = this.getChartColorsArray(colors);
    this.orderFoodStatics = {
      series: [
        {
          name: "Requested",
          data: [15,10],
        },
        {
          name: "Approved",
          data: [26,4],
        },
        {
          name: "Planned",
          data: [20,15],
        },
        {
          name: "Rejected",
          data: [2,4],
        },
        {
          name: "Paid",
          data: [25,15],
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
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "Order Food - Course / Workshop",
        style: {
          fontWeight: 600,
        },
      },
      xaxis: {
        categories: ['Course', 'Workshop'],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
      colors: colors,
    };
  }

  private _scheduleChartStatics(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.scheduleChartStatics = {
      series: [
        {
          data: [
            {
              x: "Anesthesia",
              y: [
                new Date("2022-09-05").getTime(),
                new Date("2023-02-15").getTime(),
              ],
              fillColor: colors[0],
            },
            {
              x: "ENT",
              y: [
                new Date("2022-06-04").getTime(),
                new Date("2022-12-08").getTime(),
              ],
              fillColor: colors[1],
            },
            {
              x: "Emergency Medicine",
              y: [
                new Date("2022-01-07").getTime(),
                new Date("2022-09-10").getTime(),
              ],
              fillColor: colors[2],
            },
            {
              x: "General Surgery",
              y: [
                new Date("2022-06-08").getTime(),
                new Date("2023-03-12").getTime(),
              ],
              fillColor: colors[3],
            },
            {
              x: "Medical Microbiology",
              y: [
                new Date("2022-01-12").getTime(),
                new Date("2023-03-17").getTime(),
              ],
              fillColor: colors[4],
            },
          ],
        },
      ],
      chart: {
        height: 330,
        type: "rangeBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function(val : any, opts:any) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, "days");
          return label + ": " + diff + (diff > 1 ? " days" : " day");
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        show: true,
      },
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
