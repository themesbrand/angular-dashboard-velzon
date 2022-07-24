const data = {
    availableMeetingTypes : [
        {
            meetingType : 'Education Committee Meeting', 
            numberOfMeetingPerCalendar: 10,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            agendaArray : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><p>&nbsp;</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                }
            ],
            attendeesGroupArray : ['Madan Khan','Abbas Al Ajmi'],
            authorizedUsersArray : ["Faisal Gawas","Madan Al Abri"],
            numberOfReminders: 3,
            remindersArray : [
                {
                    reminderDays: 5 , reminderNumber: "Reminder 1 : Before "
                },
                {
                    reminderDays: 3 , reminderNumber: "Reminder 2 : Before "
                },
                {
                    reminderDays: 1 , reminderNumber: "Reminder 3 : Before "
                },
            ]
        },
        {
            meetingType : 'Curriculum Review', 
            numberOfMeetingPerCalendar: 3,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            agendaArray : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><p>&nbsp;</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                }
            ],
            attendeesGroupArray : ['Faisal Gawas','Abbas Al Ajmi'],
            authorizedUsersArray : ["Faisal Gawas","Madan Al Abri"],
            numberOfReminders: 3,
            remindersArray : [
                {
                    reminderDays: 5 , reminderNumber: "Reminder 1 : Before "
                },
                {
                    reminderDays: 2 , reminderNumber: "Reminder 2 : Before "
                },
                {
                    reminderDays: 1 , reminderNumber: "Reminder 3 : Before "
                },
            ]
        },
        {
            meetingType : 'Curriculum Sub Committee Meeting', 
            numberOfMeetingPerCalendar: 3,
            isPredefinedAgenda: true,
            isReminderRequired: true,
            agendaArray : [
                {
                    agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><p>&nbsp;</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                    presenter: "Abbas Al Ajmi",
                    timeDuration: "45 MInutes"
                }
            ],
            attendeesGroupArray : ['Faisal Gawas'],
            authorizedUsersArray : ["Faisal Gawas","Madan Al Abri"],
            numberOfReminders: 2,
            remindersArray : [
                {
                    reminderDays: 5 , reminderNumber: "Reminder 1 : Before "
                },
                {
                    reminderDays: 1 , reminderNumber: "Reminder 2 : Before "
                }
            ]
        }
    ],
    presentersList : [ 'Abbas Al Ajmi','Madan Khan', 'Madan Al Abri', 'Faisal Gawas'],
    userLists : userListGenerator()
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


