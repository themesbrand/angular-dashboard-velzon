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
      case 'Review & Confirm rotation curriculum' : {
        this.router.navigateByUrl('/forms/review-and-confirm-rotation-curriculum', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'Trainer Evaluation Form' : {
        this.router.navigateByUrl('/forms/trainer-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'Research Mentor Evaluation Form' : {
        this.router.navigateByUrl('/forms/research-mentor-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'Rotation Evaluation Form' : {
        this.router.navigateByUrl('/forms/rotation-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'ITAR' : {
        this.router.navigateByUrl('/forms/in-training-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'WPBA (On-Demand Evaluations)' : {
        this.router.navigateByUrl('/forms/presentation-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      case 'Six monthly and Annual Evaluation' : {
        this.router.navigateByUrl('/forms/six-month-and-annual-evaluation-form', { state: {
          subjectName : this.listData.subjectName,
          status : this.listData.status,
          employer: this.listData.employer,
          program: this.listData.program,
          rotation: this.listData.rotation,
          evaluationDates: this.blockDates[tableYearNumber][blockId],
          evaluatorName: this.listData.evaluatorName,
          evaluatorStatus: this.listData.evaluatorStatus,
          evaluatorEmployer: this.listData.evaluatorEmployer,
          evaluatorProgram: this.listData.evaluatorProgram,
        }})
        break;
      }
      default : {
        break;
      }
    }
  }

}
