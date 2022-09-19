const data = {
    tableData  : [
        {
            name : 'Al Abri Ibraham',
            post : 'Faculty',
            date : '2022-10-12 09:00AM',
            amount : '100',
            status : 'Draft',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submit for Approval', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TAFUS', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            name : 'Faisal Gawas',
            post : 'Lecturer',
            date : '2022-10-13 09:00AM',
            amount : '150',
            status : 'Pending Approval from TAFUS',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submit for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            name : 'Faisal Gawas',
            post : 'Lecturer',
            date : '2022-10-13 09:00AM',
            amount : '150',
            status : 'Pending Approval from TA Director',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submit for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Faisal Gawas'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Approval ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            name : 'Faisal Gawas',
            post : 'Lecturer',
            date : '2022-10-13 09:00AM',
            amount : '150',
            status : 'Payment Approved',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submit for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Faisal Gawas'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Hilal basheer'}, 
                { stage : 'Payment Approval ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Hilal basheer'}, 
                { stage : 'Payment Completion ', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            name : 'Faisal Gawas',
            post : 'Lecturer',
            date : '2022-10-13 09:00AM',
            amount : '150',
            status : 'Payment Complete',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Submit for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Pending Approval from TAFUS', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Faisal Gawas'}, 
                { stage : 'Pending Approval from TA Director ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Hilal basheer'}, 
                { stage : 'Payment Approval ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Hilal basheer'}, 
                { stage : 'Payment Completion ', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Hilal basheer'}, 
            ]
        },
    ],
    userLists : userListGenerator(),

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
