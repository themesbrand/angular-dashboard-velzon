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

import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

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
import { SimulationCourseComponent } from './simulation/simulation-course/simulation-course.component';
import { SimulationWorkshopComponent } from './simulation/simulation-workshop/simulation-workshop.component';
import { SimulationStandardizedPatientsComponent } from './simulation/simulation-standardized-patients/simulation-standardized-patients.component';
import { SimulationCourseSetupComponent } from './simulation/simulation-course/simulation-course-setup/simulation-course-setup.component';
import { SimulationSchedulingComponent } from './simulation/simulation-course/simulation-scheduling/simulation-scheduling.component';
import { SimulationViewApplicationsComponent } from './simulation/simulation-course/simulation-view-applications/simulation-view-applications.component';
import { SimulationOrderFoodComponent } from './simulation/simulation-course/simulation-order-food/simulation-order-food.component';
import { FinanceOrderFoodComponent } from './finance-view/finance-simulation/finance-course/finance-order-food/finance-order-food.component';
import { FinanceCourseComponent } from './finance-view/finance-simulation/finance-course/finance-course.component';
import { SimulationRefundManagementComponent } from './simulation/simulation-course/simulation-refund-management/simulation-refund-management.component';
import { FinanceRefundManagementComponent } from './finance-view/finance-simulation/finance-course/finance-refund-management/finance-refund-management.component';
import { SimulationWorkshopSetupComponent } from './simulation/simulation-workshop/simulation-workshop-setup/simulation-workshop-setup.component';
import { SimulationWorkshopSchedulingComponent } from './simulation/simulation-workshop/simulation-workshop-scheduling/simulation-workshop-scheduling.component';
import { SimulationWorkshopViewApplicationComponent } from './simulation/simulation-workshop/simulation-workshop-view-application/simulation-workshop-view-application.component';
import { SimulationWorkshopOrderFoodComponent } from './simulation/simulation-workshop/simulation-workshop-order-food/simulation-workshop-order-food.component';
import { SimulationCreateFormComponent } from './simulation/simulation-workshop/simulation-create-form/simulation-create-form.component';
import { SimulationCourseCreateFormComponent } from './simulation/simulation-course/simulation-course-create-form/simulation-course-create-form.component';
import { ResearchComponent } from './research/research.component';
import { ResearchViewApplicationsComponent } from './research/research-view-applications/research-view-applications.component';
import { ResearchEthicalApprovalComponent } from './research/research-view-applications/research-ethical-approval/research-ethical-approval.component';
import { ResearchFundingOpportunitiesComponent } from './research/research-view-applications/research-funding-opportunities/research-funding-opportunities.component';
import { ResearchOtherFundingOpportunitiesComponent } from './research/research-view-applications/research-other-funding-opportunities/research-other-funding-opportunities.component';
import { ResearchConsultationRequestComponent } from './research/research-consultation-request/research-consultation-request.component';
import { RecEvaluationFormComponent } from './research/research-view-applications/research-ethical-approval/rec-evaluation-form/rec-evaluation-form.component';
import { EvaluationFormComponent } from './research/research-view-applications/research-other-funding-opportunities/evaluation-form/evaluation-form.component';
import { ResearchFundingOpportunitiesFormComponent } from './research/research-view-applications/research-funding-opportunities/research-funding-opportunities-form/research-funding-opportunities-form.component';
import { ResearchDayComponent } from './research/research-day/research-day.component';
import { ProgramNominationComponent } from './research/research-day/program-nomination/program-nomination.component';
import { UploadPresentationComponent } from './research/research-day/upload-presentation/upload-presentation.component';
import { CompetitionGroupingComponent } from './research/research-day/competition-grouping/competition-grouping.component';
import { PresentationEvaluationComponent } from './research/research-day/presentation-evaluation/presentation-evaluation.component';
import { PresentationEvaluationResultComponent } from './research/research-day/presentation-evaluation-result/presentation-evaluation-result.component';
import { BoothEvaluationComponent } from './research/research-day/booth-evaluation/booth-evaluation.component';
import { BoothEvaluationResultComponent } from './research/research-day/booth-evaluation-result/booth-evaluation-result.component';
import { EvaluationFormOralPresentationComponent } from './research/research-day/presentation-evaluation/evaluation-form-oral-presentation/evaluation-form-oral-presentation.component';
import { EvaluationFormPosterPresentationComponent } from './research/research-day/presentation-evaluation/evaluation-form-poster-presentation/evaluation-form-poster-presentation.component';
import { SectionBoothEvaluationComponent } from './research/research-day/booth-evaluation/section-booth-evaluation/section-booth-evaluation.component';
import { ProgramBoothEvaluationComponent } from './research/research-day/booth-evaluation/program-booth-evaluation/program-booth-evaluation.component';
import { AdmissionComponent } from './admission/admission/admission.component';
import { AdmissionSetupComponent } from './admission/admission/admission-setup/admission-setup.component';
import { AdmissionSetupEvaluationFormComponent } from './admission/admission/admission-setup/admission-setup-evaluation-form/admission-setup-evaluation-form.component';
import { SponsorSetupComponent } from './admission/admission/sponsor-setup/sponsor-setup.component';
import { ViewApplicationsComponent } from './admission/admission/view-applications/view-applications.component';
import { AdmissionViewApplicationComponent } from './admission/admission/view-applications/admission-view-application/admission-view-application.component';
import { AdmissionScheduleInterviewComponent } from './admission/admission/view-applications/admission-schedule-interview/admission-schedule-interview.component';
import { AdmissionInterviewComponent } from './admission/admission/admission-interview/admission-interview.component';
import { AdmissionInterviewEvaluationFormComponent } from './admission/admission/admission-interview/admission-interview-evaluation-form/admission-interview-evaluation-form.component';
import { AdmissionInterviewViewApplicationComponent } from './admission/admission/admission-interview/admission-interview-view-application/admission-interview-view-application.component';

