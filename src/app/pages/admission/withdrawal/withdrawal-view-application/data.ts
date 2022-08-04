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
        withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Pending', date : '', by :'AT Director - Al Abri Ibraham'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''},
                { stage : 'Clearance In Progress', status : 'Pending', date : '', by :''},
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Sponsor Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 08:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Pending', date : '', by :'AT Director - Al Abri Ibraham'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''},
                { stage : 'Clearance In Progress', status : 'Pending', date : '', by :''},
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Sponsor Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-08-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Rejected', status : 'Complete', date : '2022-08-28 10:00:00 AM', by :'Al Abri Ibraham'}
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 08:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Complete', date : '2022-07-30 08:00:00 AM', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Complete', date : '2022-07-30 08:00:00 AM', by :'AT Director - Al Abri Ibraham'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''},
                { stage : 'Clearance In Progress', status : 'Pending', date : '', by :''},
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 08:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-30 08:00:00 AM', by :'Hilal basheer'},
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Qarar Issued',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 08:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approved', status : 'Complete', date : '2022-07-30 08:00:00 AM', by :'Hilal basheer'},
                { stage : 'Qarar Issued', status : 'Complete', date : '2022-08-01 08:00:00 AM', by :'Abu Nasser'},
                { stage : 'Clearance In Progress', status : 'Pending', date : '', by :''},
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Clearance Completed',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-08-01 08:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approved', status : 'Complete', date : '2022-08-03 08:00:00 AM', by :'Abdel Maddali'},
                { stage : 'Qarar Issued', status : 'Complete', date : '2022-08-04 08:00:00 AM', by :'Faisal Gawas'},
                { stage : 'Clearance Completed', status : 'Complete', date : '2022-08-05 08:00:00 AM', by :'Hilal basheer'},
            ]
        }
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
            withdrawalReason : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquid laudantium cupiditate accusamus culpa qui dignissimos possimus ab tempore neque blanditiis quod voluptatibus ea facere nisi hic, reprehenderit nostrum aperiam.',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Pending', date : '', by :'AT Director - Al Abri Ibraham'},
                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''},
                { stage : 'Clearance In Progress', status : 'Pending', date : '', by :''},
            ]
        }
    ]
}

export {data};