const data = {

    tableDataEmployer : [
        {
            name : 'Madan Khan',
            nationality : 'Omani',
            dob : '05-05-1988',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '2',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Draft',
            applicationStatus : [
                { stage : 'Submitted as Draft', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Received By Equivalency Section Admin', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process by Committee', status : 'Pending', date : 'N/A', by : 'N/A'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}    
            ]
        },
        {
            name : 'Madan Khan',
            nationality : 'Omani',
            dob : '05-05-1988',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '2',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Received',
            applicationStatus : [
                
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process by Committee', status : 'Pending', date : 'N/A', by : 'N/A'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}    
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '5',
            recievedEvalutations : '3',
            createdOn : '2022-09-10',
            status : 'In Progress',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee', status : 'Pending', date : 'N/A', by : 'N/A'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}             
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Insufficient',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Marked as Insufficient', status : 'Complete', date : '2022-09-16 08:30:00 AM', by : 'Al Abri Ibraham'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Completed by Committee',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}           
            ]
        },
        {
            name : 'Faisal Gawas',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '1',
            createdOn : '2022-09-10',
            status : 'Completed',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee',  status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}               
            ]
        },
    ],
    tableDataAdmin : [
        {
            name : 'Madan Khan',
            nationality : 'Omani',
            dob : '05-05-1988',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '2',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Received',
            applicationStatus : [
                
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process by Committee', status : 'Pending', date : 'N/A', by : 'N/A'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}    
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '5',
            recievedEvalutations : '3',
            createdOn : '2022-09-10',
            status : 'In Progress',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee', status : 'Pending', date : 'N/A', by : 'N/A'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}             
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Insufficient',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Marked as Insufficient', status : 'Complete', date : '2022-09-16 08:30:00 AM', by : 'Al Abri Ibraham'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Completed by Committee',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Pending', date : 'N/A', by : 'N/A'}           
            ]
        },
        {
            name : 'Faisal Gawas',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '1',
            createdOn : '2022-09-10',
            status : 'Completed',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11 08:30:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process by Committee',  status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}   ,
                { stage : 'Equivalency Process by Admin', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'}               
            ]
        },
    ],
    tableDataCommittee : [
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '5',
            recievedEvalutations : '3',
            createdOn : '2022-09-10',
            status : 'In Progress',
            comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Received By Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Faisal Gawas',
            nationality : 'Omani',
            dob : '1968-05-05',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '1',
            createdOn : '2022-09-10',
            status : 'Completed',
            applicationStatus : [
                { stage : 'Received By Equivalency Committee', status : 'Complete', date : '2022-09-15 08:30:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Marked as Completed', status : 'Complete', date : '2022-09-16', by : 'Al Abri Ibraham'}                
            ]
        },
    ],
    equivalencyRequestObject: {
        name : 'Madan Al Abri',
        nationality : 'OM',
        dob : '1988-05-05',
        passportNumber : '9873354651',
        passportExpiry : '2032-10-15',
        nationalIdNumber : '165498731321',
        nationalIdExpiry : '2045-10-15',
        homeTelephone : '+96832145689',
        mobile : '+968123456789',
        email : 'Madan@email.com',
        
        profession: 'Doctor',
        officialLetterTitle: 'Official Letter',
  
        certificatesToBeEvaluate : [
            {
                title : 'Certificates 1' 
            },
            {
                title : 'Certificates 2' 
            }
        ],
        dfrnWithReceipt : [
            {
                title : 'DRFN Receipt #: 1' 
            },
            {
                title : 'DRFN Receipt #: 2' 
            }
        ],
        otherDocuments : [
            {
                title : 'Document 1' 
            },
            {
                title : 'Document 2' 
            }
        ]
    },
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
