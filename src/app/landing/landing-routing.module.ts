import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ApplicationFormsComponent } from "./application-forms/application-forms.component";
import { ApplicationResidencyProgramComponent } from "./application-forms/application-residency-program/application-residency-program.component";

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
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      {
        path: "application-forms", canActivate: [AuthGuard],
        children: [
          { path: "", component: ApplicationFormsComponent },
          {
            path: "residency-program",
            component: ApplicationResidencyProgramComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
