const data = {
    tableData : [
        {
            formName : 'Form Name Sample - 1',
            commonOrProgramSpecific : 'Common',
            purpose : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, atque deserunt sint ipsam temporibus ut.',
            applicableFor : ['ENT', 'Anesthesia'],
            conductedBy : 'Faculty',
            intendedFor : 'Rotation Supervisor',
            whenMatched : 'Rotation Supervisor',
            whenAvailable : '1 week before end of the program',
            whenDue : '14 days from Block end date',
            blockOrAnnualRequirement : 'Block Requirement',
            mandatory : 'Yes',
            minimumRequiredNumber : '1, 2, 3.. per Block',
            requestedBy : 'Madan Al Abri',
            requestedOn : '2022-10-12',
            status : 'Requested',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Submitted to GME Director', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted to VPAA', status : 'Pending', date : null, 'by' : null },
                { stage : 'Added to EAC Meeting agenda', status : 'Pending', date : null, 'by' : null },
                { stage : 'Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Form Submitted', status : 'Pending', date : null, 'by' : null },
            ],
            commentsFromAP : null,
            commentsFromGmeDirector: null,
            commentsFromVpaa: null,
            commentsFromEacRapporteur: null,
            formNumber : null,
            formChoices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
            formChoicesCategory : 'Strongly Disagree - Strongly Agree',
            form : [
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["input field"],
                    colspan : 4,
                    isChoices : false,
                    question : 'Comments'
                },
            ]
        },
        {
            formName : 'Form Name Sample - 2',
            commonOrProgramSpecific : 'Program Specific',
            purpose : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, atque deserunt sint ipsam temporibus ut.',
            applicableFor : ['ENT'],
            conductedBy : 'CH',
            intendedFor : 'Rotation Supervisor',
            whenMatched : 'Rotation Supervisor',
            whenAvailable : '1 week before end of the program',
            whenDue : '14 days from Block end date',
            blockOrAnnualRequirement : 'Block Requirement',
            mandatory : 'Yes',
            minimumRequiredNumber : '1, 2, 3.. per Block',
            requestedBy : 'Madan Al Abri',
            requestedOn : '2022-10-12',
            status : 'Submitted to GME Director',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Submitted to GME Director', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Submitted to VPAA', status : 'Pending', date : null, 'by' : null },
                { stage : 'Added to EAC Meeting agenda', status : 'Pending', date : null, 'by' : null },
                { stage : 'Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Form Submitted', status : 'Pending', date : null, 'by' : null },
            ],
            commentsFromAP : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromGmeDirector: null,
            commentsFromVpaa: null,
            commentsFromEacRapporteur: null,
            formNumber : null,
            formChoices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
            formChoicesCategory : 'Strongly Disagree - Strongly Agree',
            form : [
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["input field"],
                    colspan : 4,
                    isChoices : false,
                    question : 'Comments'
                },
            ]
        },
        {
            formName : 'Form Name Sample - 3',
            commonOrProgramSpecific : 'Common',
            purpose : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, atque deserunt sint ipsam temporibus ut.',
            applicableFor : ['ENT', 'Anesthesia'],
            conductedBy : 'Faculty',
            intendedFor : 'Rotation Supervisor',
            whenMatched : 'Rotation Supervisor',
            whenAvailable : '1 week before end of the program',
            whenDue : '14 days from Block end date',
            blockOrAnnualRequirement : 'Block Requirement',
            mandatory : 'Yes',
            minimumRequiredNumber : '1, 2, 3.. per Block',
            requestedBy : 'Madan Al Abri',
            requestedOn : '2022-10-12',
            status : 'Submitted to VPAA',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Submitted to GME Director', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Submitted to VPAA', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Added to EAC Meeting agenda', status : 'Pending', date : null, 'by' : null },
                { stage : 'Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Form Submitted', status : 'Pending', date : null, 'by' : null },
            ],
            commentsFromAP : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromGmeDirector: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromVpaa: null,
            commentsFromEacRapporteur: null,
            formNumber : null,
            formChoices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
            formChoicesCategory : 'Strongly Disagree - Strongly Agree',
            form : [
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["input field"],
                    colspan : 4,
                    isChoices : false,
                    question : 'Comments'
                },
            ]
        },
        {
            formName : 'Form Name Sample - 4',
            commonOrProgramSpecific : 'Common',
            purpose : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, atque deserunt sint ipsam temporibus ut.',
            applicableFor : ['ENT', 'Anesthesia'],
            conductedBy : 'Faculty',
            intendedFor : 'Rotation Supervisor',
            whenMatched : 'Rotation Supervisor',
            whenAvailable : '1 week before end of the program',
            whenDue : '14 days from Block end date',
            blockOrAnnualRequirement : 'Block Requirement',
            mandatory : 'Yes',
            minimumRequiredNumber : '1, 2, 3.. per Block',
            requestedBy : 'Madan Al Abri',
            requestedOn : '2022-10-12',
            status : 'Added to EAC Meeting agenda',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Submitted to GME Director', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Submitted to VPAA', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Added to EAC Meeting agenda', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Form Submitted', status : 'Pending', date : null, 'by' : null },
            ],
            commentsFromAP : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromGmeDirector: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromVpaa: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromEacRapporteur: null,
            formNumber : null,
            formChoices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
            formChoicesCategory : 'Strongly Disagree - Strongly Agree',
            form : [
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["input field"],
                    colspan : 4,
                    isChoices : false,
                    question : 'Comments'
                },
            ]
        },
        {
            formName : 'Form Name Sample - 5',
            commonOrProgramSpecific : 'Common',
            purpose : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, atque deserunt sint ipsam temporibus ut.',
            applicableFor : ['ENT', 'Anesthesia'],
            conductedBy : 'Faculty',
            intendedFor : 'Rotation Supervisor',
            whenMatched : 'Rotation Supervisor',
            whenAvailable : '1 week before end of the program',
            whenDue : '14 days from Block end date',
            blockOrAnnualRequirement : 'Block Requirement',
            mandatory : 'Yes',
            minimumRequiredNumber : '1, 2, 3.. per Block',
            requestedBy : 'Madan Al Abri',
            requestedOn : '2022-10-12',
            status : 'Approved',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Submitted to GME Director', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Submitted to VPAA', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Added to EAC Meeting agenda', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Approval', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
                { stage : 'Form Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali' },
            ],
            commentsFromAP : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromGmeDirector: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromVpaa: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            commentsFromEacRapporteur: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur assumenda cupiditate? Similique, eum aliquam.',
            formNumber : null,
            formChoices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
            formChoicesCategory : 'Strongly Disagree - Strongly Agree',
            form : [
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"],
                    colspan : 0,
                    isChoices : true,
                    question : '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    choices : ["input field"],
                    colspan : 4,
                    isChoices : false,
                    question : 'Comments'
                },
            ]
        }

    ]
    
}

export { data };