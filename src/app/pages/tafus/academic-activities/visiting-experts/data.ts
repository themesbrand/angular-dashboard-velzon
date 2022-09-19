const data = {
    tableData  : [
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 1',
            
            visitingExpert : 'Abdel Maddali',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Draft',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending review from TAFUS', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from EAC ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 2',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Submitted for TAFUS Review',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from EAC ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 3',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Pending Approval from TAFUS',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from EAC ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 4',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Pending Approval from TA Director',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from EAC ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 5',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Pending Approval from EAC',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from EAC ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 6',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Payment Approved',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from EAC ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment Approval ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            program : 'ENT',
            activityTitle : 'Activity Title - 7',
            
            visitingExpert : 'Faisal Gawas',
            estimatedAmount : '1000',
            approvedAmount : '0',
            status : 'Payment complete',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending review from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from EAC ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment Approval ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment Completion ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
            ]
        },

    ],
    userLists : userListGenerator(),
    objectData: {
        title : 'Title - 1',
        introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis purus a magna semper, malesuada aliquam magna sagittis. Cras id porttitor mi, vitae viverra ligula. Aenean tristique lectus et venenatis sollicitudin. ',
        skills : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis purus a magna semper, malesuada aliquam magna sagittis. Cras id porttitor mi, vitae viverra ligula. Aenean tristique lectus et venenatis sollicitudin. ',
        attitudes : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis purus a magna semper, malesuada aliquam magna sagittis. Cras id porttitor mi, vitae viverra ligula. Aenean tristique lectus et venenatis sollicitudin. ',
        teachingMethods : 'Lecture',
        evaluationMethods : 'Summative',
        
        speakers : [
            {
                name : 'Al Abri Falsal',
                tickets : 800,
                visa : 250,
                accommodation : 600,
                foodAndNumberOfParticipates : 1500,
                honorarium : 1200,
                venue : 1000,
                transport : 1000,
                register : 200,
                eventPoster : 1400,
            },
            {
                name : 'Abu Nasser',
                tickets : 800,
                visa : 250,
                accommodation : 600,
                foodAndNumberOfParticipates : 1500,
                honorarium : 1200,
                venue : 1000,
                transport : 1000,
                register : 200,
                eventPoster : 1400,
            },
        ],
    }
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
