import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { IndexComponent } from "./index/index.component";


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: "main", component: HomeComponent }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingTwoRoutingModule {}
