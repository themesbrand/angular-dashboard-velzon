const data = {
    projectApplicationList: [ 'Graduate Research Grant', 'Other'],
    applicationListData: [
        {
            requesterName	: 'Saleh Mahfoudh',
            nationalID	: '9713548132',
            designation	: 'GFP Trainee',
            omsbID	: '210-19',
            programName	: 'Anesthesia',
            status: 'Requested',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Confirmation', status : 'Pending', date : ''},
                { stage : 'Meeting Schedule', status : 'Pending', date : ''},
                { stage : 'Feedback ', status : 'Pending', date : ''},
                { stage : 'Completion', status : 'Pending', date : ''}
            ],
        },
        {
            requesterName	: 'Saleh Mahfoudh',
            nationalID	: '9713548132',
            designation	: 'GFP Trainee',
            omsbID	: '210-19',
            programName	: 'Anesthesia',
            status: 'Meeting Scheduled',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Confirmed', status : 'Complete', date : '2022-07-28 08:15:00 AM'},
                { stage : 'Meeting Scheduled', status : 'Complete', date : '2022-08-01 08:15:00 AM'},
                { stage : 'Feedback ', status : 'Pending', date : ''},
                { stage : 'Completion', status : 'Pending', date : ''}
            ]
        }
    ],
    applicationListObject: {
        isMandatoryResearch  : 'Yes',
        typeOfSupport : 'Research Idea / Proposal writing',
        supportPersons : 'Abbas Al Ajmi, Madan Khan',
        comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis perferendis qui repudiandae. Autem eum nisi quod architecto voluptatem impedit, assumenda, eligendi explicabo nam reprehenderit voluptas.',
        isConsulted: 'Yes',
        consultantDate: '2022-08-06',
        consultantTime: '08:00AM',  
    },
    typeOfSupport : [
        'Research Idea / Proposal writing',
        'Research design and methodologies',
        'Literature Review / Search (Medical Library Staff)',
        'Sampling and Sample size calculation (Statistician)',
        'Designing online survey form (Google forms - Ms. Sakeena Al-Kindi)',
        'Issues related to data collection / Entry (Statistician)',
        'Data analysis (Statistician)',
        'Paper writing - Specific questions (Dr. Abdulhakeem Al-Rawahi)',
        'Other'
    ],
    userLists : userListGenerator(),
    appointmentGivenList : [
        '<= 7 working days',
        '8-14 working days',
        '>14 working days'
    ],
    satisfaction : [
        'Not satisfied',
        'Satisfied',
        'Highly Satisfied'
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
