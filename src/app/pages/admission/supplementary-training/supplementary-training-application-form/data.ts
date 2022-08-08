/**
 * Stat Counder Data
 */

import { Countries } from "src/app/enums/countries";
import { Nationalities } from "src/app/enums/nationality";

const data = {
  gender: [
    { name: "Male", value: "male" },
    { name: "Female", value: "Female" },
  ],
  wilayatList: [
    { name: "Value 1", value: "value_1" },
    { name: "Value 2", value: "value_2" },
  ],
  examType: [
    { name: "OMSB Selection Exam", value: "OMSB_Selection_Exam" },
    { name: "MFD", value: "MFD" },
  ],
  governorateList: [
    { name: "Value 1", value: "value_1" },
    { name: "Value 2", value: "value_2" },
  ],
  educationInstitutesList: [
    { name: "Sultan Qaboos Univestiry", value: "Sultan_Qaboos_Univestiry" },
    { name: "Oman Medical College ", value: "Oman_Medical_College" },
    { name: "Arabian Gulf University ", value: "Arabian_Gulf_University" },
    {
      name: "Royal College of Surgeons in Ireland ",
      value: "Royal_College_of_Surgeons_in Ireland",
    },
    { name: "Other", value: "other" },
  ],
  degreeList: [
    { name: "MBBS", value: "MBBS" },
    { name: "BMBS", valu0e: "BMBS" },
    { name: "Other", value: "other" },
  ],
  currentPositionList: [
    { name: "Intern", value: "intern" },
    { name: "GFP", value: "GFP" },
    {
      name: "Medical Officer/ Medical House Officer ( MO/SHO)",
      value: "Medical_Officer/Medical_House_Officer_(MO/SHO)",
    },
  ],
  employmentStatus: [
    { name: "Employed", value: "employed" },
    { name: "Unemployed", value: "unemployed" },
  ],
  jobTitle: [
    { name: "Assistant", value: "doctor" },
    { name: "Medical Officer", value: "medical_officer" },
    { name: "Senior Medical Officer", value: "senior_medical_office" },
    { name: "Other", value: "other" },
  ],
  sectorType: [
    { name: "Government", value: "government" },
    { name: "Private", value: "private" },
  ],
  privateSectorList: [{ name: "Government", value: "government" }],
  positions : [ 'Intern', 'GFP', 'Medical Officer'
  ],
  trainingProgramsList : [
    { name: "None", value: "None" },
    { name: "Anesthesia", value: "Anesthesia" },
    { name: "Biochemistry", value: "Biochemistry" },
    { name: "Dermatology", value: "Dermatology" },
    { name: "Emergency Medicine", value: "Emergency Medicine" }
  ],
  labCoatSize : [
    { name: 'XS', value: 'XS' },
    { name: 'S', value: 'S' },
    { name: 'M', value: 'M' },
    { name: 'L', value: 'L' },
    { name: 'XL', value: 'XL' },
    { name: 'XXL', value: 'XXL' }
  ],
  countryList : Countries.countryList,
  nationalities : Nationalities.nationalities,
  formObjectValues : {
        name : 'Al Abri Ibraham',
        birthday : '1985-05-15',
        nationality : 'OM',
        nationalIDNo : '9785131321',
        passportNo : '8431321218',
        maritalStatus : 'Married',
        permanentAddress : 'Al Abri Ibraham, Muscat, Oman',
        wilayatOrRegion : 'value_1',
        mobileNumber : '32132131',
        nameNextKin : 'Abdel Maddali',
        contactNextKin : '55132131',
        diseases  : 'None',

        isEmployed  : 'Employed',
        nameOfInstitution  : 'Khoula Hospital',
        department  : 'ENT',
        currentPosition  : 'Trainee',

        oneYearSupplementaryTraining: 'Anesthesia',

        postGraduateQualifications  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatum consequuntur, id temporibus necessitatibus neque.',
        postGraduateTrainingExperience  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatum consequuntur, id temporibus necessitatibus neque.',
  
        sponsorship  : 'MOH',

        secondarySchool : [
          {
            school : 'International School of Muscat (TAISM)',
            startDate : '1998-10-15',
            endDate : '2008-10-10',
            country : 'OM',
          }
        ],

        medicineSchool: [
          {
            school : 'International School of Muscat (TAISM)',
            startDate : '1998-10-15',
            endDate : '2008-10-10',
            country : 'OM',
          }
        ],
        clinicalElectives: [
          {
            department : 'ENT',
            date : '2020-10-10',
          }
        ],
        certificateCourses : {
          blsCertificateExpiry : '2025-05-15',
          aclsCertificateExpiry : '2025-05-15'
        },
        internship : [
          {
            startDate : '2015-09-15',
            endDate : '2019-09-15',
            institution : 'Khoula Hospital',
            country : 'OM'
          }
        ],
        research : [
          {
            projectTitle : 'Project Title 1',
            position : 'Position - 1',
            inclusiveDates : '2022-09-15',
            institution : 'Khoula Hospital',
            department : 'ENT',
            mentor : 'Abu Nasser'
          }
        ],
        publications : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos temporibus officiis tenetur, dolorem aliquid recusandae possimus culpa officia asperiores cum, inventore necessitatibus.',
        presentations : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos temporibus officiis tenetur, dolorem aliquid recusandae possimus culpa officia asperiores cum, inventore necessitatibus.',
        honorsAndAwards : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis deleniti accusamus voluptatem blanditiis autem placeat totam, nobis vel vitae!',
        communityService: [
          {
            fromDate : '2018-05-01',
            toDate : '2020-05-01',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quibusdam eligendi similique odit minus cumque laudantium?',
          }
        ],
        assessmentUploadLink: 'link'
  },
  tableData : [
    {
        civilId: '98213543213',
        name: 'Abdel Maddali',
        ombsNumber: '255-19',
        status : 'Applied',
        applicationStatus : [
            { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
            { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
            { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
            { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Abu Nasser'},
            { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
        ]
    },
    {
        civilId: '98213543213',
        name: 'Abdel Maddali',
        ombsNumber: '255-19',
        status : 'Applied',
        applicationStatus : [
            { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
            { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
            { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Abu Nasser'},
        ]
    }
],
};

export { data };
