const data = {
    applicationForm : {
        civilId: '9485131321321',
        name: 'Abbas Al Ajmi',
        ombsNumber: '210-19',
        staffNumber: '210-19',
        levelOfTraining: 'L5',
        currentTrainingProgram: 'Anesthesia',
        programStartDate: '2022-10-05',
        Sponsor: 'MOH',
        interruptionType : 'One Block',
        periodOfInterruption : {
            from : 1, to: 1
        },
        reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!'
    },
    tableData : [
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
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
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :''},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        },
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
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
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Approval', status : 'Pending', date : '', by :''}
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
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :''},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        },
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
            ombsNumber: '255-19',
            staffNumber: '255-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '3 Blocks',
            periodOfInterruption : {
                from : 3, to: 5
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Sponsor Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Rejected', status : 'Complete', date : '2022-07-28', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :''},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
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
            status : 'Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28', by :'Al Abri Ibraham'},
                { stage : 'Approved', status : 'Complete', date : '2022-07-30', by :'Hilal basheer'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        },
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
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
            status : 'Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28', by :'Al Abri Ibraham'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-30', by :'Hilal basheer'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
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
            status : 'Qarar Issued',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28', by :'Al Abri Ibraham'},
                { stage : 'Approved', status : 'Complete', date : '2022-07-30', by :'Hilal basheer'},
                { stage : 'Qarar Issued', status : 'Complete', date : '2022-08-01', by :'Abu Nasser'}
            ]
        },
    ],
    tableDataEmployerView : [
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
            ombsNumber: '255-19',
            staffNumber: '255-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '3 Blocks',
            periodOfInterruption : {
                from : 1, to: 1
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :''},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
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
                from : 4, to: 6
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :''},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        },
        {
            civilId: '98213543213',
            name: 'Abdel Maddali',
            ombsNumber: '255-19',
            staffNumber: '255-19',
            levelOfTraining: 'L5',
            currentTrainingProgram: 'Anesthesia',
            programStartDate: '2022-10-05',
            Sponsor: 'MOH',
            interruptionType : '1 Block',
            periodOfInterruption : {
                from : 1, to: 1
            },
            reason : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi, minus eligendi accusantium repudiandae id!',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25', by : 'Abdel Maddali'},
                { stage : 'Approval', status : 'Pending', date : '', by :''}
            ]
        }
    ]
}

export {data};