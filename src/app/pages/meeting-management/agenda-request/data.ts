const data = {
    agendas : [
        {
            meetingType : 'Education Committee Meeting', 
            presenter: "Abbas Al Ajmi",
            serviceName : 'Rotation Evaluation',
            serviceLink : '/forms/rotation-evaluation-form',
            comments : "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
        },
        {
            meetingType : 'Education Committee Meeting',
            presenter: "Faisal Gawas",
            serviceName : 'Rotation Evaluation',
            serviceLink : '/forms/rotation-evaluation-form',
            comments : "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p>",
        },
        {
            meetingType : 'Curriculum Review',
            presenter: "Faisal Gawas",
            serviceName : 'Rotation Evaluation',
            serviceLink : '/forms/rotation-evaluation-form',
            comments : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><p>Lorem ipsum dolor sit amet consectetur.</p>",
        },
    ],
    userLists : userListGenerator(),
    meetingTypes: [
        'Education Committee Meeting', 'Curriculum Review', 'Curriculum Sub Committee Meeting'
    ], 
    serviceLinks : ['ITAR', 'Trainer Evaluation', 'Rotation Evaluation','Research Mentor Evaluation' ],
    serviceNames : ['OMSB #19-201', 'OMSB #19-210', 'OMSB #19-236', 'OMSB #19-215']
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
