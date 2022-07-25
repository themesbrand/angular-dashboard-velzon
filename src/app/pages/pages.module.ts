import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbNavModule,
  NgbProgressbarModule,
  NgbToastModule,
  NgbAccordionModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WidgetModule } from '../shared/widget/widget.module';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/toasts-container.component';

import { TooltipModule } from 'ng2-tooltip-directive';

//Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchwizardModule } from 'angular-archwizard';

import { GridJsAngularModule } from 'gridjs-angular';

import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';
import { ScrollableDirective } from '../directive/scrollable.directive';
import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping/rotation-page-resident-mapping.component';
import { ByTraineeComponent } from './rotation-page-resident-mapping/by-trainee/by-trainee.component';
import { ByRotationComponent } from './rotation-page-resident-mapping/by-rotation/by-rotation.component';
import { ByFacultyComponent } from './rotation-page-resident-mapping/by-faculty/by-faculty.component';
import { TrainerEvaluationFormComponent } from './forms/trainer-evaluation-form/trainer-evaluation-form.component';
import { ResearchMentorEvaluationFormComponent } from './forms/research-mentor-evaluation-form/research-mentor-evaluation-form.component';
import { RotationEvaluationFormComponent } from './forms/rotation-evaluation-form/rotation-evaluation-form.component';
import { InTrainingEvaluationReportComponent } from './forms/in-trainning-evaluation-report/in-trainning-evaluation-report.component';
import { PresentationEvaluationFormComponent } from './forms/presentation-evaluation-form/presentation-evaluation-form.component';
import { SixMonthAndAnnualEvaluationFormComponent } from './forms/six-month-and-annual-evaluation-form/six-month-and-annual-evaluation-form.component';
import { CreateProgramComponent } from './curriculum/create-program/create-program.component';
import { EcSetupComponent } from './curriculum/ec-setup.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ViewProgramComponent } from './curriculum/view-program/view-program.component';
import { OverviewComponent } from './curriculum/view-program/overview/overview.component';
import { CommitteeComponent } from './curriculum/view-program/committee/committee.component';
import { ObjectivesComponent } from './curriculum/view-program/objectives/objectives.component';
import { RequirementsComponent } from './curriculum/view-program/requirements/requirements.component';
import { RotationComponent } from './curriculum/view-program/rotation/rotation.component';
import { AddRotationComponent } from './curriculum/view-program/rotation/add-rotation/add-rotation.component';
import { PreviewRotationComponent } from './curriculum/view-program/rotation/preview-rotation/preview-rotation.component';
import { ProcedureComponent } from './curriculum/view-program/procedure/procedure.component';
import { AllocateProcedureComponent } from './curriculum/view-program/procedure/allocate-procedure/allocate-procedure.component';
import { TrainingSitesComponent } from './curriculum/view-program/training-sites/training-sites.component';
import { SyllabusComponent } from './curriculum/view-program/syllabus/syllabus.component';
import { AssessmentComponent } from './curriculum/view-program/assessment/assessment.component';
import { ToolsForEvaluationComponent } from './curriculum/view-program/tools-for-evaluation/tools-for-evaluation.component';
import { DailyAssignmentsComponent } from './curriculum/view-program/daily-assignments/daily-assignments.component';
import { LogHoursComponent } from './duty-hours/log-hours/log-hours.component';
import { ViewHoursComponent } from './duty-hours/view-hours/view-hours.component';
import { LogProcedureComponent } from './log-procedure/log-procedure.component';
import { AddProcedureComponent } from './log-procedure/add-procedure/add-procedure.component';
import { ViewProcedureComponent } from './log-procedure/view-procedure/view-procedure.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveRequestFormComponent } from './leave-application/leave-request-form/leave-request-form.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { LeaveApplicationViewComponent } from './leave-application/leave-application-view/leave-application-view.component';
import { LeaveReturnApplicationComponent } from './leave-application/leave-return-application/leave-return-application.component';
import { SelfReferralRequestComponent } from './counselling-requests/self-referral-request/self-referral-request.component';
import { SelfReferralRequestFormComponent } from './counselling-requests/self-referral-request/self-referral-request-form/self-referral-request-form.component';
import { ProgramReferralRequestComponent } from './counselling-requests/program-referral-request/program-referral-request.component';
import { ProgramReferralRequestFormComponent } from './counselling-requests/program-referral-request/program-referral-request-form/program-referral-request-form.component';
import { TraineePerformanceEvauationFormComponent } from './counselling-requests/program-referral-request/trainee-performance-evauation-form/trainee-performance-evauation-form.component';
import { MmrDashboardComponent } from './counselling-requests/mmr-dashboard/mmr-dashboard.component';
import { ConfidentialityFormComponent } from './counselling-requests/self-referral-request/confidentiality-form/confidentiality-form.component';
import { AppointmentsCalendarComponent } from './counselling-requests/mmr-dashboard/appointments-calendar/appointments-calendar.component';
import { MyAppointmentsComponent } from './counselling-requests/my-appointments/my-appointments.component';
import { AssessmentFormComponent } from './counselling-requests/my-appointments/assessment-form/assessment-form.component';
import { AssessmentFormViewComponent } from './counselling-requests/my-appointments/assessment-form-view/assessment-form-view.component';
import { ConfidentialityFormTwoComponent } from './counselling-requests/self-referral-request/confidentiality-form-two/confidentiality-form-two.component';
import { ScholarshipSectionComponent } from './scholarship-section/scholarship-section.component';
import { CreateProgramTypeComponent } from './scholarship-section/create-program-type/create-program-type.component';
import { CreateScholarshipProgramComponent } from './scholarship-section/create-program/create-program.component';
import { ViewScholarshipApplicationsComponent } from './scholarship-section/view-scholarship-applications/view-scholarship-applications.component';
import { ScholarshipApplicationFormComponent } from './scholarship-section/view-scholarship-applications/scholarship-application-form/scholarship-application-form.component';
import { DashboardsEmployerComponent } from './employer-view/dashboards-employer/dashboards-employer.component';
import { ScholarshipApplicationViewComponent } from './employer-view/scholarship-application-view/scholarship-application-view.component';
import { DashboardInterviewerComponent } from './interviewer-view/dashboard-interviewer/dashboard-interviewer.component';
import { ShowApplicationFormComponent } from './interviewer-view/show-application-form/show-application-form.component';
import { InterviewEvaluationFormComponent } from './interviewer-view/interview-evaluation-form/interview-evaluation-form.component';
import { InterviewResultComponent } from './interviewer-view/interview-result/interview-result.component';
import { ApplicantApplicationFormComponent } from './applicant-view/applicant-application-form/applicant-application-form.component';
import { ViewAcceptanceLetterComponent } from './scholarship-section/view-scholarship-applications/view-acceptance-letter/view-acceptance-letter.component';
import { FinanceDashboardComponent } from './finance-view/finance-dashboard/finance-dashboard.component';
import { FinanceScholarshipApplicationViewComponent } from './finance-view/finance-scholarship-application-view/finance-scholarship-application-view.component';
import { FinanceViewAcceptanceLetterComponent } from './finance-view/finance-view-acceptance-letter/finance-view-acceptance-letter.component';
import { DashboardInternationalTraineeComponent } from './international-trainees-view/dashboard-international-trainee/dashboard-international-trainee.component';
import { ApplicationInternationalTraineeComponent } from './international-trainees-view/application-international-trainee/application-international-trainee.component';
import { InternationalTraineeApplicationsViewComponent } from './scholarship-section/international-trainee-applications-view/international-trainee-applications-view.component';
import { DefineMeetingTypesComponent } from './meeting-management/configuration/define-meeting-types/define-meeting-types.component';
import { MeetingInviteComponent } from './meeting-management/meeting/meeting-invite/meeting-invite.component';
import { MeetingTableViewComponent } from './meeting-management/meeting/meeting-table-view/meeting-view.component';
import { MeetingViewComponent } from './meeting-management/meeting/meeting-view/meeting-view.component';
import { MinutesOfMeetingComponent } from './meeting-management/meeting/meeting-view/minutes-of-meeting/minutes-of-meeting.component';
import { MarkAttendanceMeetingComponent } from './meeting-management/meeting/meeting-view/mark-attendance-meeting/mark-attendance-meeting.component';
import { ActionItemsSummaryComponent } from './meeting-management/meeting/meeting-view/action-items-summary/action-items-summary.component';
import { AgendaRequestComponent } from './meeting-management/agenda-request/agenda-request.component';
import { MyMeetingsComponent } from './meeting-management/my-meetings/my-meetings.component';
import { FinanceEResourceRequestComponent } from './finance-view/finance-medical-library/finance-e-resource-request/finance-e-resource-request.component';
import { EResourceRequestComponent } from './medical-library/e-resource-request/e-resource-request.component';
import { RenewalComponent } from './medical-library/renewal/renewal.component';
import { ExpiryEResourcesComponent } from './medical-library/renewal/expiry-e-resources/expiry-e-resources.component';
import { EResourceRenewalRequestComponent } from './medical-library/renewal/e-resource-renewal-request/e-resource-renewal-request.component';
import { PurchaseMedicalBooksComponent } from './medical-library/purchase-medical-books/purchase-medical-books.component';
import { ViewMedicalBookRequestsComponent } from './medical-library/purchase-medical-books/view-medical-book-requests/view-medical-book-requests.component';
import { MedicalBookEstimatesComponent } from './medical-library/purchase-medical-books/medical-book-estimates/medical-book-estimates.component';
import { FinanceRenewalComponent } from './finance-view/finance-medical-library/finance-renewal/finance-renewal.component';
import { FinanceExpiryEResourcesComponent } from './finance-view/finance-medical-library/finance-renewal/finance-expiry-e-resources/finance-expiry-e-resources.component';

