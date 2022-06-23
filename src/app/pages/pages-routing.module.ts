import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';

const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "residency-block-diagram", component: ResidentBlockDiagramComponent },
    {
      path: 'graduate-medical-education', loadChildren: () => import('./graduate_medical_education/medical-education.module').then(m => m.AppsModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
