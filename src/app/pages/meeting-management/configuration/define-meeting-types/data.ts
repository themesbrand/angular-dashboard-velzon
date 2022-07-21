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
            attendeesGroupArray : [
                { email: "Madan@email.com", name: "Madan Khan" },
                { email: "Abbas@email.com", name: "Abbas Al Ajmi" }
            ],
            authorizedUsersArray : [
                { email: "Faisal@email.com", name: "Faisal Gawas" },
                { email: "Madan@email.com", name: "Madan Al Abri" }
            ],
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
            attendeesGroupArray : [
                { email: "Madan@email.com", name: "Madan Khan" },
                { email: "Abbas@email.com", name: "Abbas Al Ajmi" }
            ],
            authorizedUsersArray : [
                { email: "Faisal@email.com", name: "Faisal Gawas" },
                { email: "Madan@email.com", name: "Madan Al Abri" }
            ],
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
            attendeesGroupArray : [
                { email: "Madan@email.com", name: "Madan Khan" },
            ],
            authorizedUsersArray : [
                { email: "Faisal@email.com", name: "Faisal Gawas" },
                { email: "Madan@email.com", name: "Madan Al Abri" }
            ],
            numberOfReminders: 3,
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
    userLists : [
        {
            name : 'Abbas Al Ajmi',
            email : 'Abbas@email.com'
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com'
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com'
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com'
        }
    ]
}

export {data}



