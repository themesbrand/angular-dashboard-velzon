const data = {
    tableData : [
        {
            refNumber : 'I-In-132564',
            applicantName : 'Al Abri Falsal',
            projectTitle: 'Project Title - 1',
            appliedDate : '2022-07-01',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Reviewed', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approved by Director', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approved by VPAA', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Final Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                
            ],
        },
        {
            refNumber : 'I-In-132564',
            applicantName : 'Saleh Mahfoudh',
            projectTitle: 'Project Title - 2',
            appliedDate : '2022-07-15',
            status : 'Assigned Reviewers',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approved by Director', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approved by VPAA', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Final Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                
            ],
        },
        {
            refNumber : 'I-In-258456789',
            applicantName : 'Hilal basheer',
            projectTitle: 'Project Title - 3',
            appliedDate : '2022-07-15',
            status : 'Review complete',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approved by VPAA', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Final Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                
            ],
        },
        {
            refNumber : 'I-In-789456',
            applicantName : 'Faisal Gawas',
            projectTitle: 'Project Title - 4',
            appliedDate : '2022-07-15',
            status : 'Approved by Director',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by VPAA', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Final Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            refNumber : 'I-In-3246589',
            applicantName : 'Saleh Mahfoudh',
            projectTitle: 'Project Title - 5',
            appliedDate : '2022-07-15',
            status : 'Approved by VPAA',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by VPAA', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Final Approval', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            refNumber : 'I-In-456789',
            applicantName : 'Abdel Maddali',
            projectTitle: 'Project Title - 6',
            appliedDate : '2022-07-15',
            status : 'Final Approval',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by VPAA', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Update Milestones', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            refNumber : 'I-In-456789',
            applicantName : 'Al Abri Ibraham',
            projectTitle: 'Project Title - 7',
            appliedDate : '2022-07-15',
            status : 'Milestones Updated',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by VPAA', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Update Milestones',  status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval of Milestones', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            refNumber : 'I-In-456789',
            applicantName : 'Al Abri Ibraham',
            projectTitle: 'Project Title - 8',
            appliedDate : '2022-07-15',
            status : 'Milestones Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Madan Khan'},
                { stage : 'Reviewed', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by Director', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Approved by VPAA', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Al Abri Ibraham'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Update Milestones',  status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval of Milestones', status : 'Complete', date : '2022-08-03 08:00:00 AM', by : 'Faisal Gawas'}                
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
