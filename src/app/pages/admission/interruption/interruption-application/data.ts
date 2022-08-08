const data = {
    applicationForm : {
        interruptionType : 'One Block',
        periodOfInterruption : {
            from : 1, to: 1
        },
        reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!'
    },
    tableData : [
        {
            civilId: '98213543213',
            name: 'Abbas Al Ajmi',
            ombsNumber: '255-19',
            staffNumber: '255-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '3 Blocks',
            periodOfInterruption : {
                from : 1, to: 3
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Hilal basheer'},  
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        },
        {
            civilId: '98213543213',
            name: 'Abbas Al Ajmi',
            ombsNumber: '255-19',
            staffNumber: '255-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '1 Block',
            periodOfInterruption : {
                from : 5, to: 5
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Hilal basheer'},  
            ]
        },
        {
            civilId: '98431321355',
            name: 'Abbas Al Ajmi',
            ombsNumber: '210-19',
            staffNumber: '210-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '3 Blocks',
            periodOfInterruption : {
                from : 1, to: 3
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Sponsor Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 10:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Hilal basheer'},  
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        }
    ],
}

export {data};