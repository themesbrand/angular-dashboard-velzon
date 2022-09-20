const data = {
    tableData : [
        {
            requestId : '54321',
            requestorName : 'Madan Khan',
            activityTitle : 'Activity Title - 1',
            activityDate : '2022-10-25 08:00:00 AM',
            startTime : '09:00:00 AM',
            endTime : '11:00:00 AM',
            status : 'Requested',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Agreement', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Invoice', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            requestId : '45684',
            requestorName : 'Al Madan Khan',
            activityTitle : 'Activity Title - 2',
            activityDate : '2022-10-25 08:00:00 AM',
            startTime : '09:00:00 AM',
            endTime : '11:00:00 AM',
            status : 'Agreement Pending',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Agreement', status : 'Pending', date : 'N/A', by : 'N/A'}, 
                { stage : 'Invoice', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            requestId : '4567891',
            requestorName : 'Al Madan Khan',
            activityTitle : 'Activity Title - 2',
            activityDate : '2022-10-25 08:00:00 AM',
            startTime : '09:00:00 AM',
            endTime : '11:00:00 AM',
            status : 'Pending Invoice',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Agreement', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'}, 
                { stage : 'Invoice', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            requestId : '4567891',
            requestorName : 'Al Madan Khan',
            activityTitle : 'Activity Title - 2',
            activityDate : '2022-10-25 08:00:00 AM',
            startTime : '09:00:00 AM',
            endTime : '11:00:00 AM',
            status : 'Payment Pending',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Agreement', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'}, 
                { stage : 'Invoice', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'},  
                { stage : 'Payment', status : 'Pending', date : 'N/A', by : 'N/A'},  
                { stage : 'Confirmation', status : 'Pending', date : 'N/A', by : 'N/A'}, 
            ]
        },
        {
            requestId : '4567891',
            requestorName : 'Al Madan Khan',
            activityTitle : 'Activity Title - 2',
            activityDate : '2022-10-25 08:00:00 AM',
            startTime : '09:00:00 AM',
            endTime : '11:00:00 AM',
            status : 'Confirmed',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Madan Khan'}, 
                { stage : 'Agreement', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'}, 
                { stage : 'Invoice', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'},  
                { stage : 'Payment', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'},  
                { stage : 'Confirmation', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'}, 
            ]
        },
    ],    
}

export {data}