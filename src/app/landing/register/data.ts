import { Countries } from "src/app/enums/countries";
import { Nationalities } from "src/app/enums/nationality";
import { sharedData } from "src/app/shared/data/shared.data";

const data = {
  residencyStatus: [
    "Omani National",
    "Non Omani with a Civil ID",
    "Non Omani with no Civil ID",
  ],
  countryList: Countries.countryList,
  nationalities: Nationalities.nationalities,
  role: [
    'Staff',
    'Faculty',
    'Trainee',
    'Subject Matter Expert',
    'Counsellor',
    'Authorized user from Medical Institutions'
  ],
  purposes : [
    'Join as a new Faculty/Education Committee member',
    'Join as counsellor',
    'Join as Subject Matter Expert',
    'Authorized user from Medical Institutions',
    'Join Interview or judging panel',
    'Apply for OMSB programs',
    'Apply for Scholarships',
    'Apply for Research Consultation',
    'Apply for Courses for Healthcare professionals',
    'Apply for verification of Certificates',
    'Register for Occupational Classification Exams',
    'Apply for Simulation Center Services',
    'Apply for Innovation Center Services',
    'Apply for Accreditation of Events'
  ],
  departments : [
    {
      name : 'Public relations and international cooperation department',
      sections : [ 'Scholarships Affairs Section']
    },
    {
      name : 'Documents Department',
      sections : [ 
        'Post and document organizing section',
        'Archiving department'
      ]
    },
    {
      name : 'Medical Simulation and Innovation Center',
      sections : [
        'Simulation Programs Section',
        'Skills development Section',
        'Research Section',
        'Education Environment and Innovation Section',
        'Medical library'
      ]
    },
    {
      name : 'General Medical Education Department',
      sections : [
        'Curriculum and Faculty Development section',
        'Assessment and Performance Section',
        'Institutional & Education programs Accreditation Section',
        'General Foundation Program Section',
        'Educational Committees Section'
      ]
    },
    {
      name : 'Trainee affairs Department',
      sections : [
        'Admission and Registration Section',
        'Trainee Affairs Follow-up Section',
        'Counseling and Guidance Section'
      ]
    },
    {
      name : 'Finance Affairs Department',
      sections : [
        'Budget Department',
        'Financial department',
        'Treasury Department',
        'Purchasing and Contracts Department'
      ]
    },
    {
      name : 'Accreditation Department',
      sections : [ 'Continuing Professional Development Section' ]
    },
    {
      name : 'Professional Competency Department',
      sections : [
        'Verification & Equivalency of Health Professionals Certificates Section',
        'Occupational Classification Testing Section',
        'Professional Competence Assurance Section'
      ]
    },
    {
      name : 'Examination Department',
      sections : [
        'Written Exam Section',
        'Clinical Examinations Department',
        'Question department',
        'Examination Organizing department'
      ]
    }
  ],
  positions : [
    "Staff",
    "Faculty",
    "GFP Trainee",
    "Residency Trainee",
    "Fellowship Trainee",
    "Program Director",
    "Program Administrator",
    "Committee Member",
    "Subject Matter Expert",
    'Other'
  ],
  programs : [ 'Anesthesia', 'ENT', 'Medical Microbiology', 'Histopathology', 'General Surgery' ],
  programTypes : sharedData.programTypes,

  specialtyPrograms : sharedData.specialtyPrograms,
  fellowshipPrograms : sharedData.fellowshipPrograms,
  gfpPrograms : sharedData.gfpPrograms,
  rolesOther: [
    'Faculty-Full Load',
    'Faculty-Partial- Load',
    'Faculty-assistance',
    'Faculty-non physician',
    'Chairperson',
    'Program Director',
    'Asst. Program Director',
    'EC Member'
  ],
  purposesOther : [
    'Specialty Admission Interview panel',
    'Scholarship selection interview panel',
    'Career Day judging panel'
  ],
  qualifications:[
    'BSC',
    'Other'
  ],
  institution : [

  ],
  professions : [
    'Doctors/Physicians',
    'Dentists',
    'Nurses and Midwives',
    'Pharmacists',
    'Medical/Health Assistants',
    'Physiotherapists',
    'Sanitary Inspectors/Supervisors',
    'Radiographers',
    'Laboratory Technicians',
    'Assistant Pharmacists/Dispensers',
    'Medical Orderlies',
    'Other Para-Medical Staff',
    'Other Technical Staff',
    'Other Support Staff',
    'Teachers/Tutors',
    'Health Administrators',
    'Other'
  ],
  primarySpecialty : [
    'Medical',
    'Nursing',
    'Pharmacy',
    'Dental',
    'Optical',
    'Veterinary',
    'Public Health',
    'Radiography',
    'Rehabilitation Therapies',
    'Complementary Therapies',
    'Other Health',
    'Other'
  ],
  jobDesignations : [
    'Senior Consultant',
    'Consultant',
    'Senior Specialist',
    'Specialist A',
    'Specialist B',
    'Specialist C',
    'Senior Medical Officer',
    'Medical Officer',
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Lecturer',
    'Program Director',
    'Assistant Program Director',
    'Program Trainer',
    'Director General',
    'Deputy Director General',
    'Department Director',
    'Head of Clinical Unit',
    'Resident',
    'Intern',
    'Assistant',
    'Specialist',
    'Clinical',
    'Academic',
    'Other'
  ],
  primaryWorkPlaceSectors : [
    'Value 1',
    'Other'
  ],
  primarySectorNames : [
    'Value 1',
    'Other'
  ],
  primaryWorkRegions : [
    'Value 1',
    'Other'
  ],
  

  intakeYears : getIntakeYears()
};

function getIntakeYears() {
  const currentYear = new Date().getFullYear(), years = [];
  let startYear = 1980;  
  let intakeYears = [];
  while ( startYear <= currentYear ) {
      intakeYears.push(startYear++);
  }  
  return intakeYears.reverse()
}

export { data };