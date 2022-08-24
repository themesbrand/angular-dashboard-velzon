const data = {
    tableData : [
        {
            applicantName : 'Saleh Mahfoudh',
            date : '2022-09-10',
            timeSlot : '08:00 AM - 12:00PM',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Approval Status', status : 'Pending', date : 'N/A', by : 'N/A'},
                
            ],

        },
        {
            applicantName : 'Al Abri Ibraham',
            date : '2022-09-10',
            timeSlot : '08:00 AM - 12:00PM',
            status : 'Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Approval Status - Approved', status : 'Complete', date : '2022-07-28', by : 'Abdel Maddali'},
            ],
        },
    ],
    interactiveRoomObject: {
        purpose: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt aliquid ullam maxime at eveniet corrupti.',
        date: '2022-09-15',
        timeSlot: '08:00AM to 10:00AM',
        attends : 15,
        requirements : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt aliquid ullam maxime at eveniet corrupti.'
    }
}

export {data}
