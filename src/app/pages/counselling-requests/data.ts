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
        { name : 'Counseling Event 1', date : '2022-08-16', counselorName : 'Madan Al Abri' },
        { name : 'Counseling Event 2', date : '2022-08-16', counselorName : 'Saleh Mahfoudh' },
        { name : 'Counseling Event 3', date : null , counselorName : 'Madan Khan' },
        { name : 'Counseling Event 4', date : null , counselorName : 'Madan Khan' },
        { name : 'Counseling Event 5', date : null , counselorName : 'Madan Khan' },
        { name : 'Counseling Event 6', date : null , counselorName : 'Madan Khan' }
    ],
    programReferralEvents : [
        { nameOfCounselee : 'Madan Khan', dateOfRequest : '2022-07-15', scenario : 'Transfer'},
        { nameOfCounselee : 'Madan Al Abri', dateOfRequest : '2022-07-12', scenario : 'Interruption'}
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
    ]
}

export { data }