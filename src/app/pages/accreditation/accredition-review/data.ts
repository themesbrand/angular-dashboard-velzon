const data = {
    tableData : [
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Review Pending',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Survey Team Invitation Sent',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Program Response Submitted',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Assigned to Survey Team',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'AC Report draft Submitted',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Submitted to GMEC',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Presented to EB',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
        },
        {
            programName : 'Anesthesia',
            establishedDate : '2019-01-15',
            lastReview : '2021-06-15',
            dueDateForNextReview : '2023-01-15',
            status : 'Presented to BoT',
            applicationStatus : [
                { stage : 'Requested', status : 'Complete', date : '2022-09-21 10:00:00 AM', by : 'Madan Al Abri'},
              ],
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
            omsb: '19-204',
            selected : false
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com',
            omsb: '19-210',
            selected : false
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com',
            omsb: '19-209',
            selected : false
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com',
            omsb: '19-206',
            selected : false
        },
        {
            name : 'Al Abri Ibraham',
            email : 'Abri@email.com',
            omsb: '19-219',
            selected : false
        },
        {
            name : 'Hilal basheer',
            email : 'Hilal@email.com',
            omsb: '19-221',
            selected : false
        },
    ]
    const userDefinedList: any[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                omsb : user.omsb,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}

