import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ApplicationForScholarshipComponent } from "./application-forms/application-for-scholarship/application-for-scholarship.component";
import { ApplicationFormsComponent } from "./application-forms/application-forms.component";
import { ApplicationResidencyProgramComponent } from "./application-forms/application-residency-program/application-residency-program.component";
import { ApplicationSimulationCoursesComponent } from "./application-forms/application-simulation-courses/application-simulation-courses.component";
import { CourseRegistrationPageOneComponent } from "./application-forms/application-simulation-courses/course-registration-page-one/course-registration-page-one.component";
import { CourseRegistrationPageTwoComponent } from "./application-forms/application-simulation-courses/course-registration-page-two/course-registration-page-two.component";
import { CourseRegistrationSelectorPageOneComponent } from "./application-forms/application-simulation-courses/course-registration-selector-page-one/course-registration-selector-page-one.component";
import { ResearchConsultationRequestFormComponent } from "./application-forms/research-consultation-request-form/research-consultation-request-form.component";
import { ResearchDayRegistrationComponent } from "./application-forms/research-day-registration/research-day-registration.component";
import { ResearchEthicalApprovalFormComponent } from "./application-forms/research-ethical-approval-form/research-ethical-approval-form.component";
import { ResearchFundingOpportunitiesFormComponent } from "./application-forms/research-funding-opportunities-form/research-funding-opportunities-form.component";

import { HomeComponent } from "./home/home.component";

// Component Pages
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: "main", component: HomeComponent },
      { path: "registration", component: RegistrationComponent, canActivate: [AuthGuard] },
      { path: "login", component: LoginComponent },
      {
        path: "application-forms", canActivate: [AuthGuard],
        children: [
          { path: "", component: ApplicationFormsComponent },
          {
            path: "residency-program",
            component: ApplicationResidencyProgramComponent,
          },
          {
            path: "scholarship-program-form",
            component: ApplicationForScholarshipComponent,
          },
          {
            path: "simulation-course-form",
            children:[
              {
                path: "",
                component: ApplicationSimulationCoursesComponent,
              },
              {
                path: "simulation-registration-page-one",
                component: CourseRegistrationPageOneComponent,
              },
              {
                path: "simulation-registration-page-two",
                component: CourseRegistrationPageTwoComponent,
              },
              {
                path: "simulation-registration-select-page-one",
                component: CourseRegistrationSelectorPageOneComponent,
              }
            ],
          },
          {
            path: "research-ethical-approval-form",
            component: ResearchEthicalApprovalFormComponent,
          },
          {
            path: "research-funding-opportunities-form",
            component: ResearchFundingOpportunitiesFormComponent,
          },
          {
            path: "research-consultation-request-form",
            component: ResearchConsultationRequestFormComponent,
          },
        ],
      },
      { path: "research-day-registration", component: ResearchDayRegistrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
