const data = {
    tableData : [
        {
            title : 'Research Project - 1',
            mentor : 'Hilal basheer',
            status : 'Open',
            applicationStatus : [
                { stage : 'Open', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Proposal Submission', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Review', status : 'Pending', date : 'N/A', by : 'N/A'},
            ]
        },
        {
            title : 'Research Project - 2',
            mentor : 'Hilal basheer',
            status : 'Submitted',
            applicationStatus : [
                { stage : 'Open', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Proposal Submission', status : 'Complete',date : '2022-07-25 10:00:00 AM', by : 'Madan Al Abri'},
                { stage : 'Review', status : 'Pending', date : 'N/A', by : 'N/A'},
            ]
        },
        {
            title : 'Research Project - 3',
            mentor : 'Hilal basheer',
            status : 'Reviewed',
            applicationStatus : [
                { stage : 'Open', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Review', status : 'Complete',  date : '2022-07-25 10:00:00 AM', by : 'Madan Al Abri'},
                { stage : 'Approval', status : 'Complete',  date : '2022-07-25 10:00:00 AM', by : 'Al Abri Ibraham'},
            ]
        },
    ],
    formObject : {
        
        currentStage : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        achieved : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        deviations : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        actualOutcomes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        equipmentPurchased : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        publication : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        contribution : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
        
        
        timeline : [
            {
                activity : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
                start : 'Fri Aug 26 2022 13:00:00 GMT+0530 (India Standard Time)',
                end : 'Fri Aug 26 2022 12:00:00 GMT+0530 (India Standard Time)',
                status : 'Completed'
            },
            {
                activity : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                start : 'Fri Aug 28 2022 13:00:00 GMT+0530 (India Standard Time)',
                end : 'Fri Aug 28 2022 12:00:00 GMT+0530 (India Standard Time)',
                status : 'Completed'
            },
            {
                activity : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt minus iusto itaque fugiat, odit deserunt!',
                start : 'Fri Sep 26 2022 13:00:00 GMT+0530 (India Standard Time)',
                end : 'Fri Sep 26 2022 12:00:00 GMT+0530 (India Standard Time)',
                status : 'In Progress'
            },
        ],
    }
}

export {data}