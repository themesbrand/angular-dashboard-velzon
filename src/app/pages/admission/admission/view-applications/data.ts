import { Countries } from "src/app/enums/countries";
import { Nationalities } from "src/app/enums/nationality";

const data = {
    applicationTableDate : [
        {
            fullName : 'Madan Al Abri',
            program :  'Anaesthesia',
            programType : 'Value 1',
            sponsoredBy : 'MOH',
            email : 'Madan@email.com',
            contactNumber : '+9681224568',
            blsExpiryDate : '2029-02-06',
            aclsExpiryDate : '2029-05-06',
            selectionExamScore :  20.1,
            status : 'Applied',
            action: 'red',
            applicationStatus : [
              { stage : 'Applied', status : 'Submit', date : '2022-05-06 10:00:00 AM', by : 'Madan Al Abri'},
              { stage : 'Shortlisted for Interview', status : 'Pending', date : null, by : null }
            ]
        },
        {
            fullName : 'Saleh Mahfoudh',
            program :  'Anaesthesia',
            programType : 'Value 1',
            sponsoredBy : 'MOH',
            email : 'Saleh@email.com',
            contactNumber : '+9689994568',
            blsExpiryDate : '2028-02-16',
            aclsExpiryDate : '2028-01-16',
            selectionExamScore :  20.1,
            status : 'Shortlisted for Interview',
            action: 'green',
            applicationStatus : [
              { stage : 'Applied', status : 'Submit', date : '2022-05-06 10:00:00 AM', by : 'Saleh Mahfoudh'},
              { stage : 'Shortlisted for Interview', status : 'Submit', date : '2022-05-06 10:00:00 AM', by : 'Abdel Maddali'}
            ]
        },
        {
            fullName : 'Madan Khan',
            program :  'Anaesthesia',
            programType : 'Value 1',
            sponsoredBy : 'SQUH',
            email : 'Khan@email.com',
            contactNumber : '+9681743687',
            blsExpiryDate : '2025-12-26',
            aclsExpiryDate : '2025-05-05',
            selectionExamScore :  20.1,
            status : 'Not Eligible',
            action: 'red',
            applicationStatus : [
              { stage : 'Applied', status : 'Submit', date : '2022-05-06 10:00:00 AM', by : 'Madan Khan'},
              { stage : 'Not Eligible', status : 'Submit', date : '2022-05-08', by : 'Abdel Maddali'}
            ]
        },
    ],
    userDetails : {
        'residencyStatus' : 'Omani National',
        'isOmsbMember' : 'true',
        'membershipType' : 'Staff',
        'isEmployed' : 'true',
      
        
        'firstName' : 'Abbas',
        'thirdName' : 'Al',
        'familyName' : 'Ajmi',
        'fullNameInArabic' : 'عباس أل أجمع',
        'nationality' : 'Omani',
        
        'idNumber' : '97513256',
        // 'idLinkFront' : '',
        // 'idLinkBack' : '',
        'passportNumber' : '26934345',
        // 'passportLink' : '',
        'staffIdOrWorkId' : '24651923',
        // 'staffIdLink' : '',
      
        'profession' : 'Doctor',
        'primarySpecialty' : 'Medical',
        // 'ifOtherPrimarySpecialty' : '',
        'secondarySpecialty' : 'Other',
        'ifOtherSecondarySpecialty' : 'Other',
        'jobTitle' : 'OPD Consultant Doctor',
        'primaryWorkplaceSectorType' : 'Government',
        'primarySectorName' : 'Diwan Medical Service',
        // 'ifOtherPrimarySector' : '',
        'regionOfPrimaryWorkplace' : 'Value 1',
        // 'ifOtherRegionOfPrimaryWorkplace' : '',
        'secondaryWorkplaceSectorType' : 'Non-Applicable',
        // 'secondarySectorName' : '',
        // 'ifOtherSecondarySectorName' : '',
      
        'dataflowRef' : '#SC56-513213548',

        aclsCertificate: {
            expiryDate: 'Thu Jul 15 2032 00:00:00 GMT+0530 (India Standard Time)',
            uploadLink: ""
        },
        address: "25 Oman",
        age: 35,
        applyingYear: 2019,
        birthDate: 'Thu Jul 12 1984 00:00:00 GMT+0530 (India Standard Time)',
        blsCertificate: {
            expiryDate: 'Fri Jul 12 2030 00:00:00 GMT+0530 (India Standard Time)',
            uploadLink: ""
        },
        certificateUploadLink: "",
        completedResidencyProgramName: 'Value 1',
        nextOfKin: 'Abdel Maddali',
        contactNextOfKin: {
            countryCode: "OM",
            dialCode: "+968",
            e164Number: "+96852123456",
            internationalNumber: "+968 521 23456",
            nationalNumber: "521 23456",
            number: "52123456",
        },
        contactNumber: {
            countryCode: "OM",
            dialCode: "+968",
            e164Number: "+96813255618",
            internationalNumber: "+968 1325 5618",
            nationalNumber: "1325 5618",
            number: "13255618"
        },
        diseasesOrDisabilities: "Diabetes",
        education: [
            {
                country: "OM",
                dateOfGraduation: 'Thu Jul 29 2010 00:00:00 GMT+0530 (India Standard Time)',
                degreeObtained: "MD",
                gpa: "2.27",
                otherName: null,
                school: "Sultan_Qaboos_Univestiry",
            },
            {
                country: "OM",
                dateOfGraduation: 'Sat Jul 14 2012 00:00:00 GMT+0530 (India Standard Time)',
                degreeObtained: null,
                gpa: "1.29",
                otherName: null,
                school: "Oman_Medical_College",
            }
        ],
        specialty : [
          {
            scholarshipProjectType: 'value 1',
            scholarshipProject: 'value Sub 1',
            specialtyName: 'value SUb 1',
            'sub-specialty': 'value SUb 1',
            country: 'OM'
          }
        ],
        email: "ajmi@gmail.com",
        examType: "MFD",
        fullName: "Abbas Al Ajmi",
        gender: "male",
        governorate: "value_1",
        haveDiseases: true,
        holdsEnglishProficiency: true,
        internship: [
            {
                endDate: 'Fri Jul 18 2014 00:00:00 GMT+0530 (India Standard Time)',
                institution: "Education Committee",
                position: "GFP",
                startDate: 'Fri Jul 09 2010 00:00:00 GMT+0530 (India Standard Time)'
            }
        ],
        isCompletedResidencyProgram: true,
        isDeclared: "",
        isMfdPassed: true,
        maritalStatus: "unmarried",
        mfdUploadLink: "",
        nationIdLink: "",
        nationIdNumber: "943456487",
        omsbSelectionExamScore: "20.5",
        overallScore: 20.1,
        placeOfBirth: "OM",
        sponsorshipLetterLink: "",
        wilayatOrRegion: "value_1",

    },
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
      nationalities : Nationalities.nationalities,
      age : getAges(),
      screeningStatus: [
        'Shortlisted for Interview',
        'Not Eligible'
      ],
      screeningFailedReason: [
        'OMSB Selection Exam not passed',
        'No Valid BLS Certificate',
        'No Valid ACLS Certificate',
        'No Valid PALS Certificate',
        'Medical Qualification is not Valid',
        'No Employer Approval',
        'No Specialty Certificate',
        'No Membership of Faculty in Dentistry certificate (Show only if the program = General Dentistry program and Oral / Maxillofacial surgery program)',
        'Other'
      ],
      programType : [
        'International Residency Program', 'International Fellowship program', 'Stroke Units Residency Program', 'Stroke Units Fellowship program', 'other projects funded by OMSB'
      ],
      sponsoredBy: ['MOH', 'SQUH', 'Other'] ,
      programSpecialization: ['Value 1', 'Value 2', 'Value 3'],
      programSubSpecialization: ['Value 1', 'Value 2', 'Value 3', 'Other'],
}

function getAges() {
    let startAge = 18;
    let ageList = []
    while ( startAge <= 60 ) {
      ageList.push(startAge++);
    }
    return   ageList
  }

export {data};