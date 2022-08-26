const data = {
    requestsTableData : [
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
                { stage : 'Requested', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
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
            status: 'Requested',
            applicationStatus : [
                { stage : 'Requested', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : 'Estimated', status : 'Pending', date : ''},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Procured', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''},
                { stage : 'Issued', status : 'Pending', date : ''},
            ]
        }
    ],
    createdRequestsTableData : [
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'Estimated',
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Approval by Director', status : 'Pending', date : ''},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Purchased', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''}
            ]
        },
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'Approved By Director',
            directorApprovalStatus: {
                status : 'Approved',
                approvedBy : 'Al Abri Falsal',
                approvedDate : '2020-08-10',
            },
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Approved by Director', status : 'Submit', date : '2022-07-28 08:00:00 AM'},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Purchased', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''}
            ]
            
        },
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'Rejected By Director',
            directorApprovalStatus: {
                status : 'Rejected',
                approvedBy : 'Al Abri Falsal',
                approvedDate : '2020-08-10',
            },
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Rejected by Director', status : 'Submit', date : '2022-07-28 08:00:00 AM'},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Purchased', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''}
            ]
        },
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'LPO Issued',
            directorApprovalStatus: {
                status : 'Approved',
                approvedBy : 'Al Abri Falsal',
                approvedDate : '2020-08-10',
            },
            lpoIssueDetails: {
                lpoNumber : "'23154-Cs321",
                lpoDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Rejected by Director', status : 'Submit', date : '2022-07-28 08:00:00 AM'},
                { stage : 'LPO Issued', status : 'Submit', date : '2022-08-01 08:00:00 AM'},
                { stage : 'Purchased', status : 'Pending', date : ''},
                { stage : 'Delivered', status : 'Pending', date : ''}
            ]
        },
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'Purchased',
            directorApprovalStatus: {
                status : 'Approved',
                approvedBy : 'Al Abri Falsal',
                approvedDate : '2020-08-10',
            },
            lpoIssueDetails: {
                lpoNumber : "'23154-Cs321",
                lpoDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            purchaseOrderDetails: {
                purchaseOrderNumber : "'23154-Cs321",
                purchaseOrderDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Rejected by Director', status : 'Submit', date : '2022-07-28 08:00:00 AM'},
                { stage : 'LPO Issued', status : 'Submit', date : '2022-08-01 08:00:00 AM'},
                { stage : 'Purchased', status : 'Submit', date : '2022-08-03 08:00:00 AM'},
                { stage : 'Delivered', status : 'Pending', date : ''}
            ]
        },
        {
            estimatedBy: 'Madan Al Abri',
            estimatedDate: '2022-07-20',
            estimates: [
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 1',
                    author : 'Faisal Gawas',
                    edition : '2018.V2.0',
                    isbn : '15831SC13-CS',
                    noOfCopies : '15',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '1500.00'
                },
                {
                    programName : 'Anaesthesia',
                    title : 'Anaesthesia 2018 - Edition 2',
                    author : 'Faisal Gawas',
                    edition : '2018.V1.5',
                    isbn : '99831SC13-CS',
                    noOfCopies : '25',
                    requestedBy : 'Madan Al Abri',
                    requestedDate : '2022-07-25',
                    estimate : '2500.00'
                }
            ],
            estimateTotal : '4000.00',
            status : 'Delivered',
            directorApprovalStatus: {
                status : 'Approved',
                approvedBy : 'Al Abri Falsal',
                approvedDate : '2020-08-10',
            },
            lpoIssueDetails: {
                lpoNumber : "'23154-Cs321",
                lpoDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            purchaseOrderDetails: {
                purchaseOrderNumber : "'23154-Cs321",
                purchaseOrderDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            deliveryDetails: {
                deliveryNumber : "'HJ-Cs321",
                deliveryDescription : "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rerum iure numquam a impedit aperiam!</p>",
            },
            applicationStatus : [
                { stage : 'Estimated', status : 'Submit', date : '2022-07-25 08:00:00 AM'},
                { stage : '	Rejected by Director', status : 'Submit', date : '2022-07-28 08:00:00 AM'},
                { stage : 'LPO Issued', status : 'Submit', date : '2022-08-01 08:00:00 AM'},
                { stage : 'Purchased', status : 'Submit', date : '2022-08-03 08:00:00 AM'},
                { stage : 'Delivered', status : 'Submit', date : '2022-08-10 08:00:00 AM'}
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
