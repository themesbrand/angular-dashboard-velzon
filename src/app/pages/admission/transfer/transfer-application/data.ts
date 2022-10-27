const data = {
    applicationForm : {
        transferType : 'Specialty Program to GFP',
        transferToGeneralFoundation : 'Value 1',
        reasonsForTransferToGeneralFoundationProgram : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia necessitatibus officiis magni? Iusto consequuntur veniam at rem ratione exercitationem placeat!'
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
            transferType : 'Specialty Program to GFP',
            transferToGeneralFoundation : 'Value 1',
            reasonsForTransferToGeneralFoundationProgram : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia necessitatibus officiis magni? Iusto consequuntur veniam at rem ratione exercitationem placeat!',
            programRequestedForTransferTo : null,
            transferToAnotherResidencyProgram : null,
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abbas Al Ajmi'},
                { stage : 'Sponsor Approval', status : 'Pending', date : '', by :''},
                { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Pending', date : '', by :'GFP Program Director - Al Abri Falsal'},
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
            transferType : 'Specialty Program to GFP',
            transferToGeneralFoundation : 'Value 1',
            reasonsForTransferToGeneralFoundationProgram : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia necessitatibus officiis magni? Iusto consequuntur veniam at rem ratione exercitationem placeat!',
            programRequestedForTransferTo : null,
            transferToAnotherResidencyProgram : null,
            status : 'Sponsor Approved',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 10:00:00 AM', by : 'Abbas Al Ajmi'},
                { stage : 'Sponsor Approved', status : 'Complete', date : '2022-07-28 10:00:00 AM', by :'Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'TA Director - Al Abri Ibraham'},
                { stage : 'Approval', status : 'Pending', date : '', by :'Program Director - Faisal Gawas'},
                { stage : 'Approval', status : 'Pending', date : '', by :'GFP Program Director - Al Abri Falsal'},                { stage : 'Qarar Issued', status : 'Pending', date : '', by :''}
            ]
        }
    ]
}

export {data};