const data = {
    availableMeetingTypes : [
        {
            meetingType : 'Education Committee Meeting', 
            numberOfMeetingPerCalendar: 10,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            predefinedAgenda : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                }
            ],
            departmentAgenda : [
                {
                    presenter: "Abbas Al Ajmi",
                    serviceName : 'Rotation Evaluation',
                    serviceLink : '/forms/rotation-evaluation-form',
                    comments : "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    isPollCreated : true
                },
                {
                    presenter: "Faisal Gawas",
                    serviceName : 'Rotation Evaluation',
                    serviceLink : '/forms/rotation-evaluation-form',
                    comments : "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p>",
                    isPollCreated : false
                },
            ],
            selectedAttendees : ['Madan Khan', 'Abbas Al Ajmi']
        },
        {
            meetingType : 'Curriculum Review', 
            numberOfMeetingPerCalendar: 3,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            predefinedAgenda : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                },
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                },
            ],
            selectedAttendees : ['Madan Khan', 'Abbas Al Ajmi', 'Madan Al Abri', 'Faisal Gawas']

        },
        {
            meetingType : 'Curriculum Sub Committee Meeting', 
            numberOfMeetingPerCalendar: 3,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            predefinedAgenda : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                }
            ],
            selectedAttendees : ['Faisal Gawas', 'Abbas Al Ajmi']

        }
    ],
    userLists : userListGenerator(),
    presentersList : [ 'Abbas Al Ajmi','Madan Khan', 'Madan Al Abri', 'Faisal Gawas'],

}

export {data};

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