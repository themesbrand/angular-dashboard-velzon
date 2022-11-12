const data = {
    rotationYears: ['R1', 'R2', 'R3', 'R4', 'R4'],
    numberOfBlocks: [1,2,3,4,5,6,7,8,9,10,11,12,13, 'N/A'],
    rotationCodes: [
        {name : 'Anesthesia for General Surgery', code : 'ANGS', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for General Surgery - Ambulatory Cases', code : 'ANGS-AMC', isOwnedByRotation: 'No', type: 'Elective'},
        {name : 'Anesthesia for General Surgery – Urology Surgery', code : 'ANGS-US', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for General Surgery – Vascular Surgery', code : 'ANGS-VS', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Pre-Anesthesia Clinic (PAC)', code : 'PANES-C', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Critical Care Medicine', code : 'CCM', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Plastic Surgery & Burns Anesthesia', code : 'PS-BA', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Pain Management', code : 'PM', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Cardio Thoracic Anesthesia', code : 'CARDTA', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for Radiodiagnosis/Remote Location', code : 'ANES-R-RL', isOwnedByRotation: 'Yes', type: 'Elective'},
    ],
    trainingCenters : ['Al Nahdah Hospital', 'Armed Forces Hospital', 'Khoula Hospital', 'Royal Hospital', 'Sultan Qaboos University Hospital'],
    userLists : userListGenerator(),
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
