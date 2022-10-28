import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { LogHoursComponent } from './duty-hours/log-hours/log-hours.component';
import { ViewHoursComponent } from './duty-hours/view-hours/view-hours.component';
import { CreateProgramComponent } from './curriculum/create-program/create-program.component';
import { EcSetupComponent } from './curriculum/ec-setup.component';
import { AllocateProcedureComponent } from './curriculum/view-program/procedure/allocate-procedure/allocate-procedure.component';
import { AddRotationComponent } from './curriculum/view-program/rotation/add-rotation/add-rotation.component';
import { PreviewRotationComponent } from './curriculum/view-program/rotation/preview-rotation/preview-rotation.component';
import { ViewProgramComponent } from './curriculum/view-program/view-program.component';
import { InTrainingEvaluationReportComponent } from './forms/in-trainning-evaluation-report/in-trainning-evaluation-report.component';
import { PresentationEvaluationFormComponent } from './forms/presentation-evaluation-form/presentation-evaluation-form.component';
import { ResearchMentorEvaluationFormComponent } from './forms/research-mentor-evaluation-form/research-mentor-evaluation-form.component';
import { RotationEvaluationFormComponent } from './forms/rotation-evaluation-form/rotation-evaluation-form.component';
import { SixMonthAndAnnualEvaluationFormComponent } from './forms/six-month-and-annual-evaluation-form/six-month-and-annual-evaluation-form.component';
import { TrainerEvaluationFormComponent } from './forms/trainer-evaluation-form/trainer-evaluation-form.component';
import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';
import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping/rotation-page-resident-mapping.component';
import { LogProcedureComponent } from './log-procedure/log-procedure.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveRequestFormComponent } from './leave-application/leave-request-form/leave-request-form.component';
import { LeaveReturnApplicationComponent } from './leave-application/leave-return-application/leave-return-application.component';
import { SelfReferralRequestComponent } from './counselling-requests/self-referral-request/self-referral-request.component';
import { SelfReferralRequestFormComponent } from './counselling-requests/self-referral-request/self-referral-request-form/self-referral-request-form.component';
import { ProgramReferralRequestComponent } from './counselling-requests/program-referral-request/program-referral-request.component';
import { ProgramReferralRequestFormComponent } from './counselling-requests/program-referral-request/program-referral-request-form/program-referral-request-form.component';
import { MmrDashboardComponent } from './counselling-requests/mmr-dashboard/mmr-dashboard.component';
import { ConfidentialityFormComponent } from './counselling-requests/self-referral-request/confidentiality-form/confidentiality-form.component';
import { MyAppointmentsComponent } from './counselling-requests/my-appointments/my-appointments.component';
import { AssessmentFormComponent } from './counselling-requests/my-appointments/assessment-form/assessment-form.component';
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
import { AgendaRequestComponent } from './meeting-management/agenda-request/agenda-request.component';
import { MyMeetingsComponent } from './meeting-management/my-meetings/my-meetings.component';
import { FinanceEResourceRequestComponent } from './finance-view/finance-medical-library/finance-e-resource-request/finance-e-resource-request.component';
import { EResourceRequestComponent } from './medical-library/e-resource-request/e-resource-request.component';
import { RenewalComponent } from './medical-library/renewal/renewal.component';
import { PurchaseMedicalBooksComponent } from './medical-library/purchase-medical-books/purchase-medical-books.component';
import { FinanceRenewalComponent } from './finance-view/finance-medical-library/finance-renewal/finance-renewal.component';
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
import { SimulationWorkshopSchedulingComponent } from './simulation/simulation-workshop/simulation-workshop-scheduling/simulation-workshop-scheduling.component';
import { SimulationWorkshopSetupComponent } from './simulation/simulation-workshop/simulation-workshop-setup/simulation-workshop-setup.component';
import { SimulationWorkshopViewApplicationComponent } from './simulation/simulation-workshop/simulation-workshop-view-application/simulation-workshop-view-application.component';
import { SimulationWorkshopOrderFoodComponent } from './simulation/simulation-workshop/simulation-workshop-order-food/simulation-workshop-order-food.component';
import { SimulationCreateFormComponent } from './simulation/simulation-workshop/simulation-create-form/simulation-create-form.component';
import { SimulationCourseCreateFormComponent } from './simulation/simulation-course/simulation-course-create-form/simulation-course-create-form.component';
import { ResearchViewApplicationsComponent } from './research/research-view-applications/research-view-applications.component';
import { ResearchEthicalApprovalComponent } from './research/research-view-applications/research-ethical-approval/research-ethical-approval.component';
import { ResearchFundingOpportunitiesComponent } from './research/research-view-applications/research-funding-opportunities/research-funding-opportunities.component';
import { ResearchOtherFundingOpportunitiesComponent } from './research/research-view-applications/research-other-funding-opportunities/research-other-funding-opportunities.component';
import { ResearchConsultationRequestComponent } from './research/research-consultation-request/research-consultation-request.component';
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
import { ProgramBoothEvaluationComponent } from './research/research-day/booth-evaluation/program-booth-evaluation/program-booth-evaluation.component';
import { SectionBoothEvaluationComponent } from './research/research-day/booth-evaluation/section-booth-evaluation/section-booth-evaluation.component';
import { AdmissionComponent } from './admission/admission/admission.component';
import { AdmissionSetupComponent } from './admission/admission/admission-setup/admission-setup.component';
import { AdmissionSetupEvaluationFormComponent } from './admission/admission/admission-setup/admission-setup-evaluation-form/admission-setup-evaluation-form.component';
import { SponsorSetupComponent } from './admission/admission/sponsor-setup/sponsor-setup.component';
import { ViewApplicationsComponent } from './admission/admission/view-applications/view-applications.component';
import { AdmissionInterviewComponent } from './admission/admission/admission-interview/admission-interview.component';
import { ScholarshipSectionInterviewResultComponent } from './scholarship-section/scholarship-section-interview-result/scholarship-section-interview-result.component';
import { AdmissionInterviewResultComponent } from './admission/admission/admission-interview-result/admission-interview-result.component';
import { TransferComponent } from './admission/transfer/transfer.component';
import { TransferApplicationComponent } from './admission/transfer/transfer-application/transfer-application.component';
import { TransferViewApplicationComponent } from './admission/transfer/transfer-view-application/transfer-view-application.component';
import { InterruptionComponent } from './admission/interruption/interruption.component';
import { InterruptionApplicationComponent } from './admission/interruption/interruption-application/interruption-application.component';
import { InterruptionViewApplicationsComponent } from './admission/interruption/interruption-view-applications/interruption-view-applications.component';
import { WithdrawalComponent } from './admission/withdrawal/withdrawal.component';
import { WithdrawalApplicationComponent } from './admission/withdrawal/withdrawal-application/withdrawal-application.component';
import { WithdrawalViewApplicationComponent } from './admission/withdrawal/withdrawal-view-application/withdrawal-view-application.component';
import { RejoiningComponent } from './admission/rejoining/rejoining.component';
import { RejoiningApplicationFormComponent } from './admission/rejoining/rejoining-application-form/rejoining-application-form.component';
import { RejoiningApplicationListComponent } from './admission/rejoining/rejoining-application-list/rejoining-application-list.component';
import { SupplementaryTrainingComponent } from './admission/supplementary-training/supplementary-training.component';
import { SupplementaryTrainingApplicationFormComponent } from './admission/supplementary-training/supplementary-training-application-form/supplementary-training-application-form.component';
import { SupplementaryTrainingApplicationListComponent } from './admission/supplementary-training/supplementary-training-application-list/supplementary-training-application-list.component';
import { ApplicantApplicationsListComponent } from './applicant-view/applicant-applications-list/applicant-applications-list.component';
import { ApplicantRecidencyProgramApplicationsComponent } from './applicant-view/applicant-applications-list/applicant-recidency-program-applications/applicant-recidency-program-applications.component';
import { MmrDashboardMiniMedicalRecordComponent } from './counselling-requests/mmr-dashboard/mmr-dashboard-mini-medical-record/mmr-dashboard-mini-medical-record.component';
import { TraineeDatabaseComponent } from './scholarship-section/trainee-database/trainee-database.component';
import { ManageExamsComponent } from './examinations/manage-exams/manage-exams.component';
import { CreateExamComponent } from './examinations/manage-exams/create-exam/create-exam.component';
import { ViewExamDatesComponent } from './examinations/manage-exams/view-exam-dates/view-exam-dates.component';
import { ViewNotificationComponent } from './examinations/manage-exams/view-notification/view-notification.component';
import { ViewExamsComponent } from './examinations/manage-exams/view-exams/view-exams.component';
import { ViewRegistrationComponent } from './examinations/registration/view-registration/view-registration.component';
import { CreateRegistrationComponent } from './examinations/registration/create-registration/create-registration.component';
import { ViewWithdrawalRequestsComponent } from './examinations/withdrawal/view-withdrawal-requests/view-withdrawal-requests.component';
import { ViewResultsComponent } from './examinations/results/view-results/view-results.component';
import { ResultsComponent } from './examinations/results/results.component';
import { ViewAppealsComponent } from './examinations/results/view-appeals/view-appeals.component';
import { DashboardTemplateComponent } from './dashboards/dashboard-template/dashboard-template.component';
import { DashboardTraineeComponent } from './dashboards/dashboard-trainee/dashboard-trainee.component';
import { ProfessionalCompetiencyViewCourseComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-view-course/professional-competiency-view-course.component';
import { InnovationInitiativeComponent } from './innovation-centre/innovation-initiative/innovation-initiative.component';
import { PageInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/page-innovation-initiative/page-innovation-initiative.component';
import { PageProposalsInnovationInitiativeComponent } from './innovation-centre/innovation-initiative/page-proposals-innovation-initiative/page-proposals-innovation-initiative.component';
import { ProposalAssessmentResultsComponent } from './innovation-centre/innovation-initiative/proposal-assessment-results/proposal-assessment-results.component';
import { PageImmersiveInteractiveRoomComponent } from './innovation-centre/immersive-interactive-room/page-immersive-interactive-room/page-immersive-interactive-room.component';
import { PagePreventativeMaintenanceComponent } from './innovation-centre/preventative-maintenance/page-preventative-maintenance/page-preventative-maintenance.component';
import { PageRepairRequestsComponent } from './innovation-centre/repair-requests/page-repair-requests/page-repair-requests.component';
import { PageThreedObjectRequestComponent } from './innovation-centre/3d-object-request/page-threed-object-request/page-threed-object-request.component';
import { SelectTopicAndMentorComponent } from './research/select-topic-and-mentor/select-topic-and-mentor.component';
import { PageProposalReviewComponent } from './research/proposal-review/page-proposal-review/page-proposal-review.component';
import { PageResearchEvaluationComponent } from './research/research-evaluation/page-research-evaluation/page-research-evaluation.component';
import { PageInterimReportComponent } from './research/submit-interim-report/page-interim-report/page-interim-report.component';
import { PageFinalProposalsComponent } from './research/submit-final-proposal/page-final-proposals/page-final-proposals.component';
import { ProfessionalCompetiencyCoursesComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-courses.component';
import { ProfessionalCompetiencyViewCourseReviewsComponent } from './professional-competiency/professional-competiency-courses/professional-competiency-view-course-reviews/professional-competiency-view-course-reviews.component';
import { VerificationPageComponent } from './vehpc/verification/verification-page/verification-page.component';
import { ViewUnmatchedVerificationsComponent } from './vehpc/verification/view-unmatched-verifications/view-unmatched-verifications.component';
import { EquivalencyComponent } from './vehpc/equivalency/equivalency.component';
import { PageEquivalencyRequestsComponent } from './vehpc/equivalency/page-equivalency-requests/page-equivalency-requests.component';
import { PageEquivalencyAppealsComponent } from './vehpc/equivalency/page-equivalency-appeals/page-equivalency-appeals.component';
import { OcManageExamsComponent } from './oc-examinations/oc-manage-exams/oc-manage-exams.component';
import { OcPageExamsComponent } from './oc-examinations/oc-manage-exams/oc-page-exams/oc-page-exams.component';
import { OcViewExamDatesComponent } from './oc-examinations/oc-manage-exams/oc-view-exam-dates/oc-view-exam-dates.component';
import { OcViewRegistrationComponent } from './oc-examinations/oc-registration/oc-view-registration/oc-view-registration.component';
import { OcCreateRegistrationComponent } from './oc-examinations/oc-registration/oc-create-registration/oc-create-registration.component';
import { OcViewWithdrawalRequestComponent } from './oc-examinations/oc-withdrawal/oc-view-withdrawal-request/oc-view-withdrawal-request.component';
import { OcViewRescheduleComponent } from './oc-examinations/oc-reschedule/oc-view-reschedule/oc-view-reschedule.component';
import { OcViewResultsComponent } from './oc-examinations/oc-result/oc-view-results/oc-view-results.component';
import { OcImportResultsComponent } from './oc-examinations/oc-result/oc-import-results/oc-import-results.component';
import { OcViewAppealsComponent } from './oc-examinations/oc-result/oc-view-appeals/oc-view-appeals.component';
import { OcResultComponent } from './oc-examinations/oc-result/oc-result.component';
import { OcDefineReportsComponent } from './oc-examinations/oc-reports/oc-define-reports/oc-define-reports.component';
import { OcViewReportsComponent } from './oc-examinations/oc-reports/oc-view-reports/oc-view-reports.component';
import { OcReportsComponent } from './oc-examinations/oc-reports/oc-reports.component';
import { OcViewCertificatesRequestComponent } from './oc-examinations/oc-certificates-request/oc-view-certificates-request/oc-view-certificates-request.component';
import { ChiefResidentsAffairsComponent } from './tafus/chief-residents-affairs/chief-residents-affairs.component';
import { NominateChiefResidentsComponent } from './tafus/chief-residents-affairs/nominate-chief-residents/nominate-chief-residents.component';
import { ViewChiefResidentsComponent } from './tafus/chief-residents-affairs/view-chief-residents/view-chief-residents.component';
import { AnnualIncentivesComponent } from './tafus/chief-residents-affairs/annual-incentives/annual-incentives.component';
import { TerminationsComponent } from './tafus/terminations/terminations.component';
import { TerminateResidentsComponent } from './tafus/terminations/terminate-residents/terminate-residents.component';
import { AcademicActivitiesComponent } from './tafus/academic-activities/academic-activities.component';
import { ResearchDayIncentivesForJudgesComponent } from './tafus/academic-activities/research-day-incentives-for-judges/research-day-incentives-for-judges.component';
import { ResearchDayRewardWinnersComponent } from './tafus/academic-activities/research-day-reward-winners/research-day-reward-winners.component';
import { VisitingExpertsComponent } from './tafus/academic-activities/visiting-experts/visiting-experts.component';
import { AcademicActivityRequestsComponent } from './tafus/academic-activities/academic-activity-requests/academic-activity-requests.component';
import { LettersRequestsComponent } from './tafus/letters/letters-requests/letters-requests.component';
import { CertificateRequestsComponent } from './tafus/certificates/certificate-requests/certificate-requests.component';
import { IdCardsRequestsComponent } from './tafus/id-cards/id-cards-requests/id-cards-requests.component';
import { SurgicalFoundationProgramComponent } from './simulation/simulation-workshop/surgical-foundation-program/surgical-foundation-program.component';
import { SimulationFacilitiesForRentComponent } from './simulation/simulation-facilities-for-rent/simulation-facilities-for-rent.component';
import { EducationCommitteeComponent } from './education-committee/education-committee.component';
import { EcAddMembersComponent } from './education-committee/ec-add-members/ec-add-members.component';
import { EcRemoveMembersComponent } from './education-committee/ec-remove-members/ec-remove-members.component';
import { EcAddFacultyMemberComponent } from './education-committee/ec-add-faculty-member/ec-add-faculty-member.component';
import { EcRemoveFacultyMemberComponent } from './education-committee/ec-remove-faculty-member/ec-remove-faculty-member.component';
import { ChangePositionComponent } from './education-committee/change-position/change-position.component';
import { EcAnnualIncentivesComponent } from './education-committee/ec-annual-incentives/ec-annual-incentives.component';
import { GraduationListsComponent } from './tafus/graduation-lists/graduation-lists.component';
import { TraineeSelectionPageComponent } from './tafus/graduation-lists/trainee-selection-page/trainee-selection-page.component';
import { GraducationAchievementsPageComponent } from './tafus/graduation-lists/graducation-achievements-page/graducation-achievements-page.component';
import { ExtensionRequiredListComponent } from './tafus/graduation-lists/extension-required-list/extension-required-list.component';

const routes: Routes = [
    //Default Routing
    { path: "dashboard", component: DashboardComponent },
    { path: "dashboard-2", component: DashboardTemplateComponent },
    { path: "dashboard-trainee", component: DashboardTraineeComponent },
    { path: "residency-block-diagram", component: ResidentBlockDiagramComponent },
    { path: "rotation-page-resident-mapping", component: RotationPageResidentMappingComponent },
    { path: "forms", children: [
      { path: "trainer-evaluation-form", component: TrainerEvaluationFormComponent },
      { path: "research-mentor-evaluation-form", component: ResearchMentorEvaluationFormComponent },
      { path: "rotation-evaluation-form", component: RotationEvaluationFormComponent },
      { path: "in-training-evaluation-form", component: InTrainingEvaluationReportComponent },
      { path: "presentation-evaluation-form", component: PresentationEvaluationFormComponent },
      { path: "six-month-and-annual-evaluation-form", component: SixMonthAndAnnualEvaluationFormComponent },
      
    ] },
    { path: "curriculum", children: [
        { path: "", component: EcSetupComponent },
        { path: "create-program", component: CreateProgramComponent },
        { path: "view-program", component: ViewProgramComponent },
        { path: "add-rotation", component: AddRotationComponent },
        { path: "view-rotation", component: PreviewRotationComponent },
        { path: "allocate-procedure", component: AllocateProcedureComponent },
      ] 
    },

    {
      path: 'graduate-medical-education', loadChildren: () => import('./graduate_medical_education/medical-education.module').then(m => m.AppsModule)
    },

    { path: "duty-hours", children: [
        { path: "grid", component: LogHoursComponent },
        { path: "view", component: ViewHoursComponent },
      ] 
    },
    { path: "leave-application", children: [
        { path: "", component: LeaveApplicationComponent },
        { path: "leave-request", component: LeaveRequestFormComponent },
        { path: "leave-return-application", component: LeaveReturnApplicationComponent },
      ] 
    },

    { path: "log-procedures", component: LogProcedureComponent },

    { path: "counselling", children: [
      { path: "self-referral", children : [
        {path : "", component: SelfReferralRequestComponent},
        { path: "self-referral-request-form", component: SelfReferralRequestFormComponent },
        { path: "confidentiality-form", component: ConfidentialityFormComponent },
        { path: "confidentiality-form-two", component: ConfidentialityFormTwoComponent }
      ] },
      { path: "program-referral", children : [
        {path : "", component: ProgramReferralRequestComponent},
        {path : "program-referral-request-form", component: ProgramReferralRequestFormComponent}
      ] },
      { path: "mmr-dashboard", children : [
        {path : "", component: MmrDashboardComponent},
        {path : "mini-medical-record", component: MmrDashboardMiniMedicalRecordComponent},
      ] },
      { path: "my-appointments", children : [
        {path : "", component: MyAppointmentsComponent},
        {path : "assessment-form", component: AssessmentFormComponent },
      ] },  
    ]},

    { path: "scholarship", children : [
      { path : "scholarship-section", component: ScholarshipSectionComponent },
      { path : "create-program-type", component: CreateProgramTypeComponent },
      { path : "create-program", component: CreateScholarshipProgramComponent },
      { path : "view-applications", component: ViewScholarshipApplicationsComponent },
      { path : "show-application-form", component: ScholarshipApplicationFormComponent },
      { path : "view-acceptance-letter", component: ViewAcceptanceLetterComponent },
      { path : "international-trainee-applications", component: InternationalTraineeApplicationsViewComponent },
      { path : "trainee-database", component: TraineeDatabaseComponent },
      { path : "interview-result", component: ScholarshipSectionInterviewResultComponent },
    ]},

    { path: "meeting-management", children : [
      { path : "configuration", component: DefineMeetingTypesComponent },
      { path : "invite", component: MeetingInviteComponent },
      { path : "view-meetings", component: MeetingTableViewComponent },
      { path : "view", component: MeetingViewComponent },
      { path : "agenda-request", component: AgendaRequestComponent },
      { path : "my-meetings", component: MyMeetingsComponent },
    ]},

    { path: "medical-library", children : [
      { path: "e-resource-request", component: EResourceRequestComponent },
      { path: "renewal", component: RenewalComponent },
      { path: "purchase-medical-books", component: PurchaseMedicalBooksComponent },
    ]},

    { path: "simulation", children : [
      { path: "course", children:[
        { path: "", component: SimulationCourseComponent },
        { path: "course-setup", component: SimulationCourseSetupComponent },
        { path: "scheduling", component: SimulationSchedulingComponent },
        { path: "view-application", component: SimulationViewApplicationsComponent },
        { path: "order-food", component: SimulationOrderFoodComponent },
        { path: "refund-management", component: SimulationRefundManagementComponent },
        { path: "create-form", component: SimulationCourseCreateFormComponent },
      ] },
      { path: "workshop", children: [
        { path: "", component: SimulationWorkshopComponent},
        { path: "workshop-setup", component: SimulationWorkshopSetupComponent },
        { path: "scheduling", component: SimulationWorkshopSchedulingComponent },
        { path: "view-application", component: SimulationWorkshopViewApplicationComponent },
        { path: "order-food", component: SimulationWorkshopOrderFoodComponent },
        { path: "create-form", component: SimulationCreateFormComponent },
        { path: "surgical-foundation-program-scores", component: SurgicalFoundationProgramComponent },
      ] },
      { path: "standardized-patients", component: SimulationStandardizedPatientsComponent },
      { path: "facilities-for-rent", component: SimulationFacilitiesForRentComponent }
    ]},

    { path: "research", children : [
      { path: "view-application", children: [
        { path: "", component: ResearchViewApplicationsComponent},
        { path: "ethical-approval", component: ResearchEthicalApprovalComponent },
        { path: "research-funding-opportunities", component: ResearchFundingOpportunitiesComponent },
        { path: "research-other-funding-opportunities", component: ResearchOtherFundingOpportunitiesComponent },
      ] },
      { path: "consultation-request", component: ResearchConsultationRequestComponent },
      { path: "research-day", children: [
        { path : "", component: ResearchDayComponent},
        { path : "program-nomination", component: ProgramNominationComponent},
        { path : "upload-presentation", component: UploadPresentationComponent},
        { path : "competition-grouping", component: CompetitionGroupingComponent},
        { path : "presentation-evaluation", children: [
          { path : "", component: PresentationEvaluationComponent},
          { path : "evaluation-form-oral-presentation", component: EvaluationFormOralPresentationComponent},
          { path : "evaluation-form-poster-presentation", component: EvaluationFormPosterPresentationComponent},
        ]},
        { path : "presentation-evaluation-result", component: PresentationEvaluationResultComponent},
        { path : "booth-evaluation", children: [
          { path : "", component: BoothEvaluationComponent},
          { path : "program-booth-evaluation", component: ProgramBoothEvaluationComponent },
          { path : "section-booth-evaluation", component: SectionBoothEvaluationComponent },
        ] },
        { path : "booth-evaluation-result", component: BoothEvaluationResultComponent },
      ] },
      { path: "select-topic-and-mentor", component: SelectTopicAndMentorComponent },
      { path: "proposal-review", component: PageProposalReviewComponent },
      { path: "research-evaluations", component: PageResearchEvaluationComponent },
      { path: "interim-report", component: PageInterimReportComponent },
      { path: "final-report", component: PageFinalProposalsComponent },

    ]},

    { path : 'admission', children: [
      { path : 'admission', children: [
        {path : "", component :  AdmissionComponent },
        {path : "admission-setup", component :  AdmissionSetupComponent },
        {path : "sponsor-setup", component :  SponsorSetupComponent },
        {path : "view-application", component :  ViewApplicationsComponent },
        {path : "interview", component :  AdmissionInterviewComponent },
        {path : "interview-result", component :  AdmissionInterviewResultComponent }
      ]},
      { path : 'transfer', children: [
        {path : "", component :  TransferComponent },
        {path : "application", component :  TransferApplicationComponent },
        {path : "view-application", component :  TransferViewApplicationComponent },
      ]},
      { path : 'interruption', children: [
        {path : "", component :  InterruptionComponent },
        {path : "application", component :  InterruptionApplicationComponent },
        {path : "view-application", component :  InterruptionViewApplicationsComponent },
      ]},
      { path : 'withdrawal', children: [
        {path : "", component :  WithdrawalComponent },
        {path : "application", component :  WithdrawalApplicationComponent },
        {path : "view-application", component :  WithdrawalViewApplicationComponent },
      ]},
      { path : 'rejoining', children: [
        {path : "", component :  RejoiningComponent },
        {path : "application", component :  RejoiningApplicationFormComponent },
        {path : "view-application", component :  RejoiningApplicationListComponent },
      ]},
      { path : 'supplementary-training', children: [
        {path : "", component :  SupplementaryTrainingComponent },
        {path : "application", component :  SupplementaryTrainingApplicationFormComponent },
        {path : "view-application", component :  SupplementaryTrainingApplicationListComponent },
      ]},
    ]},

    { path : 'examinations', children: [
      { path : 'manage-exams', children: [
        {path : "", component :  ManageExamsComponent },
        {path : "view-exam", children : [
          { path : "", component :  ViewExamsComponent },
          { path : "view-exam-dates", component :  ViewExamDatesComponent },
          { path : "view-notifications", component :  ViewNotificationComponent }
        ] },
      ]},
      { path: 'registration', children : [
        { path : "", component :  ViewRegistrationComponent },
        { path : "create-registration", component :  CreateRegistrationComponent },
      ] },
      
      { path: 'withdrawal', component :  ViewWithdrawalRequestsComponent },
      { path: 'results', children:[
        { path: '',  component :  ResultsComponent},
        { path: 'view-results',  component :  ViewResultsComponent},
        { path: 'view-appeals',  component :  ViewAppealsComponent}
      ] },
    ]},
    { path : 'oc-examinations', children: [
      { path : 'manage-exams', children: [
        {path : "", component :  OcManageExamsComponent},
        {path : "view-exam", children: [
          { path : "", component :  OcPageExamsComponent },
          { path : "view-exam-dates", component :  OcViewExamDatesComponent },
        ]},
      ]},
      { path: 'registration', children : [
        { path : "", component :  OcViewRegistrationComponent },
        { path : "create-registration", component :  OcCreateRegistrationComponent }
      ] },
      { path: 'withdrawal', component :  OcViewWithdrawalRequestComponent },
      { path: 'reschedule', component :  OcViewRescheduleComponent },
      { path: 'results', children:[
        { path: '',  component :  OcResultComponent},
        { path: 'view-results',  component :  OcViewResultsComponent},
        { path: 'view-appeals',  component :  OcViewAppealsComponent},
        { path: 'import-results',  component :  OcImportResultsComponent},
      ] },
      { path: 'reports', children : [
        { path : "", component :  OcReportsComponent },
        { path : "define-reports", component :  OcDefineReportsComponent },
        { path : "view-reports", component :  OcViewReportsComponent }
      ] },
      { path: 'certificates', component :  OcViewCertificatesRequestComponent },

    ]},
    { path : 'vehpc', children: [
      { path : 'verification', children:[
        { path: '',  component :  VerificationPageComponent},
        { path: 'view-unmatched-verifications',  component :  ViewUnmatchedVerificationsComponent},

      ]},
      { path : 'equivalency', children:[
        { path: '',  component :  EquivalencyComponent},
        { path: 'page-equivalency-requests',  component :  PageEquivalencyRequestsComponent},
        { path: 'page-equivalency-appeals',  component :  PageEquivalencyAppealsComponent},

      ]}
    ]},
    { path : 'professional-competiency', children: [
      { path: 'courses',  children:[
        { path: '',  component :  ProfessionalCompetiencyCoursesComponent},
        { path: 'course-requests',  component :  ProfessionalCompetiencyViewCourseComponent},
        { path: 'course-review-requests',  component :  ProfessionalCompetiencyViewCourseReviewsComponent},

      ]},
    ]},
    { path : 'innovation-centre', children: [
      { path: 'innovation-initiative',  children : [
        { path: '',  component :  InnovationInitiativeComponent},
        { path: 'page-innovation-initiative',  component : PageInnovationInitiativeComponent },
        { path: 'page-proposals-innovation-initiative',  component : PageProposalsInnovationInitiativeComponent},
        { path: 'proposal-assessment-result',  component : ProposalAssessmentResultsComponent}
      ]},
      { path: 'immersive-interactive-room',  component :  PageImmersiveInteractiveRoomComponent},
      { path: 'preventative-maintenance',  component :  PagePreventativeMaintenanceComponent},
      { path: 'repair-requests',  component :  PageRepairRequestsComponent},
      { path: '3d-object-request',  component :  PageThreedObjectRequestComponent},
    ]},
    { path : 'tafus', children: [
      { path: 'chief-residents-affairs',  children:[
        { path: '',  component :  ChiefResidentsAffairsComponent},
        { path: 'nominate-chief-residents',  component :  NominateChiefResidentsComponent},
        { path: 'view-chief-residents',  component :  ViewChiefResidentsComponent},
        { path: 'annual-incentives',  component :  AnnualIncentivesComponent},
      ]},
      { path: 'terminations',  children:[
        { path: '',  component :  TerminationsComponent},
        { path: 'terminate-residents',  component :  TerminateResidentsComponent},
      ]},
      { path: 'academic-activities',  children:[
        { path: '',  component :  AcademicActivitiesComponent},
        { path: 'research-day-incentives-judges',  component :  ResearchDayIncentivesForJudgesComponent},
        { path: 'research-day-reward-winners',  component :  ResearchDayRewardWinnersComponent},
        { path: 'visiting-experts',  component :  VisitingExpertsComponent},
        { path: 'academic-activities-request',  component :  AcademicActivityRequestsComponent},
      ]},
      { path: 'letters',  children:[
        { path: '',  component :  LettersRequestsComponent},
      ]},
      { path: 'request-certificates',  children:[
        { path: '',  component :  CertificateRequestsComponent},
      ]},
      { path: 'id-replacement',  children:[
        { path: '',  component :  IdCardsRequestsComponent},
      ]},
      { path: 'graduation',  children:[
        { path: '',  component :  GraduationListsComponent},
        { path: 'trainee-selection',  component :  TraineeSelectionPageComponent},
        { path: 'graduation-achievements',  component :  GraducationAchievementsPageComponent},
        { path: 'extension-need',  component :  ExtensionRequiredListComponent},
      ]},
    ]},
    { path : 'education-committee', children: [
      { path: '',  component :  EducationCommitteeComponent},
      { path: 'add-members',  component :  EcAddMembersComponent},
      { path: 'remove-members',  component :  EcRemoveMembersComponent},
      { path: 'add-fc-members',  component :  EcAddFacultyMemberComponent},
      { path: 'remove-fc-members',  component :  EcRemoveFacultyMemberComponent},
      { path: 'change-position',  component :  ChangePositionComponent},
      { path: 'annual-incentive',  component :  EcAnnualIncentivesComponent},
      
    ]},

    { path: "employer", children : [
      { path: "dashboard", component: DashboardsEmployerComponent },
      { path: "employer-view-applications", component: ScholarshipApplicationViewComponent },
    ]},
    
    //Interviewer Routing
    { path: "interviewer", children : [
      { path: "dashboard", component: DashboardInterviewerComponent },
      { path: "show-application-form", component: ShowApplicationFormComponent },
      { path: "evaluation-form", component: InterviewEvaluationFormComponent },
      { path: "interview-result", component: InterviewResultComponent }
    ] },

    //Applicant Routing
    { path: "applicant", children : [
      { path: "application-list", children: [
        { path: "", component: ApplicantApplicationsListComponent },
        { path: "residency-program-applications", component: ApplicantRecidencyProgramApplicationsComponent }
      ] }
    ] },
    
    //Finance Routing
    { path: "finance", children : [
      { path: "dashboard", component: FinanceDashboardComponent },
      { path: "scholarship-application-view", component: FinanceScholarshipApplicationViewComponent },
      { path: "view-acceptance-letter", component: FinanceViewAcceptanceLetterComponent },
      { path: "medical-library", children: [
        { path: "e-resource-request", component: FinanceEResourceRequestComponent },
        { path: "renewal", component: FinanceRenewalComponent },
      ] },
      { path: "simulation", children : [
        { path: "course", children:[
          { path: "", component: FinanceCourseComponent },
          { path: "order-food", component: FinanceOrderFoodComponent },
          { path: "refund-management", component: FinanceRefundManagementComponent }
        ] },
        { path: "facilities-for-rent", component: SimulationFacilitiesForRentComponent }
      ]},
    ] },
   
    //International Routing
    { path: "international", children : [
      { path: "dashboard", component: DashboardInternationalTraineeComponent},
      { path: "application", component: ApplicationInternationalTraineeComponent},
    ] },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
