import { Countries } from "src/app/enums/countries";
import { Nationalities } from "src/app/enums/nationality";

const data = {
  countryList: Countries.countryList,
  nationalities: Nationalities.nationalities,
  residencyType: [
    "Omani National",
    "Non-Omani with Omani Resident ID",
    "Non-Omani residing outside Oman",
  ],
  membershipType: [
    "Staff",
    "Faculty",
    "GFP Trainee",
    "Residency Trainee",
    "Fellowship Trainee",
    "Program Director",
    "Program Administrator",
    "Committee Member",
    "Subject Matter Expert",
  ],
  gender: [
    { name: "Male", value: "male" },
    { name: "Female", value: "Female" },
  ],
  profession: [],
  specialty: [
    "Medical",
    "Nursing",
    "Pharmacy",
    "Dental",
    "Optical",
    "Veterinary",
    "Public Health",
    "Radiography",
    "Rehabilitation Therapies",
    "Complementary Therapies",
    "Other Health",
    "Other",
  ],
  jobTitle : ['Doctor', 'Non-applicable '],
  sector: ['Government', 'Private', 'Non-Applicable'],
  governmentSectorInstitutes: ['Armed Forces', 'Diwan Medical Service', 'Other'],
  privateSectorInstitutes: ['Other'],
  regions: ['Value 1', 'Value 2', 'Value 3'],
  universities : [
    'Value 1', 'Other'
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