const data = {
    tableData : [
        {
            requestId : 'SA321321',
            requestRaisedBy : 'Abdel Maddali',
            requestRaisedOn : '2022-11-01',
            programComponents : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            assessments : 'Assessment Form - 1',
            comments: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            status : 'Requested',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Session Scheduled', status : 'Pending', date : null, 'by' : null },
                { stage : 'Session Completed', status : 'Pending', date : null, 'by' : null },
            ],
        },
        {
            requestId : 'ZA981321',
            requestRaisedBy : 'Abdel Maddali',
            requestRaisedOn : '2022-11-01',
            programComponents : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            assessments : 'Assessment Form - 2',
            comments: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            status : 'Session Scheduled',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Session Scheduled', status : 'Pending', date : null, 'by' : null },
                { stage : 'Session Completed', status : 'Pending', date : null, 'by' : null },
            ],
        },
        {
            requestId : 'AA347321',
            requestRaisedBy : 'Abdel Maddali',
            requestRaisedOn : '2022-11-01',
            programComponents : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            assessments : 'Assessment Form - 3',
            comments: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit asperiores, commodi omnis nihil accusamus consequatur.',
            status : 'Session Completed',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Session Scheduled', status : 'Pending', date : null, 'by' : null },
                { stage : 'Session Completed', status : 'Pending', date : null, 'by' : null },
            ],
        },
    ]
    
    
}

export { data };