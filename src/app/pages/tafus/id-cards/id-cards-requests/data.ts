const data = {
    tableData : [
        {
            id : '54321',
            traineeName : 'Madan Khan',
            submitDate : '2022-07-25',
            requestFor : 'Charge of lost OMSB card upon clearance',
            reason: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate magni mollitia iure eligendi suscipit laudantium.',
            fees: '150',
            status: 'Submitted for Approval',
            applicationStatus : [
                { stage : 'Submitted for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Approval', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Completion', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            id : '32181',
            traineeName : 'Madan Khan',
            submitDate : '2022-07-25',
            requestFor : 'Replacement for lost/Damaged OMSB card ',
            reason: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate magni mollitia iure eligendi suscipit laudantium.',
            fees: '100',
            status: 'Pending Payment',
            applicationStatus : [
                { stage : 'Submitted for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Completion', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            id : '645813',
            traineeName : 'Madan Khan',
            submitDate : '2022-07-25',
            requestFor : 'Replacement for lost/Damaged OMSB card ',
            reason: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate magni mollitia iure eligendi suscipit laudantium.',
            fees: '100',
            status: 'Pending Confirmation',
            applicationStatus : [
                { stage : 'Submitted for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Completion', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            id : '632584',
            traineeName : 'Madan Khan',
            submitDate : '2022-07-25',
            requestFor : 'Replacement for lost/Damaged OMSB card ',
            reason: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate magni mollitia iure eligendi suscipit laudantium.',
            fees: '100',
            status: 'Completed',
            applicationStatus : [
                { stage : 'Submitted for Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Approval', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Payment', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Confirmation', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
                { stage : 'Completion', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'}, 
            ]
        },
    ],
    userLists : userListGenerator(),
    replacementReason : [
        {
            name : 'Charge of lost OMSB card upon clearance',
            fee : '150'
        },
        {
            name : 'Replacement for lost/Damaged OMSB card ',
            fee : '100'
        }
    ]
    
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
