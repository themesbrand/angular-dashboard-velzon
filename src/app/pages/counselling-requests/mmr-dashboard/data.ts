const data = {
    nameOfCounselee : ['Madan Khan', 'Madan Al Abri', 'Saleh Mahfoudh', 'Abdel Maddali', 'Al Abri Falsal'],
    nameOfCounseleeObjects : [
        {
            counsellorsName : 'Madan Khan',
            mobile : '+968123456',
            email : 'madan512@gmail.com',
            designation: 'Counselor',
            institution : 'Al Nahdah Hospital'
        },
        {
            counsellorsName : 'Madan Al Abri',
            mobile : '+968965456',
            email : 'AbriSD@gmail.com',
            designation: 'Counselor',
            institution : 'Al Nahdah Hospital'
        },
        {
            counsellorsName : 'Saleh Mahfoudh',
            mobile : '+968965456',
            email : 'SalehMahfoudh@gmail.com',
            designation: 'Counselor',
            institution : 'Al Nahdah Hospital'
        },
        {
            counsellorsName : 'Abdel Maddali',
            mobile : '+968965456',
            email : 'AbdelMaddali@gmail.com',
            designation: 'Counselor',
            institution : 'Al Nahdah Hospital'
        },
        {
            counsellorsName : 'Al Abri Falsal',
            mobile : '+968965456',
            email : 'AbriFalsal@gmail.com',
            designation: 'Counselor',
            institution : 'Al Nahdah Hospital'
        }
    ],

    scenario : ['Transfer', 'Interruption', 'Self'],
    typeOfCounselee : ['Faculty', 'Trainee'],
    program : ['Anaesthesia', 'Clinical Biochemistry'],
    typeOfReferral : ['Self', 'Program'],
    mode : ['Physical', 'Virtual'],
    appointmentRequestData : [
        {
            nameOfCounselee : 'Abbas Al Ajmi',
            typeOfReferral : 'Self',
            program: 'Anaesthesia',
            typeOfCounselee : 'Faculty',
            dateOfRequest : '2022-07-12T10:30',
            requestedBy : 'Abbas Al Ajmi',
            scenario : 'Self',
            appointmentDate : '2022-08-15T10:30',
            counsellorName : 'Madan Al Abri',
            venue : 'Al Nahdah Hospital',
            mode : 'Physical'
        },
        {
            nameOfCounselee : 'Abbas Al Ajmi',
            typeOfReferral : 'Program',
            program: 'Clinical Biochemistry',
            typeOfCounselee : 'Trainee',
            dateOfRequest : '2022-07-15T10:30',
            requestedBy : 'Saleh Mahfoudh',
            scenario : 'Transfer',
            appointmentDate : '',
            counsellorName : '',
        },
        {
            nameOfCounselee : 'Abbas Al Ajmi',
            typeOfReferral : 'Program',
            program: 'Clinical Biochemistry',
            typeOfCounselee : 'Trainee',
            dateOfRequest : '2022-07-20T14:30',
            requestedBy : 'Saleh Mahfoudh',
            scenario : 'Interruption',
            appointmentDate : '',
            counsellorName : '',
        },
    ],
    scheduleType : [
        'Internal', 'External'
    ]
}

export {data};