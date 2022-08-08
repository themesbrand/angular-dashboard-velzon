const data = {
    userDetailsObject : {
        name : 'Abbas Al Ajmi',
        omsb: '19-205',
        academicYear: 'R3',
        trainingProgram: 'Anaesthesia',
        yearOfTraining: '2020',
        telephoneNumber: '+9681236486',
        emailAddress: 'Abbas@email.com',
    },
    upcomingEvents : [
        { name : 'Counseling Event 1', date : '2022-08-16 08:00:00 AM', counselorName : 'Madan Al Abri' , assessmentCount : 5},
        { name : 'Counseling Event 2', date : '2022-08-16 08:00:00 AM', counselorName : 'Saleh Mahfoudh' , assessmentCount : 2},
        { name : 'Counseling Event 3', date : null , counselorName : 'N/A' , assessmentCount : 0}
    ],
    pastEvents : [
        { name : 'Counseling Event 1', date : '2022-05-16 08:00:00 AM', counselorName : 'Madan Al Abri' , assessmentCount : 5},
        { name : 'Counseling Event 2', date : '2022-05-22 08:00:00 AM', counselorName : 'Saleh Mahfoudh', assessmentCount : 2 },
        { name : 'Counseling Event 3', date : '2022-05-26 08:00:00 AM', counselorName : 'Madan Al Abri' , assessmentCount : 7},
        { name : 'Counseling Event 4', date : '2022-06-10 08:00:00 AM', counselorName : 'Saleh Mahfoudh' , assessmentCount : 4},
        { name : 'Counseling Event 5', date : '2022-06-15 08:00:00 AM', counselorName : 'Madan Al Abri', assessmentCount : 3 },
        { name : 'Counseling Event 6', date : '2022-06-26 08:00:00 AM', counselorName : 'Saleh Mahfoudh' , assessmentCount : 2},
    ],
    programReferralEvents : [
        { nameOfCounselee : 'Madan Khan', dateOfRequest : '2022-07-15 08:00:00 AM', scenario : 'Transfer'},
        { nameOfCounselee : 'Madan Al Abri', dateOfRequest : '2022-07-12 08:00:00 AM', scenario : 'Interruption'}
    ],
    nameOfCounselee : ['Madan Khan', 'Madan Al Abri'],
    scenario : ['Transfer', 'Interruption'],
    omsbNumbersList : [
        '19-205', '19-985', '20-514', '20-235'
    ],
    characteristicsTableData : [
        {column1 : 'Submissive', column2 : 'Aggressive'},
        {column1 : 'Calm', column2 : 'Short-tempered'},
        {column1 : 'Frank', column2 : 'Suspicious'},
        {column1 : 'Relaxed', column2 : 'Tense'},
        {column1 : 'Conscientious', column2 : 'Perfectionist'},
        {column1 : 'Worrying', column2 : 'Casual'},
        {column1 : 'Moody', column2 : 'Cheerful'},
        {column1 : 'Clear-headed', column2 : 'Confused'},
        {column1 : 'Confident', column2 : 'Indecisive'},
        {column1 : 'Kind-hearted', column2 : 'Harsh'},
        {column1 : 'Immature', column2 : 'Demonstrative'},
        {column1 : 'Callous', column2 : 'Mature'},
        {column1 : 'Unreliable', column2 : 'Reliable'},
        {column1 : 'Upright / righteous', column2 : 'Vain'},
        {column1 : 'Complaining', column2 : 'Careless'},
        {column1 : 'Proud', column2 : 'Forgetful'},
        {column1 : 'Tactful', column2 : 'Tactless'},
        {column1 : 'Absent-minded', column2 : 'Social'},
        {column1 : 'Antisocial', column2 : 'Patient'},
    ],
    assessmentData : [
        {name : 'Assessment 1', assessmentPerformedBy : 'Madan Al Abri', assessmentData : '2020-06-10 08:00:00 AM'},
        {name : 'Assessment 2', assessmentPerformedBy : 'Madan Khan', assessmentData : '2020-07-10 08:00:00 AM'},
        {name : 'Assessment 3', assessmentPerformedBy : 'Madan Al Abri', assessmentData : '2020-07-15 08:00:00 AM'},
    ]
}

export { data }