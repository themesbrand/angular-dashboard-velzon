import { sharedData } from "src/app/shared/data/shared.data"

const data = {
    programTypes : sharedData.programTypes,
    residencyPrograms : sharedData.residencyPrograms,
    fellowshipPrograms : sharedData.fellowshipPrograms,
    gfpPrograms : sharedData.gfpPrograms,
    typeOfExams : [
      'Omani Examination for Nurses (OEN)',
      'Omani Examination for General Practitioners (OEGP)',
      'Omani Examination for Pharmacists (OEP)',
      'Omani Examination for Medical Laboratory Scientists (OEMLS)'
    ],
    tableData : [
        {
            programName : 'Anastasia', examType : 'Omani Examination for Nurses (OEN)', examStartDate : '2022-10-15', examEndDate : '2022-10-18', createdOn :  '2022-09-05 09:45:15 AM', status : 'Draft' 
        },
        {
            programName : 'Medical Microbiology', examType : 'Omani Examination for Nurses (OEN)', examStartDate : '2022-10-17', examEndDate : '2022-10-20', createdOn :  '2022-09-01 10:25:15 AM', status : 'Dates Created' 
        }
    ],
    examObject : {
      
      examTitle : 'Omani Examination for Nurses (OEN)',
      announcementDate : '2022-08-16',
      registrationStartDate : '2022-10-15',
      registrationCutOffWindow : '15',
      resultsSource : 'Manual Entry',
      information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque ipsum, praesentium sint dicta officiis et.',

      earlyBidDays : 5,
      fee : 100,

      regularFees : [
        {
          attempts : 1,
          fee : 50
        },
        {
          attempts : 2,
          fee : 70
        },
        {
          attempts : 3,
          fee : 100
        }
      ] ,
      cancellationFees : [
        {
          attempts : 10,
          fee : '100%'
        },
        {
          attempts : 8,
          fee : '75%'
        },
        {
          attempts : 5,
          fee : '25%'
        }
      ] ,
      reschedulingFees : [
        {
          attempts : 10,
          fee : 50
        },
        {
          attempts : 8,
          fee : 70
        },
        {
          attempts : 3,
          fee : 100
        }
      ] ,

      appealFee : 100,
      reAppealFee : 150,
      appealWindow : 15,
      reAppealWindow : 15,

      examFrequency : 'Single',
      programType : 'Residency Program',
      programName : ['Anastasia', 'Pediatrics'],

      singleExamDates : [
        {
          programName : 'Anastasia',
          startDateOfExam : '2022-09-15',
          endDateOfExam : '2022-09-16',
          fromTimeOfExam : '08:00 AM',
          toTimeOfExam : '12:00 PM',
          seats : 50,
          venue : 'link'
        }
      ],
      multipleExamDates : [] ,
      
      eligibility : 'yes',
      
      examType : 'Part 1 Exam',
      reAttempts : 2,
      maxNoOfDaysAfterReAttempt : 5,
      minNoOfDaysAfterReAttempt : 2,
      nationality : 'Omani'
    }
    
}

export {data}