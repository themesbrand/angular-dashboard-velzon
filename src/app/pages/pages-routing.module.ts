import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { ResearchMentorEvaluationFormComponent } from './forms/research-mentor-evaluation-form/research-mentor-evaluation-form.component';
import { RotationEvaluationFormComponent } from './forms/rotation-evaluation-form/rotation-evaluation-form.component';
import { TrainerEvaluationFormComponent } from './forms/trainer-evaluation-form/trainer-evaluation-form.component';
import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';
import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping/rotation-page-resident-mapping.component';

const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "residency-block-diagram", component: ResidentBlockDiagramComponent },
    { path: "rotation-page-resident-mapping", component: RotationPageResidentMappingComponent },
    { path: "forms", children: [
      { path: "trainer-evaluation-form", component: TrainerEvaluationFormComponent },
      { path: "research-mentor-evaluation-form", component: ResearchMentorEvaluationFormComponent },
      { path: "rotation-evaluation-form", component: RotationEvaluationFormComponent },

    ] },
    
    {
      path: 'graduate-medical-education', loadChildren: () => import('./graduate_medical_education/medical-education.module').then(m => m.AppsModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
