import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';

// Auth
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'home_2', loadChildren: () => import('./landing_two/landing_two.module').then(m => m.LandingModuleTwo)},
  { path: 'home_3', loadChildren: () => import('./landing_three/landing_three.module').then(m => m.LandingModuleThree)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
