const data = {
    userData : {
        trainee : 'Abbas Al Ajmi',
        omsbNumber : '19-201',
        programName : 'Anaesthesia',
        trainingLevel : 'R3',
        trainingSite : 'Al Nahdah Hospital',
        sponsor : 'MOH',
        address : '475C, Al Hamra, Oman',
        email : 'Abbas@gmail.com',
        dateOfApplication : new Date(),
    },
    typeOfLeave : ['Annual', 'Sick', 'Emergency', 'Scientific', 'Maternity', 'Compensation'],
    leaveRequests : [
        { 
            dateOfApplication : '2022-05-25', typeOfLeave : 'Annual', leaveFrom : '2022-06-01', leaveTo : '2022-06-02', numberOfDays: '1', contactOnLeaveName: 'Abu Ali Ajmi', contactOnLeaveEmail : 'abu18@gmail.com', contactOnLeavePhone : '+968 12 123785',
            leaveStatus : 'Approved',
            leaveApprovalStatus : [
                {
                    stage : 'Trainee', name : 'Abbas Al Ajmi', date : '2022-05-25 08:00:00 AM', status: 'Applied For Leave'
                },
                {
                    stage : 'Chief Resident', name : 'Madan Al Abri', date : '2022-05-26 08:00:00 AM', status: 'Approved'
                },
                {
                    stage : 'Rotation Supervisor', name : 'Yousuf Mahmood Mahfoudh', date : '2022-05-26 08:00:00 AM' , status: 'Approved'
                },
                {
                    stage : 'Associate Program Director', name : 'Saleh Mahfoudh', date : '2022-05-26 08:00:00 AM' , status: 'Approved'
                },
            ],
            leaveReturnForm: {
                numberOfDaysInExcess : 1,
                reasonsForDelay : 'Doctors appointment got rescheduled.',
                returnApprovalStatus: [
                    {
                        stage : 'Trainee', name : 'Abbas Al Ajmi', date : '2022-05-25 08:00:00 AM', status: 'Applied For Leave Return'
                    },
                    {
                        stage : 'Program Director of the Affected Rotation', name : 'Madan Al Abri', date : '2022-05-27 08:00:00 AM', status: 'Approved'
                    },
                    {
                        stage : 'Assistant Program Director', name : 'Yousuf Mahmood Mahfoudh', date : '2022-05-28 08:00:00 AM' , status: 'Awaiting Approval'
                    }
                ]
            }
        
        },
        { 
            dateOfApplication : '2022-06-15', typeOfLeave : 'Annual', leaveFrom : '2022-07-15', leaveTo : '2022-07-16', numberOfDays: '2', contactOnLeaveName: 'Abu Ali Ajmi', contactOnLeaveEmail : 'abu18@gmail.com', contactOnLeavePhone : '+968 12 123785',
            leaveStatus : 'Approved',
            leaveApprovalStatus : [
                {
                    stage : 'Chief Resident', name : 'Madan Al Abri', date : '2022-07-10 08:00:00 AM', status: 'Approved'
                },
                {
                    stage : 'Rotation Supervisor', name : 'Yousuf Mahmood Mahfoudh', date : '2022-07-10 08:00:00 AM' , status: 'Approved'
                },
                {
                    stage : 'Associate Program Director', name : 'Saleh Mahfoudh', date : '2022-07-10 08:00:00 AM' , status: 'Approved'
                },
            ],
            leaveReturnForm: null
        },
        { 
            dateOfApplication : '2022-07-05', typeOfLeave : 'Annual', leaveFrom : '2022-07-28', leaveTo : '2022-08-03', numberOfDays: '5', contactOnLeaveName: 'Abu Ali Ajmi', contactOnLeaveEmail : 'abu18@gmail.com', contactOnLeavePhone : '+968 12 123785',
            leaveStatus : 'Awaiting Approval',
            leaveApprovalStatus : [
                {
                    stage : 'Chief Resident', name : 'Madan Al Abri', date : '2022-07-15 08:00:00 AM', status: 'Approved'
                },
                {
                    stage : 'Rotation Supervisor', name : 'Yousuf Mahmood Mahfoudh', date : null , status: 'Awaiting Approval'
                },
                {
                    stage : 'Associate Program Director', name : 'Saleh Mahfoudh', date : null , status: 'Awaiting Approval'
                },
            ],
            leaveReturnForm: null
        },
    ],
    leaveStatus: [ 'Awaiting Approval', 'On Leave', 'Returned from Leave'],
    leaveApprovalStatus : ['Chief Resident', 'Rotation Supervisor', 'Associate Program Director']
}

export { data }