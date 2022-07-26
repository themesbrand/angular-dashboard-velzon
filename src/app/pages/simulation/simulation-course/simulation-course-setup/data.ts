const data = {
    courseTypeList : [
        'Face-to-face', 'Online', 'Hybrid', 'Other'
    ],
    courseProviderList : [
        'OMSB', 'AHA', 'Other'
    ],
    evaluationFormList: ['Form 1', 'Form 2', 'Form 3'],
    userLists : userListGenerator(),
    manualTypeList: ['Hard copy', 'eManual', 'N/A'],
    userRolesList : ['Course Director', 'Course Instructor', 'Course Facilitator', 'Moderator'],
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
    },
    courseSetupTableData : [
        {
            certificateAndSignatories: [
                { certificateName: "Certificate 1", certificateType: "OMSB", signatories: [
                    "Al Abri Ibraham", "Madan Al Abri"
                ]},
                { certificateName: "Certificate 2", certificateType: "OMSB", signatories: [
                    "Al Abri Ibraham", "Madan Al Abri"
                ]},
            ],
            courseCode: "135SCA",
            courseDescription: "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolores magni libero laborum odio ipsum sapiente totam, laudantium explicabo cum harum eveniet et! Nulla magnam in velit dicta, quibusdam aperiam asperiores distinctio quam delectus dolore magni!</p>",
            courseDuration: "10",
            courseName: "Anaesthesia",
            courseOtherCoordinators: ["Madan Khan",  "Faisal Gawas"],
            courseProvider: "AHA",
            courseProviderOther: null,
            courseStaffCoordinators: ["Madan Khan",  "Faisal Gawas"],
            courseType: "Other",
            courseTypegxOther: "Other Type - Value",
            cpdScore: "23",
            eManualLink: "link/link",
            evaluationForm: ['Form 1', 'Form 2'],
            fees: [
                { fee: "1200", participantType: "OMSB trainee"},
                { fee: "1350", participantType: "OMSB Faculty"}
            ],
            heartCodeKeys: "50",
            manualType: "eManual",
            manualsAvailable: "12",
            manualsRequired: "50",
            noOfECards: "30",
            preRequisiteCourse: 'Course 1',
            roles : [
                {
                    noOfRoles: "2", role: "Course Instructor", usersArray : [
                        { userName: "Abbas Al Ajmi", userPay: "3600" },
                        { userName: "Madan Khan", userPay: "2500" },
                    ]
                },
                {
                    noOfRoles: "1", role: "Course Director", usersArray : [
                        { userName: "Al Abri Ibraham", userPay: "5600" }
                    ]
                }
                
            ],
            standardizedPatients: [
                {patient: 'Faisal Gawas'},
                {patient: 'Saleh Mahfoudh'}
            ]
        }
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
