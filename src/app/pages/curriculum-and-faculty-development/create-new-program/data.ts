const data = {
    tableData : [
        {
            requestId: 'S321321',
            programRequested: 'New Program - 1',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Request Submitted',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Reivew by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : null,
            similarProgram: null,
            chairmenComments : null,
            vppaApprovalComments : null,
            proposalLink : null,
            vppaCommentsToEb : null,
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'A321521',
            programRequested: 'New Program - 2',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending Review by CH',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : null,
            vppaApprovalComments : null,
            proposalLink : null,
            vppaCommentsToEb : null,
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'D321521',
            programRequested: 'New Program - 3',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending VPAA Approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : null,
            proposalLink : null,
            vppaCommentsToEb : null,
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'S921522',
            programRequested: 'New Program - 4',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending Curriculum submission',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : null,
            vppaCommentsToEb : null,
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'S121544',
            programRequested: 'New Program - 5',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Curriculum submitted for VPAA approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : null,
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X121454',
            programRequested: 'New Program - 6',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Curriculum submitted for EB approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : null,
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X921454',
            programRequested: 'New Program - 7',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Curriculum submitted for BoT approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : null,
            taskForceArray : null,
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X899456',
            programRequested: 'New Program - 9',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending VPAA Approval for TaskForce',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            taskForceArray : [{
                    name : 'Madan Khan',
                    email : 'Madan@email.com',
                    civilId : '968351321321'
                },
                {
                    name : 'Faisal Gawas',
                    email : 'Gawas@email.com',
                    civilId : '968351321321'
                }        
            ],
            qararLink: null,
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X799741',
            programRequested: 'New Program - 10',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending VPAA Approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            taskForceArray : [{
                    name : 'Madan Khan',
                    email : 'Madan@email.com',
                    civilId : '968351321321'
                },
                {
                    name : 'Faisal Gawas',
                    email : 'Gawas@email.com',
                    civilId : '968351321321'
                }        
            ],
            qararLink: 'link',
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X799852',
            programRequested: 'New Program - 11',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending at Task Force',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            taskForceArray : [{
                    name : 'Madan Khan',
                    email : 'Madan@email.com',
                    civilId : '968351321321'
                },
                {
                    name : 'Faisal Gawas',
                    email : 'Gawas@email.com',
                    civilId : '968351321321'
                }        
            ],
            qararLink: 'link',
            cfdsComments : null,
            curriculum : null
        },
        {
            requestId: 'X799852',
            programRequested: 'New Program - 11',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Pending CFDS Review',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            taskForceArray : [{
                    name : 'Madan Khan',
                    email : 'Madan@email.com',
                    civilId : '968351321321'
                },
                {
                    name : 'Faisal Gawas',
                    email : 'Gawas@email.com',
                    civilId : '968351321321'
                }        
            ],
            qararLink: 'link',
            cfdsComments : null,
            curriculum : {
                
            }
        },
        {
            requestId: 'X799963',
            programRequested: 'New Program - 12',
            requestedBy: 'Abdel Maddali',
            requestedDate: '2022-10-15',
            status: 'Curriculum Finalized',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'Pending Review by CH', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending VPAA Approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending Curriculum submission', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                
                { stage : 'Pending VPAA Approval for TaskForce', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending at Task Force', status : 'Pending', date : null, 'by' : null },
                { stage : 'Pending CFDS Review', status : 'Pending', date : null, 'by' : null },
                { stage : 'Curriculum Finalized', status : 'Pending', date : null, 'by' : null },
            ],
            vppaComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            similarProgram: 'Anesthesia',
            chairmenComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            vppaApprovalComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            proposalLink : 'link',
            vppaCommentsToEb : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToBot : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            bcsCommentsToCreateTaskForce : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            taskForceArray : [{
                    name : 'Madan Khan',
                    email : 'Madan@email.com',
                    civilId : '968351321321'
                },
                {
                    name : 'Faisal Gawas',
                    email : 'Gawas@email.com',
                    civilId : '968351321321'
                }        
            ],
            qararLink: 'link',
            cfdsComments : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus amet beatae.',
            curriculum : {
                
            }
        },

        
    ]
}


export {data}








