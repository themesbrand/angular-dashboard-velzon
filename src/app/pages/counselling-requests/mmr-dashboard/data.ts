const data = {
    nameOfCounselee : ['Madan Khan', 'Madan Al Abri', 'Saleh Mahfoudh', 'Abdel Maddali', 'Al Abri Falsal'],
    
    nameOfCounseleeObjects : [
        {
            counsellorsName : 'Madan Khan',
            mobile : '+968123456',
            email : 'madan512@gmail.com',
        },
        {
            counsellorsName : 'Madan Al Abri',
            mobile : '+968965456',
            email : 'AbriSD@gmail.com',
        },
        {
            counsellorsName : 'Saleh Mahfoudh',
            mobile : '+968965456',
            email : 'SalehMahfoudh@gmail.com',
        },
        {
            counsellorsName : 'Abdel Maddali',
            mobile : '+968965456',
            email : 'AbdelMaddali@gmail.com',
        },
        {
            counsellorsName : 'Al Abri Falsal',
            mobile : '+968965456',
            email : 'AbriFalsal@gmail.com',
        }
    ],

    scenario : ['Transfer', 'Interruption', 'Self'],
    typeOfCounselee : ['Faculty', 'Trainee'],
    program : ['Anaesthesia', 'Clinical Biochemistry'],
    typeOfReferral : ['Self', 'Program'],
    mode : ['Physical', 'Virtual'],
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
            appointmentDate : '',
            counsellorName : '',
        },
        {
            nameOfCounselee : 'Madan Khan',
            typeOfReferral : 'Program',
            program: 'Clinical Biochemistry',
            typeOfCounselee : 'Trainee',
            dateOfRequest : '2022-07-20T14:30',
            requestedBy : 'Saleh Mahfoudh',
            scenario : 'Interruption',
            appointmentDate : '',
            counsellorName : '',
        },
    ]
}

export {data};