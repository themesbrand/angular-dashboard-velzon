const data = {
    tableData : [
        {
            innovationInitiative : 'Innovation Initiative Name 1',
            startOfTheInitiative : '2022-09-15',
            endOfTheInitiative : '2022-09-20',
            status : 'Created',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Sent to Media Department', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Submit by Media Department', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval Status', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            innovationInitiative : 'Innovation Initiative Name 2',
            startOfTheInitiative : '2022-09-15',
            endOfTheInitiative : '2022-09-20',
            status : 'Sent to Media Department',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Sent to Media Department', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Submit by Media Department', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval Status', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            innovationInitiative : 'Innovation Initiative Name 3',
            startOfTheInitiative : '2022-09-15',
            endOfTheInitiative : '2022-09-20',
            status : 'Submit by Media Department',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Sent to Media Department', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Submit by Media Department', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Approval Status', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            innovationInitiative : 'Innovation Initiative Name 2',
            startOfTheInitiative : '2022-09-15',
            endOfTheInitiative : '2022-09-20',
            status : 'Approved',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Sent to Media Department', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Submit by Media Department', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
                { stage : 'Approved', status : 'Complete', date : '2022-07-25', by : 'Al Abri Falsal'},
            ],
        },



    ],
    initiativeObject : {
        initiativeName : 'Innovation Initiative Name 1',
        startDate : '2022-10-15',
        endDate : '2022-10-26',
        eligibility : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum unde, esse cupiditate saepe in culpa aperiam.',
        terms : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum unde, esse cupiditate saepe in culpa aperiam.',
        startDateOfAcceptingProposals : '2022-09-01',
        endDateOfAcceptingProposals : '2022-09-15',
    }
}

export {data}