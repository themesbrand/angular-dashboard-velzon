const data = {
    resourceRequestsTableData : [
        {
            programName : 'Anaesthesia',
            title : 'Anaesthesia 2018 - Edition 1',
            author : 'Faisal Gawas',
            edition : '2018.V2.0',
            isbn : '15831SC13-CS',
            noOfCopies : '15',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-07-25' ,
            status: 'Requested',
            applicationStatus : [
                { stage : 'Requested', status : 'Submit', date : '2022-07-25'},
                { stage : 'Estimated', status : 'Pending', date : ''},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Procured', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''},
                { stage : 'Issued', status : 'Pending', date : ''},
            ]
        },
        {
            programName : 'Anaesthesia',
            title : 'Anaesthesia 2018 - Edition 2',
            author : 'Faisal Gawas',
            edition : '2018.V1.5',
            isbn : '99831SC13-CS',
            noOfCopies : '25',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-07-25' ,
            status: 'Estimated',
            applicationStatus : [
                { stage : 'Requested', status : 'Submit', date : '2022-07-25'},
                { stage : 'Estimated', status : 'Pending', date : ''},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Procured', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''},
                { stage : 'Issued', status : 'Pending', date : ''},
            ]
        },
        {
            programName : 'Anaesthesia',
            title : 'Anaesthesia 2018 - Edition 2',
            author : 'Faisal Gawas',
            edition : '2018.V1.5',
            isbn : '99831SC13-CS',
            noOfCopies : '25',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-07-25' ,
            status: 'Delivered',
            applicationStatus : [
                { stage : 'Requested', status : 'Submit', date : '2022-07-25'},
                { stage : 'Estimated', status : 'Pending', date : ''},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Procured', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''},
                { stage : 'Issued', status : 'Pending', date : ''},
            ]
        },
    ],
    userLists : userListGenerator(),
}

export {data};


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