export function createTranslateLoader(http: HttpClient): any {
return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin 
]);


@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    ResidentBlockDiagramComponent,
    ScrollableDirective,
    RotationPageResidentMappingComponent,
    ByTraineeComponent,
    ByRotationComponent,
    ByFacultyComponent,
    TrainerEvaluationFormComponent,
    ResearchMentorEvaluationFormComponent,
    RotationEvaluationFormComponent,
    InTrainingEvaluationReportComponent,
    PresentationEvaluationFormComponent,
    SixMonthAndAnnualEvaluationFormComponent,
    CreateProgramComponent,
    EcSetupComponent,
    ViewProgramComponent,
    OverviewComponent,
    CommitteeComponent,
    ObjectivesComponent,
    RequirementsComponent,
    RotationComponent,
    AddRotationComponent,
    PreviewRotationComponent,
    ProcedureComponent,
    AllocateProcedureComponent,
    TrainingSitesComponent,
    SyllabusComponent,
    AssessmentComponent,
    ToolsForEvaluationComponent,
    DailyAssignmentsComponent,
    LogHoursComponent,
    ViewHoursComponent,
    LogProcedureComponent,
    AddProcedureComponent,
    ViewProcedureComponent,
    LeaveApplicationComponent,
    LeaveRequestFormComponent,
    LeaveApplicationViewComponent,
    LeaveReturnApplicationComponent,
    SelfReferralRequestComponent,
    SelfReferralRequestFormComponent,
    ProgramReferralRequestComponent,
    ProgramReferralRequestFormComponent,
    TraineePerformanceEvauationFormComponent,
    MmrDashboardComponent,
    ConfidentialityFormComponent,
    AppointmentsCalendarComponent,
    MyAppointmentsComponent,
    AssessmentFormComponent,
    AssessmentFormViewComponent,
    ConfidentialityFormTwoComponent,
    ScholarshipSectionComponent,
    CreateProgramTypeComponent,
    CreateScholarshipProgramComponent,
    ViewScholarshipApplicationsComponent,
    ScholarshipApplicationFormComponent,
    DashboardsEmployerComponent,
    ScholarshipApplicationViewComponent,
    DashboardInterviewerComponent,
    ShowApplicationFormComponent,
    InterviewEvaluationFormComponent,
    InterviewResultComponent,
    ApplicantApplicationFormComponent,
    ViewAcceptanceLetterComponent,
    FinanceDashboardComponent,
    FinanceScholarshipApplicationViewComponent,
    FinanceViewAcceptanceLetterComponent,
    DashboardInternationalTraineeComponent,
    ApplicationInternationalTraineeComponent,
    InternationalTraineeApplicationsViewComponent,
    DefineMeetingTypesComponent,
    MeetingInviteComponent,
    MeetingTableViewComponent,
    MeetingViewComponent,
    MinutesOfMeetingComponent,
    MarkAttendanceMeetingComponent,
    ActionItemsSummaryComponent,
    AgendaRequestComponent,
    MyMeetingsComponent,
    EResourceRequestComponent,
    FinanceEResourceRequestComponent,
    RenewalComponent,
    ExpiryEResourcesComponent,
    EResourceRenewalRequestComponent,
    PurchaseMedicalBooksComponent,
    ViewMedicalBookRequestsComponent,
    MedicalBookEstimatesComponent,
    FinanceRenewalComponent,
    FinanceExpiryEResourcesComponent
  ],
  imports: [
    CommonModule,
    NgbToastModule,
    FlatpickrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FullCalendarModule,
    CountToModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    TooltipModule,
    NgbPaginationModule,
    NgxIntlTelInputModule,
    SimplebarAngularModule,
    GridJsAngularModule,
    PagesRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    SharedModule,
    FormsModule,
    WidgetModule,
    NgbAlertModule,
    NgbNavModule,
    NgbAccordionModule,
    NgxDropzoneModule,
    NgSelectModule,
    NgbProgressbarModule,
    SwiperModule,
    CKEditorModule,
    ReactiveFormsModule,
    ArchwizardModule,
    LightboxModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { 
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
