const data = {
    ecMemberTableData : [
        {
            name : 'Saleh Mahfoudh',
            position : 'Member',	
            startDate : '2021-06-16',
            status : 'Active'
        },
        {
            name : 'Faisal Gawas',
            position : 'Asst. Program Director',
            startDate : '2019-06-16',
            status : 'Terminated'
        },
        {
            name : 'Al Abri Falsal',
            position : 'Asst. Program Director',
            startDate : '2021-06-16',
            status : 'Active'
        },
    ],
    adminTableData : [
        {
            name : 'Al Abri Ibraham',
            position : 'Program Director',
            startDate : '2018-05-26',
            absencePeriod : [
              {
                startDate : '2022-01-15',
                endDate : '2022-01-20'
              },
              {
                startDate : '2022-01-15',
                endDate : '2022-01-20'
              }
            ],
            totalWorkingDays : 250,
            totalAbsenceDays : 5,
            status : 'Submitted to EC Section',
            applicationStatus : [  
                { stage : 'Submit to EC Section', status : 'Completed', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
                { stage : 'EOY QARAR Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Request Document Number', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submit to Finance', status : 'Pending', date : null, 'by' : null }
            ],
            incentiveAmount : 200 
        },
        {
            name : 'Al Abri Ibraham',
            position : 'Program Director',
            startDate : '2018-05-26',
            absencePeriod : [
              {
                startDate : '2022-01-15',
                endDate : '2022-01-20'
              }
            ],
            totalWorkingDays : 250,
            totalAbsenceDays : 5,
            status : 'EOY QARAR Approval',
            applicationStatus : [
               
                { stage : 'Submit to EC Section', status : 'Completed', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
                { stage : 'EOY QARAR Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Request Document Number', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submit to Finance', status : 'Pending', date : null, 'by' : null }
            ],
            qararLink : 'link'
        },
        {
            name : 'Al Abri Ibraham',
            position : 'Program Director',
            startDate : '2018-05-26',
            absencePeriod : [
              {
                startDate : '2022-01-15',
                endDate : '2022-01-20'
              }
            ],
            totalWorkingDays : 250,
            totalAbsenceDays : 5,
            status : 'Document Number Updated',
            applicationStatus : [
               
                { stage : 'Submit to EC Section', status : 'Completed', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
                
                { stage : 'EOY QARAR Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Request Document Number', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submit to Finance', status : 'Pending', date : null, 'by' : null }
            ]
        },
        {
            name : 'Al Abri Ibraham',
            position : 'Program Director',
            startDate : '2018-05-26',
            absencePeriod : [
              {
                startDate : '2022-01-15',
                endDate : '2022-01-20'
              }
            ],
            totalWorkingDays : 250,
            totalAbsenceDays : 5,
            status : 'Submitted to Finance',
            applicationStatus : [
               
                { stage : 'Submit to EC Section', status : 'Completed', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
                
                { stage : 'EOY QARAR Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Request Document Number', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submit to Finance', status : 'Pending', date : null, 'by' : null }
            ]
        },

    ]
}

export { data };