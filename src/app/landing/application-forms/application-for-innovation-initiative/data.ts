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
  maritalStatus: [
    { name: "Married", value: "married" },
    { name: "Unmarried", value: "unmarried" },
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
    { name: "MD", value: "MD" },
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
  nationalities : Nationalities.nationalities
};

export { data };
