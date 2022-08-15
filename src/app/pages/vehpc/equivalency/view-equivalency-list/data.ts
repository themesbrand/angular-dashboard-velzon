const data = {
    tableDataEmployer : [
        {
            name : 'Madan Al Abri',
            nationality : 'Omani',
            passportNumber : '9873354651',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Draft',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-09-10', by : 'Abbas Al Ajmi'},
                { stage : 'Received By Equivalency Section Admin', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Madan Khan',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '2',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Received',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-09-10', by : 'Abbas Al Ajmi'},
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '5',
            recievedEvalutations : '3',
            createdOn : '2022-09-10',
            status : 'In Progress',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-09-10', by : 'Abbas Al Ajmi'},
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Insufficient',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-09-10', by : 'Abbas Al Ajmi'},
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Marked as Insufficient', status : 'Complete', date : '2022-09-16', by : 'Al Abri Ibraham'}                
            ]
        },
        {
            name : 'Faisal Gawas',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '1',
            createdOn : '2022-09-10',
            status : 'Completed',
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-09-10', by : 'Abbas Al Ajmi'},
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Marked as Completed', status : 'Complete', date : '2022-09-16', by : 'Al Abri Ibraham'}                
            ]
        },
    ],
    tableDataAdmin : [
        {
            name : 'Madan Khan',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '2',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Received',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '5',
            recievedEvalutations : '3',
            createdOn : '2022-09-10',
            status : 'In Progress',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Equivalency Process Status', status : 'Pending', date : 'N/A', by : 'N/A'}                
            ]
        },
        {
            name : 'Al Abri Ibraham',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '6',
            recievedEvalutations : '2',
            createdOn : '2022-09-10',
            status : 'Insufficient',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Marked as Insufficient', status : 'Complete', date : '2022-09-16', by : 'Al Abri Ibraham'}                
            ]
        },
        {
            name : 'Faisal Gawas',
            nationality : 'Omani',
            passportNumber : '6548975321',
            profession : 'Doctor',
            mobile : '+968456789',
            dfrn : 'HC-D21325-1321',
            certsToEvaluate : '4',
            recievedEvalutations : '1',
            createdOn : '2022-09-10',
            status : 'Completed',
            applicationStatus : [
                { stage : 'Received By Equivalency Section Admin', status : 'Complete', date : '2022-09-11', by : 'Al Abri Ibraham'},
                { stage : 'Send to Equivalency Committee', status : 'Complete', date : '2022-09-15', by : 'Al Abri Falsal'},
                { stage : 'Marked as Completed', status : 'Complete', date : '2022-09-16', by : 'Al Abri Ibraham'}                
            ]
        },
    ],
    equivalencyRequestObject: {
        name : 'Madan Al Abri',
        nationality : 'OM',
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
    }
}

export {data}