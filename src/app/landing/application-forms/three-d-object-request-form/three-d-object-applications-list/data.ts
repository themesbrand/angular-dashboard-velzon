const data = {
    tableData : [
        {
            reqNo : 'NV01',
            modelName : 'Model Name - 1',
            quantity : '2',
            dateRequested : '2022-08-19',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt autem praesentium id veniam officiis.',
            status : 'Submitted',
            startDateTime: '',
            endDateTime: '',
            operatorComment:  '',
            directorComment:  '',
            applicationStatus : [
                { stage : 'Submitted', status : 'Complete', date : '2022-08-19', by : 'Al Abri Falsal'},
                { stage : 'Sent for Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval Status', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Marked as Closed', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            reqNo : 'NV04',
            modelName : 'Model Name - 4',
            quantity : '2',
            dateRequested : '2022-08-21',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt autem praesentium id veniam officiis.',
            status : 'Closed',
            startDateTime: '2022-08-26 09:45AM',
            endDateTime: '2022-08-26 11:15AM',
            operatorComment:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt autem praesentium id veniam officiis.',
            directorComment:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt autem praesentium id veniam officiis.',
            applicationStatus : [
                { stage : 'Submitted', status : 'Complete', date : '2022-08-21', by : 'Al Abri Falsal'},
                { stage : 'Sent for Approval', status : 'Complete', date : '2022-08-26', by : 'Al Abri Ibraham'},
                { stage : 'Approval Status', status : 'Complete', date : '2022-08-28', by : 'Al Abri Falsal'},
                { stage : 'Marked as Closed', status : 'Complete', date : '2022-08-28', by : 'Al Abri Falsal'},
            ],
        },
    ],
}

export {data}