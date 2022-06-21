import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
