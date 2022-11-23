import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule, NgbDropdownModule, NgbNavModule
} from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CountToModule } from 'angular-count-to';
import { SimplebarAngularModule } from 'simplebar-angular';

// Load Icons
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

import { LandingTwoRoutingModule } from "./landing_two-routing.module";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LadingTwoFooterComponent } from './lading-two-footer/lading-two-footer.component';



@NgModule({
  declarations: [  
    IndexComponent, HomeComponent, LadingTwoFooterComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    ArchwizardModule,
    LandingTwoRoutingModule,
    NgxIntlTelInputModule,
    SharedModule,
    NgbNavModule,
    NgSelectModule,
    FormsModule,
    CountToModule,
    NgSelectModule,
    FlatpickrModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxDropzoneModule,
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModuleTwo { 
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
