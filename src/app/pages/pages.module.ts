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
import { DataflowViewComponent } from './vehpc/verification/dataflow-view/dataflow-view.component';
import { CreateEquivalencyRequestComponent } from './vehpc/equivalency/create-equivalency-request/create-equivalency-request.component';
import { ReturnEquivalencyRequestComponent } from './vehpc/equivalency/return-equivalency-request/return-equivalency-request.component';
import { EquateCertificatesComponent } from './vehpc/equivalency/equate-certificates/equate-certificates.component';
import { DashboardTemplateComponent } from './dashboards/dashboard-template/dashboard-template.component';
import { TraineeDashboardComponent } from './dashboards/trainee-dashboard/trainee-dashboard.component';
import { DashboardTraineeComponent } from './dashboards/dashboard-trainee/dashboard-trainee.component';
import { ProfessionalCompetiencyCreateCourseComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-create-course/professional-competiency-create-course.component';
import { ProfessionalCompetiencyViewCourseComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-view-course/professional-competiency-view-course.component';
import { ProfessionalCompetiencyAddCommentsComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-add-comments/professional-competiency-add-comments.component';
import { InnovationInitiativeComponent } from './innovation-centre/innovation-initiative/innovation-initiative.component';
import { CreateInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/create-innovation-initiative/create-innovation-initiative.component';
import { PageInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/page-innovation-initiative/page-innovation-initiative.component';
import { PageProposalsInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/page-proposals-innovation-initiative/page-proposals-innovation-initiative.component';
import { ViewProposalsInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/view-proposals-innovation-initiative/view-proposals-innovation-initiative.component';
import { ProposalAssessmentComponent } from './innovation-centre/innovation-initiative/proposal-assessment/proposal-assessment.component';
import { ProposalAssessmentResultsComponent } from './innovation-centre/innovation-initiative/proposal-assessment-results/proposal-assessment-results.component';
import { PageImmersiveInteractiveRoomComponent } from './innovation-centre/immersive-interactive-room/page-immersive-interactive-room/page-immersive-interactive-room.component';
import { CreateImmersiveInteractiveRoomComponent } from './innovation-centre/immersive-interactive-room/create-immersive-interactive-room/create-immersive-interactive-room.component';
import { PagePreventativeMaintenanceComponent } from './innovation-centre/preventative-maintenance/page-preventative-maintenance/page-preventative-maintenance.component';
import { CreatePreventativeMaintenanceComponent } from './innovation-centre/preventative-maintenance/create-preventative-maintenance/create-preventative-maintenance.component';
import { PageRepairRequestsComponent } from './innovation-centre/repair-requests/page-repair-requests/page-repair-requests.component';
import { CreateRepairRequestsComponent } from './innovation-centre/repair-requests/create-repair-requests/create-repair-requests.component';
import { CreateThreedObjectRequestComponent } from './innovation-centre/3d-object-request/create-threed-object-request/create-threed-object-request.component';
import { PageThreedObjectRequestComponent } from './innovation-centre/3d-object-request/page-threed-object-request/page-threed-object-request.component';
import { SelectTopicAndMentorComponent } from './research/select-topic-and-mentor/select-topic-and-mentor.component';
import { SubmitProposalComponent } from './research/proposal-review/submit-proposal/submit-proposal.component';
import { PageProposalReviewComponent } from './research/proposal-review/page-proposal-review/page-proposal-review.component';
import { PageResearchEvaluationComponent } from './research/research-evaluation/page-research-evaluation/page-research-evaluation.component';
import { FormResearchEvaluationComponent } from './research/research-evaluation/form-research-evaluation/form-research-evaluation.component';
import { PageInterimReportComponent } from './research/submit-interim-report/page-interim-report/page-interim-report.component';
import { FormInterimProposalComponent } from './research/submit-interim-report/form-interim-proposal/form-interim-proposal.component';
import { PageFinalProposalsComponent } from './research/submit-final-proposal/page-final-proposals/page-final-proposals.component';
import { FormFinalProposalsComponent } from './research/submit-final-proposal/form-final-proposals/form-final-proposals.component';
import { ProfessionalCompetiencyCoursesComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-courses.component';
import { ProfessionalCompetiencyAddSmeTeamComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-add-sme-team/professional-competiency-add-sme-team.component';
import { ProfessionalCompetiencyViewCourseReviewsComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-view-course-reviews/professional-competiency-view-course-reviews.component';
import { ProfessionalCompetiencyCreateCourseReviewsComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-create-course-reviews/professional-competiency-create-course-reviews.component';
import { VerificationPageComponent } from './vehpc/verification/verification-page/verification-page.component';
import { ViewUnmatchedVerificationsComponent } from './vehpc/verification/view-unmatched-verifications/view-unmatched-verifications.component';
import { EquivalencyComponent } from './vehpc/equivalency/equivalency.component';
import { PageEquivalencyRequestsComponent } from './vehpc/equivalency/page-equivalency-requests/page-equivalency-requests.component';
import { PageEquivalencyAppealsComponent } from './vehpc/equivalency/page-equivalency-appeals/page-equivalency-appeals.component';
import { CreateEquivalencyAppealRequestComponent } from './vehpc/equivalency/create-equivalency-appeal-request/create-equivalency-appeal-request.component';
import { ReviseEquivalencyLevelComponent } from './vehpc/equivalency/revise-equivalency-level/revise-equivalency-level.component';
import { OcManageExamsComponent } from './oc-examinations/oc-manage-exams/oc-manage-exams.component';
import { OcResultComponent } from './oc-examinations/oc-result/oc-result.component';
import { OcCreateRegistrationComponent } from './oc-examinations/oc-registration/oc-create-registration/oc-create-registration.component';
import { OcViewRegistrationComponent } from './oc-examinations/oc-registration/oc-view-registration/oc-view-registration.component';
import { OcViewWithdrawalRequestComponent } from './oc-examinations/oc-withdrawal/oc-view-withdrawal-request/oc-view-withdrawal-request.component';
import { OcWithdrawalAddCommentComponent } from './oc-examinations/oc-withdrawal/oc-withdrawal-add-comment/oc-withdrawal-add-comment.component';
import { OcWithdrawalRequestComponent } from './oc-examinations/oc-withdrawal/oc-withdrawal-request/oc-withdrawal-request.component';
import { OcCreateRescheduleComponent } from './oc-examinations/oc-reschedule/oc-create-reschedule/oc-create-reschedule.component';
import { OcViewRescheduleComponent } from './oc-examinations/oc-reschedule/oc-view-reschedule/oc-view-reschedule.component';
import { OcPageExamsComponent } from './oc-examinations/oc-manage-exams/oc-page-exams/oc-page-exams.component';
import { OcCreateExamsComponent } from './oc-examinations/oc-manage-exams/oc-create-exams/oc-create-exams.component';
import { OcCreateExamsDatesComponent } from './oc-examinations/oc-manage-exams/oc-create-exams-dates/oc-create-exams-dates.component';
import { OcViewExamRegistrationsComponent } from './oc-examinations/oc-manage-exams/oc-view-exam-registrations/oc-view-exam-registrations.component';
import { OcViewExamDatesComponent } from './oc-examinations/oc-manage-exams/oc-view-exam-dates/oc-view-exam-dates.component';
import { OcViewResultsComponent } from './oc-examinations/oc-result/oc-view-results/oc-view-results.component';
import { OcImportResultsComponent } from './oc-examinations/oc-result/oc-import-results/oc-import-results.component';
import { OcViewAppealsComponent } from './oc-examinations/oc-result/oc-view-appeals/oc-view-appeals.component';
import { OcAppealResponseFormComponent } from './oc-examinations/oc-result/oc-appeal-response-form/oc-appeal-response-form.component';
import { OcCreateAppealComponent } from './oc-examinations/oc-result/oc-create-appeal/oc-create-appeal.component';
import { OcCreateResultComponent } from './oc-examinations/oc-result/oc-create-result/oc-create-result.component';
import { OcDefineReportsComponent } from './oc-examinations/oc-reports/oc-define-reports/oc-define-reports.component';
import { OcViewReportsComponent } from './oc-examinations/oc-reports/oc-view-reports/oc-view-reports.component';
import { OcReportsComponent } from './oc-examinations/oc-reports/oc-reports.component';
import { OcCreateReportComponent } from './oc-examinations/oc-reports/oc-create-report/oc-create-report.component';
import { OcCreateCertificatesRequestComponent } from './oc-examinations/oc-certificates-request/oc-create-certificates-request/oc-create-certificates-request.component';
import { OcViewCertificatesRequestComponent } from './oc-examinations/oc-certificates-request/oc-view-certificates-request/oc-view-certificates-request.component';
import { ChiefResidentsAffairsComponent } from './tafus/chief-residents-affairs/chief-residents-affairs.component';
import { NominateChiefResidentsComponent } from './tafus/chief-residents-affairs/nominate-chief-residents/nominate-chief-residents.component';
import { ViewChiefResidentsComponent } from './tafus/chief-residents-affairs/view-chief-residents/view-chief-residents.component';
import { AnnualIncentivesComponent } from './tafus/chief-residents-affairs/annual-incentives/annual-incentives.component';
import { TerminationsComponent } from './tafus/terminations/terminations.component';
import { TerminateResidentsComponent } from './tafus/terminations/terminate-residents/terminate-residents.component';
import { CreateTerminateRequestComponent } from './tafus/terminations/terminate-residents/create-terminate-request/create-terminate-request.component';
import { ViewTerminateRequestComponent } from './tafus/terminations/terminate-residents/view-terminate-request/view-terminate-request.component';
import { AcademicActivitiesComponent } from './tafus/academic-activities/academic-activities.component';
import { ResearchDayIncentivesForJudgesComponent } from './tafus/academic-activities/research-day-incentives-for-judges/research-day-incentives-for-judges.component';
import { ResearchDayRewardWinnersComponent } from './tafus/academic-activities/research-day-reward-winners/research-day-reward-winners.component';
import { VisitingExpertsComponent } from './tafus/academic-activities/visiting-experts/visiting-experts.component';
import { AcademicActivityRequestsComponent } from './tafus/academic-activities/academic-activity-requests/academic-activity-requests.component';
import { CreateIncentiveForJudgesComponent } from './tafus/academic-activities/research-day-incentives-for-judges/create-incentive-for-judges/create-incentive-for-judges.component';
import { CreateResearchDayRewardComponent } from './tafus/academic-activities/research-day-reward-winners/create-research-day-reward/create-research-day-reward.component';
import { CreateVisitingExpertsComponent } from './tafus/academic-activities/visiting-experts/create-visiting-experts/create-visiting-experts.component';
import { LettersRequestsComponent } from './tafus/letters/letters-requests/letters-requests.component';
import { CreateLettersRequestComponent } from './tafus/letters/create-letters-request/create-letters-request.component';
import { CertificateRequestsComponent } from './tafus/certificates/certificate-requests/certificate-requests.component';
import { CreateCertificateRequestComponent } from './tafus/certificates/create-certificate-request/create-certificate-request.component';
import { IdCardsRequestsComponent } from './tafus/id-cards/id-cards-requests/id-cards-requests.component';
import { CreateIdCardsRequestComponent } from './tafus/id-cards/create-id-cards-request/create-id-cards-request.component';
import { SurgicalFoundationProgramComponent } from './simulation/simulation-workshop/surgical-foundation-program/surgical-foundation-program.component';
import { SimulationFacilitiesForRentComponent } from './simulation/simulation-facilities-for-rent/simulation-facilities-for-rent.component';
import { CreateSimulationFacilitiesForRentComponent } from './simulation/simulation-facilities-for-rent/create-simulation-facilities-for-rent/create-simulation-facilities-for-rent.component';
import { SimulationFacilitiesAgreementTemplateComponent } from './simulation/simulation-facilities-for-rent/simulation-facilities-agreement-template/simulation-facilities-agreement-template.component';
import { SimulationFacilitiesAgreementSubmissionComponent } from './simulation/simulation-facilities-for-rent/simulation-facilities-agreement-submission/simulation-facilities-agreement-submission.component';
import { SimulationFacilitiesUploadInvoiceComponent } from './simulation/simulation-facilities-for-rent/simulation-facilities-upload-invoice/simulation-facilities-upload-invoice.component';
import { ViewSurgicalScoreComponent } from './simulation/simulation-workshop/surgical-foundation-program/view-surgical-score/view-surgical-score.component';
import { EducationCommitteeComponent } from './education-committee/education-committee.component';
import { EcAddMembersComponent } from './education-committee/ec-add-members/ec-add-members.component';
import { EcRemoveMembersComponent } from './education-committee/ec-remove-members/ec-remove-members.component';
import { NewMemberRequestComponent } from './education-committee/ec-add-members/new-member-request/new-member-request.component';
import { ViewNewMemberRequestComponent } from './education-committee/ec-add-members/view-new-member-request/view-new-member-request.component';
import { EcRemoveMemberFormComponent } from './education-committee/ec-remove-members/ec-remove-member-form/ec-remove-member-form.component';
import { EcRemoveMemberViewComponent } from './education-committee/ec-remove-members/ec-remove-member-view/ec-remove-member-view.component';
import { EcAddFacultyMemberComponent } from './education-committee/ec-add-faculty-member/ec-add-faculty-member.component';
import { FcNewMemberRequestComponent } from './education-committee/ec-add-faculty-member/fc-new-member-request/fc-new-member-request.component';
import { FcViewMemberRequestComponent } from './education-committee/ec-add-faculty-member/fc-view-member-request/fc-view-member-request.component';
import { EcRemoveFacultyMemberComponent } from './education-committee/ec-remove-faculty-member/ec-remove-faculty-member.component';
import { EcRemoveFacultyMemberFormComponent } from './education-committee/ec-remove-faculty-member/ec-remove-faculty-member-form/ec-remove-faculty-member-form.component';
import { EcRemoveFacultyMemberViewComponent } from './education-committee/ec-remove-faculty-member/ec-remove-faculty-member-view/ec-remove-faculty-member-view.component';
import { ChangePositionComponent } from './education-committee/change-position/change-position.component';
import { NewChangePositionRequestComponent } from './education-committee/change-position/new-change-position-request/new-change-position-request.component';
import { ViewChangePositionRequestComponent } from './education-committee/change-position/view-change-position-request/view-change-position-request.component';
import { EcAnnualIncentivesComponent } from './education-committee/ec-annual-incentives/ec-annual-incentives.component';
import { AddAnnualIncentivesComponent } from './education-committee/ec-annual-incentives/add-annual-incentives/add-annual-incentives.component';
import { ViewAnnualIncentivesComponent } from './education-committee/ec-annual-incentives/view-annual-incentives/view-annual-incentives.component';
import { GraduationListsComponent } from './tafus/graduation-lists/graduation-lists.component';
import { AdmissionViewCvApplicationComponent } from './admission/admission/view-applications/admission-view-cv-application/admission-view-cv-application.component';
import { TraineeSelectionPageComponent } from './tafus/graduation-lists/trainee-selection-page/trainee-selection-page.component';
import { GraduationAchievementsPageComponent } from './tafus/graduation-lists/graducation-achievements-page/graducation-achievements-page.component';
import { GraduationFormRequestComponent } from './tafus/graduation-lists/graduation-form-request/graduation-form-request.component';
import { GraduationFormRequestViewComponent } from './tafus/graduation-lists/graduation-form-request-view/graduation-form-request-view.component';
import { ExtensionRequiredListComponent } from './tafus/graduation-lists/extension-required-list/extension-required-list.component';
import { ExtensionFormRequestComponent } from './tafus/graduation-lists/extension-form-request/extension-form-request.component';
import { ExtensionFormRequestViewComponent } from './tafus/graduation-lists/extension-form-request-view/extension-form-request-view.component';
import { TraineeGraduationComponent } from './tafus/graduation-lists/trainee-graduation/trainee-graduation.component';
import { ActivityRequestTraineeComponent } from './tafus/academic-activities/academic-activity-requests/activity-request-trainee/activity-request-trainee.component';
import { ActivityRequestDirectorComponent } from './tafus/academic-activities/academic-activity-requests/activity-request-director/activity-request-director.component';
import { AssessmentAndPerformanceComponent } from './assessment-and-performance/assessment-and-performance.component';
import { DevelopAssessmentToolsComponent } from './assessment-and-performance/develop-assessment-tools/develop-assessment-tools.component';
import { DevelopAssessmentFormComponent } from './assessment-and-performance/develop-assessment-tools/develop-assessment-form/develop-assessment-form.component';
import { DevelopAssessmentDynamicFormComponent } from './assessment-and-performance/develop-assessment-tools/develop-assessment-dynamic-form/develop-assessment-dynamic-form.component';
import { DevelopAssessmentFormViewComponent } from './assessment-and-performance/develop-assessment-tools/develop-assessment-form-view/develop-assessment-form-view.component';
import { DevelopAssessmentActionFormComponent } from './assessment-and-performance/develop-assessment-tools/develop-assessment-action-form/develop-assessment-action-form.component';
import { ModifyAssessmentToolsComponent } from './assessment-and-performance/modify-assessment-tools/modify-assessment-tools.component';
import { ModifyAssessmentFormComponent } from './assessment-and-performance/modify-assessment-tools/modify-assessment-form/modify-assessment-form.component';
import { ModifyAssessmentReviewTeamComponent } from './assessment-and-performance/modify-assessment-tools/modify-assessment-review-team/modify-assessment-review-team.component';
import { ProvideSupportAssessmentComponent } from './assessment-and-performance/provide-support-assessment/provide-support-assessment.component';
import { MonitorProgramDataComponent } from './assessment-and-performance/monitor-program-data/monitor-program-data.component';
import { ProvideSupportAssessmentFormComponent } from './assessment-and-performance/provide-support-assessment/provide-support-assessment-form/provide-support-assessment-form.component';
import { ProvideSupportAssessmentFormViewComponent } from './assessment-and-performance/provide-support-assessment/provide-support-assessment-form-view/provide-support-assessment-form-view.component';
import { ProvideSupportAssessmentSetupComponent } from './assessment-and-performance/provide-support-assessment/provide-support-assessment-setup/provide-support-assessment-setup.component';
import { ProvideSupportAssessmentScheduleComponent } from './assessment-and-performance/provide-support-assessment/provide-support-assessment-schedule/provide-support-assessment-schedule.component';
import { CreateNewChecklistRequestComponent } from './assessment-and-performance/monitor-program-data/create-new-checklist-request/create-new-checklist-request.component';
import { UpdateChecklistRequestComponent } from './assessment-and-performance/monitor-program-data/update-checklist-request/update-checklist-request.component';
import { ViewChecklistRequestComponent } from './assessment-and-performance/monitor-program-data/view-checklist-request/view-checklist-request.component';
import { MarkAsCompletedChecklistRequestComponent } from './assessment-and-performance/monitor-program-data/mark-as-completed-checklist-request/mark-as-completed-checklist-request.component';
import { PortfolioComponent } from './assessment-and-performance/portfolio/portfolio.component';
import { ViewPortfolioComponent } from './assessment-and-performance/portfolio/view-portfolio/view-portfolio.component';
import { PortfolioFormViewComponent } from './assessment-and-performance/portfolio/view-portfolio/portfolio-form-view/portfolio-form-view.component';
import { PortfolioFormComponent } from './assessment-and-performance/portfolio/view-portfolio/portfolio-form/portfolio-form.component';
import { SixMonthAndAnnualEvaluationFormNewComponent } from './forms/six-month-and-annual-evaluation-form-new/six-month-and-annual-evaluation-form-new.component';
import { CurriculumAndFacultyDevelopmentComponent } from './curriculum-and-faculty-development/curriculum-and-faculty-development.component';
import { CreateNewProgramComponent } from './curriculum-and-faculty-development/create-new-program/create-new-program.component';
import { CurriculumReviewComponent } from './curriculum-and-faculty-development/curriculum-review/curriculum-review.component';
import { CreateNewProgramFormComponent } from './curriculum-and-faculty-development/create-new-program/create-new-program-form/create-new-program-form.component';
import { ViewNewProgramFormComponent } from './curriculum-and-faculty-development/create-new-program/view-new-program-form/view-new-program-form.component';
import { NewProgramFormActionsComponent } from './curriculum-and-faculty-development/create-new-program/new-program-form-actions/new-program-form-actions.component';
import { SubmitProgramListComponent } from './curriculum-and-faculty-development/create-new-program/submit-program-list/submit-program-list.component';
import { SubmitProgramFormComponent } from './curriculum-and-faculty-development/create-new-program/submit-program-form/submit-program-form.component';
import { SubmitProgramViewComponent } from './curriculum-and-faculty-development/create-new-program/submit-program-view/submit-program-view.component';

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
    AppealResponseFormComponent,
    DataflowViewComponent,
    CreateEquivalencyRequestComponent,
    ReturnEquivalencyRequestComponent,
    EquateCertificatesComponent,
    DashboardTemplateComponent,
    TraineeDashboardComponent,
    DashboardTraineeComponent,
    ProfessionalCompetiencyCreateCourseComponent,
    ProfessionalCompetiencyViewCourseComponent,
    ProfessionalCompetiencyAddCommentsComponent,
    InnovationInitiativeComponent,
    CreateInnovationInitiativeComponent,
    PageInnovationInitiativeComponent,
    PageProposalsInnovationInitiativeComponent,
    ViewProposalsInnovationInitiativeComponent,
    ProposalAssessmentComponent,
    ProposalAssessmentResultsComponent,
    PageImmersiveInteractiveRoomComponent,
    CreateImmersiveInteractiveRoomComponent,
    PagePreventativeMaintenanceComponent,
    CreatePreventativeMaintenanceComponent,
    PageRepairRequestsComponent,
    CreateRepairRequestsComponent,
    CreateThreedObjectRequestComponent,
    PageThreedObjectRequestComponent,
    SelectTopicAndMentorComponent,
    SubmitProposalComponent,
    PageProposalReviewComponent,
    PageResearchEvaluationComponent,
    FormResearchEvaluationComponent,
    PageInterimReportComponent,
    FormInterimProposalComponent,
    PageFinalProposalsComponent,
    FormFinalProposalsComponent,
    ProfessionalCompetiencyCoursesComponent,
    ProfessionalCompetiencyAddSmeTeamComponent,
    ProfessionalCompetiencyViewCourseReviewsComponent,
    ProfessionalCompetiencyCreateCourseReviewsComponent,
    VerificationPageComponent,
    ViewUnmatchedVerificationsComponent,
    EquivalencyComponent,
    PageEquivalencyRequestsComponent,
    PageEquivalencyAppealsComponent,
    CreateEquivalencyAppealRequestComponent,
    ReviseEquivalencyLevelComponent,
    OcManageExamsComponent,
    OcResultComponent,
    OcCreateRegistrationComponent,
    OcViewRegistrationComponent,
    OcViewWithdrawalRequestComponent,
    OcWithdrawalAddCommentComponent,
    OcWithdrawalRequestComponent,
    OcCreateRescheduleComponent,
    OcViewRescheduleComponent,
    OcPageExamsComponent,
    OcCreateExamsComponent,
    OcCreateExamsDatesComponent,
    OcViewExamRegistrationsComponent,
    OcViewExamDatesComponent,
    OcViewResultsComponent,
    OcImportResultsComponent,
    OcViewAppealsComponent,
    OcAppealResponseFormComponent,
    OcCreateAppealComponent,
    OcCreateResultComponent,
    OcDefineReportsComponent,
    OcViewReportsComponent,
    OcReportsComponent,
    OcCreateReportComponent,
    OcCreateCertificatesRequestComponent,
    OcViewCertificatesRequestComponent,
    ChiefResidentsAffairsComponent,
    NominateChiefResidentsComponent,
    ViewChiefResidentsComponent,
    AnnualIncentivesComponent,
    TerminationsComponent,
    TerminateResidentsComponent,
    CreateTerminateRequestComponent,
    ViewTerminateRequestComponent,
    AcademicActivitiesComponent,
    ResearchDayIncentivesForJudgesComponent,
    ResearchDayRewardWinnersComponent,
    VisitingExpertsComponent,
    AcademicActivityRequestsComponent,
    CreateIncentiveForJudgesComponent,
    CreateResearchDayRewardComponent,
    CreateVisitingExpertsComponent,
    LettersRequestsComponent,
    CreateLettersRequestComponent,
    CertificateRequestsComponent,
    CreateCertificateRequestComponent,
    IdCardsRequestsComponent,
    CreateIdCardsRequestComponent,
    SurgicalFoundationProgramComponent,
    SimulationFacilitiesForRentComponent,
    CreateSimulationFacilitiesForRentComponent,
    SimulationFacilitiesAgreementTemplateComponent,
    SimulationFacilitiesAgreementSubmissionComponent,
    SimulationFacilitiesUploadInvoiceComponent,
    ViewSurgicalScoreComponent,
    EducationCommitteeComponent,
    EcAddMembersComponent,
    EcRemoveMembersComponent,
    NewMemberRequestComponent,
    ViewNewMemberRequestComponent,
    EcRemoveMemberFormComponent,
    EcRemoveMemberViewComponent,
    EcAddFacultyMemberComponent,
    FcNewMemberRequestComponent,
    FcViewMemberRequestComponent,
    EcRemoveFacultyMemberComponent,
    EcRemoveFacultyMemberFormComponent,
    EcRemoveFacultyMemberViewComponent,
    ChangePositionComponent,
    NewChangePositionRequestComponent,
    ViewChangePositionRequestComponent,
    EcAnnualIncentivesComponent,
    AddAnnualIncentivesComponent,
    ViewAnnualIncentivesComponent,
    GraduationListsComponent,
    AdmissionViewCvApplicationComponent,
    TraineeSelectionPageComponent,
    GraduationAchievementsPageComponent,
    GraduationFormRequestComponent,
    GraduationFormRequestViewComponent,
    ExtensionRequiredListComponent,
    ExtensionFormRequestComponent,
    ExtensionFormRequestViewComponent,
    TraineeGraduationComponent,
    ActivityRequestTraineeComponent,
    ActivityRequestDirectorComponent,
    AssessmentAndPerformanceComponent,
    DevelopAssessmentToolsComponent,
    DevelopAssessmentFormComponent,
    DevelopAssessmentDynamicFormComponent,
    DevelopAssessmentFormViewComponent,
    DevelopAssessmentActionFormComponent,
    ModifyAssessmentToolsComponent,
    ModifyAssessmentFormComponent,
    ModifyAssessmentReviewTeamComponent,
    ProvideSupportAssessmentComponent,
    MonitorProgramDataComponent,
    ProvideSupportAssessmentFormComponent,
    ProvideSupportAssessmentFormViewComponent,
    ProvideSupportAssessmentSetupComponent,
    ProvideSupportAssessmentScheduleComponent,
    CreateNewChecklistRequestComponent,
    UpdateChecklistRequestComponent,
    ViewChecklistRequestComponent,
    MarkAsCompletedChecklistRequestComponent,
    PortfolioComponent,
    ViewPortfolioComponent,
    PortfolioFormViewComponent,
    PortfolioFormComponent,
    SixMonthAndAnnualEvaluationFormNewComponent,
    CurriculumAndFacultyDevelopmentComponent,
    CreateNewProgramComponent,
    CurriculumReviewComponent,
    CreateNewProgramFormComponent,
    ViewNewProgramFormComponent,
    NewProgramFormActionsComponent,
    SubmitProgramListComponent,
    SubmitProgramFormComponent,
    SubmitProgramViewComponent
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
