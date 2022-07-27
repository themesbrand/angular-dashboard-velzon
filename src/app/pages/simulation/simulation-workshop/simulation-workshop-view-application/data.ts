const data = {
    listApplicationTable : [
        {
            programName : 'Anesthesia'	,
            activityTitle	: 'Anesthesia Activity Stage 1',
            startDate : '2022-08-25',
            endDate	: '2022-08-30',
            noOfHrs : 5	,
            location : 'OMSB',
            requestedBy : 'Madan Khan',
            requestDate : '2022-07-20',
            status: 'Requested'            
        },
        {
            programName : 'Anesthesia'	,
            activityTitle	: 'Anesthesia Activity Stage 2',
            startDate : '2022-08-15',
            endDate	: '2022-08-20',
            noOfHrs : 5	,
            location : 'OMSB',
            requestedBy : 'Madan Khan',
            requestDate : '2022-07-25',
            status: 'Approved'            
        }
    ],
    standardizedPatientsSampleObject: {
        civilID : '9743213531321',
        fullName : 'Madan Al Abri',
        gender : 'Male',
        dateOfBirth : '1982-06-06',
        nationality : 'Omani',
        registrationDate : '2010-06-08',
        physicalInformation :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
        medicalInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
        payableAmount : 'ر.ع.25000',
    },
    userLists : userListGenerator(),
    roles: [
        { roleType : 'Instructor', name : 'Saleh Mahfoudh'},
        { roleType : 'Instructor', name : 'Madan Khan'},
        { roleType : 'Instructor', name : 'Abdel Maddali'},
        { roleType : 'Instructor', name : 'Al Abri Falsal'},
        { roleType : 'Instructor', name : 'Al Abri Ibraham'},
        { roleType : 'Instructor', name : 'Abu Nasser'},
        { roleType : 'Instructor', name : 'Faisal Gawas'}
    ]


}

export {data}

function userListGenerator() {
    const users = [
        {
            name : 'Abbas Al Ajmi',
            email : 'Abbas@email.com',
            omsb: '19-204'
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com',
            omsb: '19-210'
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com',
            omsb: '19-209'
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com',
            omsb: '19-206'
        },
        {
            name : 'Al Abri Ibraham',
            email : 'Abri@email.com',
            omsb: '19-219'
        },
        {
            name : 'Hilal basheer',
            email : 'Hilal@email.com',
            omsb: '19-221'
        },
    ]
    const userDefinedList: { name: string; email: string; labelValue: string; }[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}
