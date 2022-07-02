import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data'
@Component({
  selector: 'app-resident-block-diagram',
  templateUrl: './resident-block-diagram.component.html',
  styleUrls: ['./resident-block-diagram.component.scss']
})
export class ResidentBlockDiagramComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;

  blockDates: any[] = [];
  rotationCodeForYears : any[] = [];
  rotationCodeActionsForYears : any[] = [];
  statusForYears : any[] = [];
  lowScoresForYears : any[] = [];
  
  rotationCodes : any[] = [];
  rotationCodeColors : any[] = [];

  actionFormsList : any[] = [];

  selectedUser: any

  tableYears : any[] = [
    {
      year:  '2019 - 2020', yearCode : 'R1'
    },
    {
      year:  '2020 - 2021', yearCode : 'R2'
    },
    {
      year:  '2021 - 2022', yearCode : 'R3'
    }


  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Residency Block Diagram", active : true }
    ];

    this.fetchDates();
  }

  fetchDates() {
    this.actionFormsList = this.listData.actionFormsList
    this.blockDates.push(this.listData.blockDatesYearOne)
    this.blockDates.push(this.listData.blockDatesYearTwo)
    this.blockDates.push(this.listData.blockDatesYearThree)

    this.rotationCodeForYears.push(this.listData.RotationCodesYearOne)
    this.rotationCodeForYears.push(this.listData.RotationCodesYearTwo)
    this.rotationCodeForYears.push(this.listData.RotationCodesYearThree)

    this.rotationCodeActionsForYears.push(this.listData.RotationCodeActionsYearOne)
    this.rotationCodeActionsForYears.push(this.listData.RotationCodeActionsYearTwo)
    this.rotationCodeActionsForYears.push(this.listData.RotationCodeActionsYearThree)

    console.log(this.rotationCodeActionsForYears)
    this.statusForYears.push(this.listData.statusOfYearOne)
    this.statusForYears.push(this.listData.statusOfYearTwo)
    this.statusForYears.push(this.listData.statusOfYearThree)

    this.lowScoresForYears.push(this.listData.lowScoreOfYearOne)
    this.lowScoresForYears.push(this.listData.lowScoreOfYearTwo)
    this.lowScoresForYears.push(this.listData.lowScoreOfYearThree)
    
    const temp = [...new Set(this.listData.RotationCodesYearOne)]

    this.rotationCodes = [...this.rotationCodes , ...temp]

    for(var i = 0; i < this.rotationCodes.length; i++) {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      const randomColor = '#' + ('000000' + color + '8f').slice(6);
      this.rotationCodeColors.push(randomColor)  
    }
    
  }

  getColorCode(rotationCode : any) {

    const result = this.rotationCodes.findIndex(x => {
      return x === rotationCode
    })
    
    return this.rotationCodeColors[result]

  }

  routeToForm(form : any, blockId : any, tableYearNumber : any) {
    console.log(form)
    switch (form) {
      case 'Trainer Evaluation Form' : {
        this.router.navigateByUrl('/forms/trainer-evaluation-form', { state: {
          block: this.blockDates[tableYearNumber][blockId],
          programName : this.listData.programName,
          traineeName : this.listData.traineeName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb
        }})
        break;
      }
      case 'Research Mentor Evaluation Form' : {
        this.router.navigateByUrl('/forms/research-mentor-evaluation-form', { state: {
          yearCode: this.tableYears[tableYearNumber].yearCode,
          programName : this.listData.programName,
          traineeName : this.listData.traineeName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb
        }})
        break;
      }
      case 'Rotation Evaluation Form' : {
        this.router.navigateByUrl('/forms/rotation-evaluation-form', { state: {
          block: this.blockDates[tableYearNumber][blockId],
          academicYear : this.tableYears[tableYearNumber].year,
          programName : this.listData.programName,
          traineeName : this.listData.traineeName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb
        }})
        break;
      }
      case 'ITAR' : {
        this.router.navigateByUrl('/forms/in-training-evaluation-form', { state: {
          traineeName : this.listData.traineeName,
          programName : this.listData.programName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb,
          block: this.blockDates[tableYearNumber][blockId]
        }})
        break;
      }
      case 'WPBA (On-Demand Evaluations)' : {
        this.router.navigateByUrl('/forms/presentation-evaluation-form', { state: {
          traineeName : this.listData.traineeName,
          programName : this.listData.programName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb,
          block: this.blockDates[tableYearNumber][blockId]
        }})
        break;
      }
      case 'Six monthly and Annual Evaluation' : {
        this.router.navigateByUrl('/forms/six-month-and-annual-evaluation-form', { state: {
          traineeName : this.listData.traineeName,
          programName : this.listData.programName,
          level: this.listData.traineeLevel,
          omsb: this.listData.omsb,
          block: this.blockDates[tableYearNumber][blockId]
        }})
        break;
      }
      default : {
        break;
      }
    }
  }

}
