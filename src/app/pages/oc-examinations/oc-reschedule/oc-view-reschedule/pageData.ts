const pageData = {
    tableDataTrainee : [
        {
            programName : 'ENT',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-15',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-12',
            status : 'Draft',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Draft', status : 'Pending',  date : '2022-08-25', by: 'Al Abri Ibraham'},
                { stage : 'Pending Response', status : 'Pending', date : null, by: null},
                { stage : 'Approval', status : 'Pending', date : null, by: null},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-09',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-12',
            status : 'Pending',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Draft', status : 'Complete',  date : '2022-08-25', by: 'Al Abri Ibraham'},
                { stage : 'Pending Response', status : 'Pending', date : null, by: null},
                { stage : 'Approval', status : 'Pending', date : null, by: null},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-05',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-26',
            status : 'Approved',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Draft', status : 'Complete',  date : '2022-08-25', by: 'Al Abri Ibraham'},
                { stage : 'Responded', status : 'Complete', date : '2022-08-29', by: 'Abu Nasser'},
                { stage : 'Approval Status - Approved', status : 'Complete', date : '2022-09-01', by: 'Hilal basheer'},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-05',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-26',
            status : 'Rejected',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Saleh Mahfoudh'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Faisal Gawas'
                }
            ],
            applicationStatus : [
                { stage : 'Draft', status : 'Complete',  date : '2022-08-25', by: 'Al Abri Ibraham'},
                { stage : 'Responded', status : 'Complete', date : '2022-08-29', by: 'Abu Nasser'},
                { stage : 'Approval Status - Rejected', status : 'Complete', date : '2022-09-01', by: 'Hilal basheer'},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-05',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-26',
            status : 'Returned',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Al Abri Ibraham'
                }
            ],
            applicationStatus : [
                { stage : 'Draft', status : 'Complete',  date : '2022-08-25', by: 'Al Abri Ibraham'},
                { stage : 'Responded', status : 'Complete', date : '2022-08-29', by: 'Abu Nasser'},
                { stage : 'Approval Status - Returned', status : 'Complete', date : '2022-09-01', by: 'Hilal basheer'},
            ]
        },
    ],
    adminDataTrainee : [
        {
            programName : 'ENT',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-15',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-12',
            status : 'Pending',
            createdBy : 'Abbas Al Ajmi',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Pending Response', status : 'Pending',  date : null, by: null},
                { stage : 'Approval', status : 'Pending', date : null, by: null},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-09',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-12',
            status : 'Approved',
            createdBy : 'Abbas Al Ajmi',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Responded', status : 'Complete', date : '2022-08-25', by: 'Abba Al Ajmi'},
                { stage : 'Approved', status : 'Complete', date : '2022-08-25', by: 'Al Abri Ibraham'},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-05',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-26',
            status : 'Rejected',
            createdBy : 'Abbas Al Ajmi',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser'
                }
            ],
            applicationStatus : [
                { stage : 'Responded', status : 'Complete', date : '2022-08-25', by: 'Abba Al Ajmi'},
                { stage : 'Approval Status - Rejected', status : 'Complete', date : '2022-08-25', by: 'Al Abri Ibraham'},
            ]
        },
        {
            programName : 'Anesthesia',
            examType : 'Omani Examination for Nurses (OEN)',
            examDate : '2022-10-05',
            examTime : '08:45 AM',
            reason : 'Lorem ipsum dolor sit amet.',
            attachment : '',
            createdOn : '2022-09-26',
            status : 'Returned',
            createdBy : 'Abbas Al Ajmi',
            comments : [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Saleh Mahfoudh'
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Faisal Gawas'
                }
            ],
            applicationStatus : [
                { stage : 'Responded', status : 'Complete', date : '2022-08-25', by: 'Abba Al Ajmi'},
                { stage : 'Approval Status - Returned', status : 'Complete', date : '2022-08-25', by: 'Al Abri Ibraham'},
            ]
        }
    ],
}

export {pageData}