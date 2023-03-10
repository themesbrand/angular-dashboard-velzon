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
import { CountToModule } from 'angular-count-to';

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
import { ApplicationForScholarshipComponent } from './application-forms/application-for-scholarship/application-for-scholarship.component';
import { ApplicationSimulationCoursesComponent } from './application-forms/application-simulation-courses/application-simulation-courses.component';
import { CourseRegistrationPageOneComponent } from './application-forms/application-simulation-courses/course-registration-page-one/course-registration-page-one.component';
import { CourseRegistrationPageTwoComponent } from './application-forms/application-simulation-courses/course-registration-page-two/course-registration-page-two.component';
import { CourseRegistrationSelectorPageOneComponent } from './application-forms/application-simulation-courses/course-registration-selector-page-one/course-registration-selector-page-one.component';
import { CourseRegistrationMyApplicationsComponent } from './application-forms/application-simulation-courses/course-registration-my-applications/course-registration-my-applications.component';
import { ResearchEthicalApprovalFormComponent } from './application-forms/research-ethical-approval-form/research-ethical-approval-form.component';
import { ResearchFundingOpportunitiesFormComponent } from './application-forms/research-funding-opportunities-form/research-funding-opportunities-form.component';
import { ResearchConsultationRequestFormComponent } from './application-forms/research-consultation-request-form/research-consultation-request-form.component';
import { ResearchDayRegistrationComponent } from './application-forms/research-day-registration/research-day-registration.component';
import { ApplicationForFellowshipComponent } from './application-forms/application-for-fellowship/application-for-fellowship.component';
import { FellowshipPageOneComponent } from './application-forms/application-for-fellowship/fellowship-page-one/fellowship-page-one.component';
import { FellowshipPageTwoComponent } from './application-forms/application-for-fellowship/fellowship-page-two/fellowship-page-two.component';
import { ResidencyProgramListComponent } from './application-forms/application-residency-program/residency-program-list/residency-program-list.component';
import { ResidencyProgramViewComponent } from './application-forms/application-residency-program/residency-program-view/residency-program-view.component';
import { FellowshipListViewComponent } from './application-forms/application-for-fellowship/fellowship-list-view/fellowship-list-view.component';
import { FellowshipApplicationViewComponent } from './application-forms/application-for-fellowship/fellowship-application-view/fellowship-application-view.component';
import { ScholarshipApplicationListComponent } from './application-forms/application-for-scholarship/scholarship-application-list/scholarship-application-list.component';
import { ScholarshipApplicationViewComponent } from './application-forms/application-for-scholarship/scholarship-application-view/scholarship-application-view.component';
import { MyApplicationsComponent } from './application-forms/my-applications/my-applications.component';
import { ApplicationForInnovationInitiativeComponent } from './application-forms/application-for-innovation-initiative/application-for-innovation-initiative.component';
import { ApplicationFormComponent } from './application-forms/application-for-innovation-initiative/application-form/application-form.component';
import { InnovationInitiativeListComponent } from './application-forms/application-for-innovation-initiative/innovation-initiative-list/innovation-initiative-list.component';
import { InnovationInitiativeViewComponent } from './application-forms/application-for-innovation-initiative/innovation-initiative-view/innovation-initiative-view.component';
import { ThreeDObjectRequestFormComponent } from './application-forms/three-d-object-request-form/three-d-object-request-form.component';
import { ThreeDObjectApplicationFormComponent } from './application-forms/three-d-object-request-form/three-d-object-application-form/three-d-object-application-form.component';
import { ThreeDObjectApplicationsListComponent } from './application-forms/three-d-object-request-form/three-d-object-applications-list/three-d-object-applications-list.component';
import { ThreeDObjectApplicationViewComponent } from './application-forms/three-d-object-request-form/three-d-object-application-view/three-d-object-application-view.component';
import { ViewCvSectionFormComponent } from './application-forms/view-cv-section-form/view-cv-section-form.component';
import { CvSectionFormComponent } from './application-forms/cv-section-form/cv-section-form.component';
import { FooterComponent } from './footer/footer.component';


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
    PageTwoComponent,
    ApplicationForScholarshipComponent,
    ApplicationSimulationCoursesComponent,
    CourseRegistrationPageOneComponent,
    CourseRegistrationPageTwoComponent,
    CourseRegistrationSelectorPageOneComponent,
    CourseRegistrationMyApplicationsComponent,
    ResearchEthicalApprovalFormComponent,
    ResearchFundingOpportunitiesFormComponent,
    ResearchConsultationRequestFormComponent,
    ResearchDayRegistrationComponent,
    ApplicationForFellowshipComponent,
    FellowshipPageOneComponent,
    FellowshipPageTwoComponent,
    ResidencyProgramListComponent,
    ResidencyProgramViewComponent,
    FellowshipListViewComponent,
    FellowshipApplicationViewComponent,
    ScholarshipApplicationListComponent,
    ScholarshipApplicationViewComponent,
    MyApplicationsComponent,
    ApplicationForInnovationInitiativeComponent,
    ApplicationFormComponent,
    InnovationInitiativeListComponent,
    InnovationInitiativeViewComponent,
    ThreeDObjectRequestFormComponent,
    ThreeDObjectApplicationFormComponent,
    ThreeDObjectApplicationsListComponent,
    ThreeDObjectApplicationViewComponent,
    ViewCvSectionFormComponent,
    CvSectionFormComponent,
    FooterComponent,
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
    CountToModule,
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
