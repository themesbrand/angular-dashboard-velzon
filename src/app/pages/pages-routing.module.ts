import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { LogHoursComponent } from './duty-hours/log-hours/log-hours.component';
import { ViewHoursComponent } from './duty-hours/view-hours/view-hours.component';
import { CreateProgramComponent } from './curriculum/create-program/create-program.component';
import { EcSetupComponent } from './curriculum/ec-setup.component';
import { AllocateProcedureComponent } from './curriculum/view-program/procedure/allocate-procedure/allocate-procedure.component';
import { ProcedureComponent } from './curriculum/view-program/procedure/procedure.component';
import { AddRotationComponent } from './curriculum/view-program/rotation/add-rotation/add-rotation.component';
import { PreviewRotationComponent } from './curriculum/view-program/rotation/preview-rotation/preview-rotation.component';
import { RotationComponent } from './curriculum/view-program/rotation/rotation.component';
import { ViewProgramComponent } from './curriculum/view-program/view-program.component';
import { InTrainingEvaluationReportComponent } from './forms/in-trainning-evaluation-report/in-trainning-evaluation-report.component';
import { PresentationEvaluationFormComponent } from './forms/presentation-evaluation-form/presentation-evaluation-form.component';
import { ResearchMentorEvaluationFormComponent } from './forms/research-mentor-evaluation-form/research-mentor-evaluation-form.component';
import { RotationEvaluationFormComponent } from './forms/rotation-evaluation-form/rotation-evaluation-form.component';
import { SixMonthAndAnnualEvaluationFormComponent } from './forms/six-month-and-annual-evaluation-form/six-month-and-annual-evaluation-form.component';
import { TrainerEvaluationFormComponent } from './forms/trainer-evaluation-form/trainer-evaluation-form.component';
import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';
import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping/rotation-page-resident-mapping.component';
import { LogProcedureComponent } from './log-procedure/log-procedure.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveRequestFormComponent } from './leave-application/leave-request-form/leave-request-form.component';
import { LeaveReturnApplicationComponent } from './leave-application/leave-return-application/leave-return-application.component';

const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "residency-block-diagram", component: ResidentBlockDiagramComponent },
    { path: "rotation-page-resident-mapping", component: RotationPageResidentMappingComponent },
    { path: "forms", children: [
      { path: "trainer-evaluation-form", component: TrainerEvaluationFormComponent },
      { path: "research-mentor-evaluation-form", component: ResearchMentorEvaluationFormComponent },
      { path: "rotation-evaluation-form", component: RotationEvaluationFormComponent },
      { path: "in-training-evaluation-form", component: InTrainingEvaluationReportComponent },
      { path: "presentation-evaluation-form", component: PresentationEvaluationFormComponent },
      { path: "six-month-and-annual-evaluation-form", component: SixMonthAndAnnualEvaluationFormComponent },
      
    ] },
    { path: "curriculum", children: [
        { path: "", component: EcSetupComponent },
        { path: "create-program", component: CreateProgramComponent },
        { path: "view-program", component: ViewProgramComponent },
        { path: "add-rotation", component: AddRotationComponent },
        { path: "view-rotation", component: PreviewRotationComponent },
        { path: "allocate-procedure", component: AllocateProcedureComponent },
      ] 
    },
    {
      path: 'graduate-medical-education', loadChildren: () => import('./graduate_medical_education/medical-education.module').then(m => m.AppsModule)
    },
    { path: "duty-hours", children: [
        { path: "grid", component: LogHoursComponent },
        { path: "view", component: ViewHoursComponent },
      ] 
    },
    { path: "leave-application", children: [
        { path: "", component: LeaveApplicationComponent },
        { path: "leave-request", component: LeaveRequestFormComponent },
        { path: "leave-return-application", component: LeaveReturnApplicationComponent },
      ] 
    },
    { path: "log-procedures", component: LogProcedureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