import { ScholarshipSectionInterviewResultComponent } from './scholarship-section/scholarship-section-interview-result/scholarship-section-interview-result.component';
import { ScholarshipInterviewApplicationComponent } from './scholarship-section/scholarship-section-interview-result/scholarship-interview-application/scholarship-interview-application.component';
import { ViewInterviewerResultComponent } from './scholarship-section/scholarship-section-interview-result/view-interviewer-result/view-interviewer-result.component';
import { AdmissionInterviewResultComponent } from './admission/admission/admission-interview-result/admission-interview-result.component';
import { AdmissionViewInterviewResultComponent } from './admission/admission/admission-interview-result/admission-view-interview-result/admission-view-interview-result.component';
import { TransferComponent } from './admission/transfer/transfer.component';
import { TransferApplicationComponent } from './admission/transfer/transfer-application/transfer-application.component';
import { TransferViewApplicationComponent } from './admission/transfer/transfer-view-application/transfer-view-application.component';
import { InterruptionComponent } from './admission/interruption/interruption.component';
import { InterruptionApplicationComponent } from './admission/interruption/interruption-application/interruption-application.component';
import { InterruptionViewApplicationsComponent } from './admission/interruption/interruption-view-applications/interruption-view-applications.component';
import { WithdrawalComponent } from './admission/withdrawal/withdrawal.component';
import { WithdrawalViewApplicationComponent } from './admission/withdrawal/withdrawal-view-application/withdrawal-view-application.component';
import { WithdrawalApplicationComponent } from './admission/withdrawal/withdrawal-application/withdrawal-application.component';
import { RejoiningComponent } from './admission/rejoining/rejoining.component';
import { RejoiningApplicationFormComponent } from './admission/rejoining/rejoining-application-form/rejoining-application-form.component';
import { RejoiningApplicationListComponent } from './admission/rejoining/rejoining-application-list/rejoining-application-list.component';
import { SupplementaryTrainingComponent } from './admission/supplementary-training/supplementary-training.component';
import { SupplementaryTrainingApplicationFormComponent } from './admission/supplementary-training/supplementary-training-application-form/supplementary-training-application-form.component';
import { SupplementaryTrainingApplicationListComponent } from './admission/supplementary-training/supplementary-training-application-list/supplementary-training-application-list.component';
import { ApplicantApplicationsListComponent } from './applicant-view/applicant-applications-list/applicant-applications-list.component';
import { ApplicantRecidencyProgramApplicationsComponent } from './applicant-view/applicant-applications-list/applicant-recidency-program-applications/applicant-recidency-program-applications.component';
import { ApplicantRecidencyProgramApplicationsViewComponent } from './applicant-view/applicant-applications-list/applicant-recidency-program-applications-view/applicant-recidency-program-applications-view.component';
import { MmrDashboardMiniMedicalRecordComponent } from './counselling-requests/mmr-dashboard/mmr-dashboard-mini-medical-record/mmr-dashboard-mini-medical-record.component';
import { TraineeDatabaseComponent } from './scholarship-section/trainee-database/trainee-database.component';
import { ManageExamsComponent } from './examinations/manage-exams/manage-exams.component';
import { CreateExamComponent } from './examinations/manage-exams/create-exam/create-exam.component';
import { CreateExamDatesComponent } from './examinations/manage-exams/create-exam-dates/create-exam-dates.component';
import { ViewExamDatesComponent } from './examinations/manage-exams/view-exam-dates/view-exam-dates.component';
import { ViewExamRegistrationsComponent } from './examinations/manage-exams/view-exam-registrations/view-exam-registrations.component';
import { ViewNotificationComponent } from './examinations/manage-exams/view-notification/view-notification.component';
import { CreateNotificationComponent } from './examinations/manage-exams/create-notification/create-notification.component';
import { ViewExamsComponent } from './examinations/manage-exams/view-exams/view-exams.component';
import { ViewRegistrationComponent } from './examinations/registration/view-registration/view-registration.component';
import { CreateRegistrationComponent } from './examinations/registration/create-registration/create-registration.component';
import { WithdrawalRequestComponent } from './examinations/withdrawal/withdrawal-request/withdrawal-request.component';
import { ViewWithdrawalRequestsComponent } from './examinations/withdrawal/view-withdrawal-requests/view-withdrawal-requests.component';
import { WithdrawalAddCommentsComponent } from './examinations/withdrawal/withdrawal-add-comments/withdrawal-add-comments.component';
import { ViewResultsComponent } from './examinations/results/view-results/view-results.component';
import { CreateResultComponent } from './examinations/results/create-result/create-result.component';
import { ResultsComponent } from './examinations/results/results.component';
import { ViewAppealsComponent } from './examinations/results/view-appeals/view-appeals.component';
import { CreateAppealsComponent } from './examinations/results/create-appeals/create-appeals.component';
import { AppealResponseFormComponent } from './examinations/results/appeal-response-form/appeal-response-form.component';

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
    FinanceExpiryEResourcesComponent,
    SimulationCourseComponent,
    SimulationWorkshopComponent,
    SimulationStandardizedPatientsComponent,
    SimulationCourseSetupComponent,
    SimulationSchedulingComponent,
    SimulationViewApplicationsComponent,
    SimulationOrderFoodComponent,
    FinanceOrderFoodComponent,
    FinanceCourseComponent,
    SimulationRefundManagementComponent,
    FinanceRefundManagementComponent,
    SimulationWorkshopSetupComponent,
    SimulationWorkshopSchedulingComponent,
    SimulationWorkshopViewApplicationComponent,
    SimulationWorkshopOrderFoodComponent,
    SimulationCreateFormComponent,
    SimulationCourseCreateFormComponent,
    ResearchComponent,
    ResearchViewApplicationsComponent,
    ResearchEthicalApprovalComponent,
    ResearchFundingOpportunitiesComponent,
    ResearchOtherFundingOpportunitiesComponent,
    ResearchConsultationRequestComponent,
    RecEvaluationFormComponent,
    EvaluationFormComponent,
    ResearchFundingOpportunitiesFormComponent,
    ResearchDayComponent,
    ProgramNominationComponent,
    UploadPresentationComponent,
    CompetitionGroupingComponent,
    PresentationEvaluationComponent,
    PresentationEvaluationResultComponent,
    BoothEvaluationComponent,
    BoothEvaluationResultComponent,
    EvaluationFormOralPresentationComponent,
    EvaluationFormPosterPresentationComponent,
    SectionBoothEvaluationComponent,
    ProgramBoothEvaluationComponent,
    AdmissionComponent,
    AdmissionSetupComponent,
    AdmissionSetupEvaluationFormComponent,
    SponsorSetupComponent,
    ViewApplicationsComponent,
    AdmissionViewApplicationComponent,
    AdmissionScheduleInterviewComponent,
    AdmissionInterviewComponent,
    AdmissionInterviewEvaluationFormComponent,
    ScholarshipSectionInterviewResultComponent,
    ScholarshipInterviewApplicationComponent,
    ViewInterviewerResultComponent,
    AdmissionInterviewResultComponent,
    AdmissionViewInterviewResultComponent,
    TransferComponent,
    TransferApplicationComponent,
    TransferViewApplicationComponent,
    InterruptionComponent,
    InterruptionApplicationComponent,
    InterruptionViewApplicationsComponent,
    WithdrawalComponent,
    WithdrawalViewApplicationComponent,
    WithdrawalApplicationComponent,
    RejoiningComponent,
    RejoiningApplicationFormComponent,
    RejoiningApplicationListComponent,
    SupplementaryTrainingComponent,
    SupplementaryTrainingApplicationFormComponent,
    SupplementaryTrainingApplicationListComponent,
    AdmissionInterviewViewApplicationComponent,
    ApplicantApplicationsListComponent,
    ApplicantRecidencyProgramApplicationsComponent,
    ApplicantRecidencyProgramApplicationsViewComponent,
    MmrDashboardMiniMedicalRecordComponent,
    TraineeDatabaseComponent,
    ManageExamsComponent,
    CreateExamComponent,
    CreateExamDatesComponent,
    ViewExamDatesComponent,
    ViewExamRegistrationsComponent,
    ViewNotificationComponent,
    CreateNotificationComponent,
    ViewExamsComponent,
    ViewRegistrationComponent,
    CreateRegistrationComponent,
    WithdrawalRequestComponent,
    ViewWithdrawalRequestsComponent,
    WithdrawalAddCommentsComponent,
    ViewResultsComponent,
    CreateResultComponent,
    ResultsComponent,
    ViewAppealsComponent,
    CreateAppealsComponent,
    AppealResponseFormComponent
  ],
  imports: [
    CommonModule,
    FlatpickrModule.forRoot(),
    NgbToastModule,
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
