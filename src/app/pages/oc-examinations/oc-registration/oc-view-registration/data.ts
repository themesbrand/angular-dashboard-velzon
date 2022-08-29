const pageData = {
  examObject : {
      
    examTitle : 'Omani Examination for Nurses (OEN)',
    announcementDate : '2022-09-16',
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
  },
  registeredExamData : [
    {
      examDate : '2022-10-15',
      examTime : '08:45 AM',
      daysRemaining	: 15,
      paymentDate	: '2022-09-15',
      venue	: 'Armed Forces Hospital',
      registeredOn : '2022-08-10',
      status : 'Eligibility Check Pending',
      applicationStatus: [
        { stage : 'Eligibility Check', status : 'Pending', date : 'N/A', by : 'N/A'},
        { stage : 'Payment Progress', status : 'Pending', date : 'N/A', by : 'N/A'},
      ]
    },
    {
      examDate : '2022-10-15',
      examTime : '08:45 AM',
      daysRemaining	: 15,
      paymentDate	: '2022-09-15',
      venue	: 'Armed Forces Hospital',
      registeredOn : '2022-08-10',
      status : 'Payment Pending',
      applicationStatus: [
        { stage : 'Eligibility Check', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
        { stage : 'Payment Progress', status : 'Pending', date : 'N/A', by : 'N/A'},
      ]
    },
    {
      examDate : '2022-10-15',
      examTime : '08:45 AM',
      daysRemaining	: 15,
      paymentDate	: '2022-09-15',
      venue	: 'Armed Forces Hospital',
      registeredOn : '2022-08-10',
      status : 'Payment Complete',
      applicationStatus: [
        { stage : 'Eligibility Check', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
        { stage : 'Payment Progress', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Faisal Gawas'},
      ]
    },
    {
      examDate : '2022-10-15',
      examTime : '08:45 AM',
      daysRemaining	: 15,
      paymentDate	: '2022-09-15',
      venue	: 'Armed Forces Hospital',
      registeredOn : '2022-08-10',
      status : 'Withdrawn',
      applicationStatus: [
        { stage : 'Eligibility Check', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
        { stage : 'Payment Progress', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Faisal Gawas'},
        { stage : 'Withdrawn', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Madan Khan'},
      ]
    },
  ]
}

export {pageData};