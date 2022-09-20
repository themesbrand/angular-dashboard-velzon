const data = {
    userLists : userListGenerator(),
    settingsForScenarios: [
        'Anesthesia/ICU', 'Emergency Medicine', 'ENT', 'Family Medicine', 'Internal Medicine', 'Obs&Gyne', 'Ophthalmology', 'Orthopedics', 'Pediatrics', 
        'Dermatology', 'Surgery', 'Radiology', 'Ultrasound', 'Other'
    ],
    simulatorsList : [
        'SimMan 3G',
        'SimBaby',
        'HAL S3000',
        'HAL 3201',
        'SUSIE',
        'NOELLE S575',
        'Newborn HAL',
        'Pediatric HAL (1-YR)',
        'Pediatric HAL (5-YR)',
        'Megacode Kelly Adult',
        'Megacode Kelly Child',
        'Code Blue III',
        'Trauma Man System',
        'ALS Baby',
        'Articulating head (TraumaMan system)',
        'Ultrasound Models',
        'OB Gyne Task Trainers',
        'CPR Manikin',
        'Ortho Anatomical Models',
        'Joint Injection/Aspiration Models',
        'Lumbar Puncture Adult',
        'Lumbar Puncture Baby',
        'Laparoscopic Simulator',
        'Other'
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
    const userDefinedList: any[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                omsb : user.omsb,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}


