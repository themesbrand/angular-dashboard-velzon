const pageData = {
    examObject : {

        typeOfExam : 'Part 1 Exam',
        resultsSource : '15',
        
        examFrequency : 'Single',
        
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia non? Reiciendis aliquam itaque neque voluptatem magni molestias perspiciatis doloremque rerum laborum voluptatum.',
        
        eligibilityOne : 'Level 1',
        eligibilityTwo : [
          {
            availableLevels : 'Level 1', examType : 'Part 1 Exam'
          }
        ],
    
        earlyBidDays : 15,
        fee : 150,
        appealWindow : 10,
        reAppealWindow : 10,
    
        regularFees : [
          {
            attempts : 3,
            fee : 150
          }
        ],
    
        withdrawalFees : [
          {
            numberOfDays : 15,
            refundPercentage : '30%'
          }
        ],
        
        appealFee : 150,
        reAppealFee : 150,
    
        startDateOfApplication : '2022-08-20',
        endDateOfApplication : '2022-08-30',
    
        programType : 'Residency Program',
        programName : ['Anesthesia'],
    
        singleExamDates :[
          {
            programName : 'Anesthesia',
            startDateOfExam : '2022-10-15',
            endDateOfExam : '2022-10-15',
            fromTimeOfExam : '08:00 AM',
            toTimeOfExam : '10:00 AM',
            seats : '25',
            venue : 'Khoula Hospital'
          }
        ]
      },
    registeredExamData : [
      {
        examDate : '2022-10-15',
        examTime : '08:45 AM',
        daysRemaining	: 15,
        paymentDate	: '2022-09-15',
        venue	: 'Armed Forces Hospital',
        registeredOn : '2022-08-10',
        status : 'Payment Pending'
      },
      {
        examDate : '2022-10-15',
        examTime : '08:45 AM',
        daysRemaining	: 15,
        paymentDate	: '2022-09-15',
        venue	: 'Armed Forces Hospital',
        registeredOn : '2022-08-10',
        status : 'Payment Complete'
      },
      {
        examDate : '2022-10-15',
        examTime : '08:45 AM',
        daysRemaining	: 15,
        paymentDate	: '2022-09-15',
        venue	: 'Armed Forces Hospital',
        registeredOn : '2022-08-10',
        status : 'Withdrawn'
      },
    ]
}

export {pageData};