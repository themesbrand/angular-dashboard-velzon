import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import {
  NgbCarouselModule, NgbDropdownModule, NgbNavModule
} from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

// Load Icons
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

import { LandingRoutingModule } from "./landing-routing.module";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ApplicationFormsComponent } from './application-forms/application-forms.component';
import { ApplicationResidencyProgramComponent } from './application-forms/application-residency-program/application-residency-program.component';
import { PageThreeComponent } from './application-forms/application-residency-program/page-three/page-three.component';
import { PageOneComponent } from './application-forms/application-residency-program/page-one/page-one.component';
import { PageTwoComponent } from './application-forms/application-residency-program/page-two/page-two.component';



@NgModule({
  declarations: [
    IndexComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ApplicationFormsComponent,
    ApplicationResidencyProgramComponent,
    PageThreeComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    ArchwizardModule,
    LandingRoutingModule,
    NgxIntlTelInputModule,
    SharedModule,
    NgbNavModule,
    NgSelectModule,
    FormsModule,
    NgSelectModule,
    FlatpickrModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxDropzoneModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { 
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
