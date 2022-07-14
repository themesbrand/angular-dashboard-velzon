const data = {
    appointmentRequestData : [
        {
            nameOfCounselee : 'Madan Khan',
            typeOfReferral : 'Self',
            program: 'Anaesthesia',
            typeOfCounselee : 'Faculty',
            dateOfRequest : '2022-07-12T10:30',
            requestedBy : 'Al Abri Falsal',
            scenario : 'Self',
            appointmentDate : '2022-07-12T10:30',
            counsellorName : 'Madan Al Abri',
            venue : 'Al Nahdah Hospital',
            mode : 'Physical'
        },
        {
            nameOfCounselee : 'Madan Khan',
            typeOfReferral : 'Program',
            program: 'Clinical Biochemistry',
            typeOfCounselee : 'Trainee',
            dateOfRequest : '2022-07-15T10:30',
            requestedBy : 'Saleh Mahfoudh',
            scenario : 'Transfer',
            appointmentDate : '2022-07-15T16:30',
            counsellorName : 'Madan Al Abri',
            venue : 'Al Nahdah Hospital',
            mode : 'Physical'
        },
        {
            nameOfCounselee : 'Madan Khan',
            typeOfReferral : 'Program',
            program: 'Clinical Biochemistry',
            typeOfCounselee : 'Trainee',
            dateOfRequest : '2022-07-20T14:30',
            requestedBy : 'Saleh Mahfoudh',
            scenario : 'Interruption',
            appointmentDate : '2022-07-20T09:30',
            counsellorName : 'Madan Al Abri',
            venue : 'Al Nahdah Hospital',
            mode : 'Physical'
        },
    ],
    scenario : ['Transfer', 'Interruption', 'Self'],
    typeOfCounselee : ['Faculty', 'Trainee'],
    program : ['Anaesthesia', 'Clinical Biochemistry'],
    typeOfReferral : ['Self', 'Program'],
    mode : ['Physical', 'Virtual'],
    nameOfCounselee : ['Madan Khan', 'Madan Al Abri', 'Saleh Mahfoudh', 'Abdel Maddali', 'Al Abri Falsal']
}

export {data};