import { Component, OnInit } from '@angular/core';

import { data } from './data'

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {
  listData = data;

  selectedCommittee : {
    name : any, data: any, type : any
  } = {
    name: undefined,
    data: undefined,
    type: undefined
  };

  constructor() { }

  ngOnInit(): void {
    this.onSelectCommittee('Education Committee')
  }

  onSelectCommittee(committee : any) {


    this.selectedCommittee.name = committee;
    this.selectedCommittee.type = undefined;

    switch (committee) {
      case 'Education Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.educationCommittee
        break;
      }
      case 'Curriculum Sub Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.curriculumSubcommittee
        window.scroll({ top: 400, left: 0, behavior: 'smooth' });
        break;
      }
      case 'Program Evaluation Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.programEvaluationCommittee
        window.scroll({ top: 440, left: 0, behavior: 'smooth' });

        break;
      }
      case 'Clinical Competency Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.clinicalCompetencyCommittee
        window.scroll({ top: 500, left: 0, behavior: 'smooth' });

        break;
      }
      case 'Research Sub Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.researchSubCommittee
        window.scroll({ top: 550, left: 0, behavior: 'smooth' });

        break;
      }
      case 'Medical Simulation Sub Committee' : {
        this.selectedCommittee.data = this.listData.teamObject.medicalSimulationSubCommittee
        window.scroll({ top: 595, left: 0, behavior: 'smooth' });

        break;
      }
      case 'Program Administrators' : {
        this.selectedCommittee.data = this.listData.teamObject.programAdministrators;
        this.selectedCommittee.type = 'MEMBERS_ONLY'
        window.scroll({ top: 640, left: 0, behavior: 'smooth' });
        break;
      }
      case 'Career Adviser' : {
        this.selectedCommittee.data = this.listData.teamObject.careerAdviser;
        this.selectedCommittee.type = 'MEMBERS_ONLY'
        window.scroll({ top: 640, left: 0, behavior: 'smooth' });
        break;
      }
      case 'Quality Improvement Supervisor' : {
        this.selectedCommittee.data = this.listData.teamObject.qualityImprovementSupervisor;
        this.selectedCommittee.type = 'MEMBERS_ONLY'
        window.scroll({ top: 640, left: 0, behavior: 'smooth' });
        break;
      }
      default : {
        break;
      }
    }
    
  }

}
