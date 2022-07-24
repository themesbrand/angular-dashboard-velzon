const data = {
    meetingObject: {
        title: 'Education Committee August Meeting', 
        meetingType : 'Education Committee Meeting',
        attendees : [
            'Madan Khan', 'Abbas Al Ajmi'
        ],
        startDate: '2022-08-05T12:15',
        endDate : '2022-08-05T03:15',
        venue : 'Al Nahdah Hospital',
        isOnline : true,
        meetingLink : 'www.zoom.com/@321321#513-test',
        agendas : [
            {
                type : 'Predefined Agenda',
                agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                presenter: "Abbas Al Ajmi",
                timeDuration: "45 MInutes",
                actionItems: [
                    {
                        actionItemDescription: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                        assignedTo: 'Madan Khan',
                        expectedClosureData : '2022-08-05',
                        supportingDocument : true,
                        status : 'In-progress',
                        followups: [
                            {
                                content : '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>', 
                            },
                            {
                                content :'<ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>'

                            }                          
                        ],
                        feedbacks: [
                            {
                                content : '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>', 
                            },
                            {
                                content :'<ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>'

                            }                          
                        ]
                    },
                    {
                        actionItemDescription: "<ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                        assignedTo: 'Madan Khan',
                        expectedClosureData : '2022-08-05',
                        supportingDocument : true,
                        status : 'In-progress',
                        followups: [
                            {
                                content : '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p>', 
                            },
                            {
                                content :'<ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>'

                            }                          
                        ],
                        feedbacks: [
                            {
                                content : '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>', 
                            },
                            {
                                content :'<ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>'

                            }                          
                        ]
                    },
                ]
            },
            {
                type : 'Predefined Agenda',
                agendaItem: "<p>Lorem ipsum dolor sit amet.</p>",
                presenter: "Abbas Al Ajmi",
                timeDuration: "45 MInutes",
            },
            {
                type : 'Department Agenda',
                presenter: "Abbas Al Ajmi",
                serviceName : 'Rotation Evaluation',
                serviceLink : '/forms/rotation-evaluation-form',
                agendaItem : "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                supportingDocument : true,
            },
            {
                type : 'New Agenda',
                agendaItem: "<h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima molestias nulla.</p><ul><li>Lorem, ipsum.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li></ul>",
                presenter: "Abbas Al Ajmi",
                timeDuration: "45 MInutes",
                actionItems: []
            },
        ],
    }
}

export {data}