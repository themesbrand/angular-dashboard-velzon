const data = {
    workshopTypeList : [
        'Face-to-face', 'Online', 'Hybrid', 'Other'
    ],
    workshopProviderList : [
        'A&P','OMSB', 'AHA', 'Other'
    ],
    evaluationFormList: ['Review & Confirm rotation curriculum', 'Trainer Evaluation Form','Research Mentor Evaluation Form','Rotation Evaluation Form', 'ITAR', 'WPBA (On-Demand Evaluations)', 'Six monthly and Annual Evaluation', 'Academic Activity Attendance', 'Logging of Duty Hours', 'Life support certifications BLS, PALS, NRP', 'Resident Development Workshops', 'Procedures Logged'],
    userLists : userListGenerator(),
    manualTypeList: ['Hard copy', 'eManual', 'N/A'],
    userRolesList : ['Instructor', 'Facilitator', 'Moderator'],
    participantTypeList : [
        'OMSB trainee', 'OMSB Faculty', 'OMSB Staff', 'Physician', 'Nurse/Paramedic', 'Other healthcare professional'
    ],
    certificateType : ['OMSB', 'External'],
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
    }
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
