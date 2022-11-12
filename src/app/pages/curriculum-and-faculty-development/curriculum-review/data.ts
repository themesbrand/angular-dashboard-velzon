const data = {
    tableData : [
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Request Submitted',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : null,
            rotationAnalysis : null,
            listOfModifications : null,
            effectiveDate : null,
            commentsFromGme: null,
            commentsFromVppa: null,
            commentsFromBscToEb: null,
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'CFDS review comments submitted',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : null,
            commentsFromGme: null,
            commentsFromVppa: null,
            commentsFromBscToEb: null,
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Submitted for GME Director approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : '2023-01-15',
            commentsFromGme: null,
            commentsFromVppa: null,
            commentsFromBscToEb: null,
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Submitted for VPAA approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : '2023-01-15',
            commentsFromGme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromVppa: null,
            commentsFromBscToEb: null,
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Submitted for EB approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : '2023-01-15',
            commentsFromGme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromVppa: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromBscToEb: null,
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Submitted for BoT approval',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : '2023-01-15',
            commentsFromGme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromVppa: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromBscToEb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromBscToBot: null,
            approvalCommentsFromBsc: null,
        },
        {
            requestId : 'AS321521',
            curriculumToBeReviewed : 'Curriculum Name - 1',
            requestedBy : 'Madan Al Abri',
            requestedDate : '2022-11-10',
            status : 'Changes requested approved',
            applicationStatus : [
                { stage : 'Request Submitted', status : 'Complete', date : '2022-11-25 10:00:00 AM', by : 'Abdel Maddali'},
                { stage : 'CFDS review comments submitted', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for GME Director approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for VPAA approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for EB approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Submitted for BoT approval', status : 'Pending', date : null, 'by' : null },
                { stage : 'Changes requested approved', status : 'Pending', date : null, 'by' : null }
            ],
            curriculumDocument : 'link',
            academicYear : '2023',
            curriculumComponents : getCurriculumComponent(),
            rotationAnalysis : getRotationAnalysis(),
            listOfModifications : getListOfModifications(),
            effectiveDate : '2023-01-15',
            commentsFromGme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromVppa: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromBscToEb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            commentsFromBscToBot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis iste officia.',
            approvalCommentsFromBsc: null,
        },
    ],
    
}

export {data};


function getCurriculumComponent() {
    const data = [
        {
            isSub: false,
            number : 1,
            value : 'Table of Contents',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'Completed'
        },
        {
            isSub: false,
            number : 2,
            value : 'Mission and Vision',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 3,
            value : 'General Goals and Objectives',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'Completed'
        },
        {
            isSub: false,
            number : 4,
            value : 'Admission Criteria',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 5,
            value : 'Curriculum Components',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.1,
            value : 'Duration of the Training Program',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.2,
            value : 'Block Diagram',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.3,
            value : 'Rotation Outlines, Goals & Objectives',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.4,
            value : 'Graded Responsibility for Each Training Year',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.5,
            value : 'Core Competencies',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.6,
            value : 'Syllabus (content of learning)',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.7,
            value : 'Academic Activities/Teaching Methods (Rounds, JCs, etc.)',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.8,
            value : 'Simulation Learning',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.9,
            value : 'OMSB Mandatory Courses',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'Completed'
        },
        {
            isSub: true,
            number : 5.10,
            value : 'Program Mandatory Course (Local & Abroad)',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.11,
            value : 'Cases and Procedures',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.12,
            value : 'Assessment and Feedback',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.13,
            value : 'Examination Requirements',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.14,
            value : 'Logbook/Portfolio (through NI)',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'Completed'
        },
        {
            isSub: true,
            number : 5.15,
            value : 'Research and Scholarly Activity Requirements',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.16,
            value : 'Progression Criteria',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.17,
            value : 'Outcome Measures and Exit Qualifications',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.18,
            value : 'Quality Assurance and Patients &Trainee Safety',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 5.19,
            value : 'Curriculum Implementation, Management & Review',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : '5.20',
            value : 'Supervision Policy',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 6,
            value : 'Faculty',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 6.1,
            value : 'Number/Members of the Teaching Faculty',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 6.2,
            value : 'Qualifications and Functions',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 7,
            value : 'Trainee',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 7.1,
            value : 'Support Services',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 7.2,
            value : 'Trainee Well Being',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 7.3,
            value : 'Grievance Policy',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 7.4,
            value : 'Remedial Plan',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 8,
            value : 'Education Resources',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 8.1,
            value : 'Training Center Facilities & Resources',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 8.2,
            value : 'Clinical Teaching Facilities',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 8.3,
            value : 'Information Resources and Library Services',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 9,
            value : 'Supplementary Information',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: true,
            number : 9.1,
            value : 'Rules and Regulation of OMSB',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
        {
            isSub: false,
            number : 10,
            value : 'Admission and Governance',
            included : 'Yes',
            page : 'Yes',
            remarks : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem?',
            addressedBy : 'Abbas Al Ajmi',
            status : 'In-Progress'
        },
    ]
    return data;
}

function getRotationAnalysis() {
    const data = [
        {
            rotation : 'Anesthesia for General Surgery',
            traineeLevel : 'R1',
            blocks : '15',
            center: 'Al Nahdah Hospital',
            specificObjectiveOne: 'Yes',
            specificObjectiveTwo: 'Yes',
            specificObjectiveThree: 'Yes',
            specificObjectiveFour: 'Yes',
            specificObjectiveFive: 'Yes',
            specificObjectiveSix: 'Yes',
            progressionOfObjectives: 'Yes',
            assessmentAndEvaluation: 'Yes',
            matchWithBlockDiagram: 'Yes',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery - Ambulatory Cases',
            traineeLevel : 'R1',
            blocks : '15',
            center: 'Al Nahdah Hospital',
            specificObjectiveOne: 'Yes',
            specificObjectiveTwo: 'Yes',
            specificObjectiveThree: 'Yes',
            specificObjectiveFour: 'Yes',
            specificObjectiveFive: 'Yes',
            specificObjectiveSix: 'Yes',
            progressionOfObjectives: 'Yes',
            assessmentAndEvaluation: 'Yes',
            matchWithBlockDiagram: 'Yes',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery – Urology Surgery',
            traineeLevel : 'R1',
            blocks : '15',
            center: 'Al Nahdah Hospital',
            specificObjectiveOne: 'Yes',
            specificObjectiveTwo: 'Yes',
            specificObjectiveThree: 'Yes',
            specificObjectiveFour: 'Yes',
            specificObjectiveFive: 'Yes',
            specificObjectiveSix: 'Yes',
            progressionOfObjectives: 'Yes',
            assessmentAndEvaluation: 'Yes',
            matchWithBlockDiagram: 'Yes',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery – Vascular Surgery',
            traineeLevel : 'R1',
            blocks : '15',
            center: 'Al Nahdah Hospital',
            specificObjectiveOne: 'Yes',
            specificObjectiveTwo: 'Yes',
            specificObjectiveThree: 'Yes',
            specificObjectiveFour: 'Yes',
            specificObjectiveFive: 'Yes',
            specificObjectiveSix: 'Yes',
            progressionOfObjectives: 'Yes',
            assessmentAndEvaluation: 'Yes',
            matchWithBlockDiagram: 'Yes',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Pre-Anesthesia Clinic',
            traineeLevel : 'R1',
            blocks : '15',
            center: 'Al Nahdah Hospital',
            specificObjectiveOne: 'Yes',
            specificObjectiveTwo: 'Yes',
            specificObjectiveThree: 'Yes',
            specificObjectiveFour: 'Yes',
            specificObjectiveFive: 'Yes',
            specificObjectiveSix: 'Yes',
            progressionOfObjectives: 'Yes',
            assessmentAndEvaluation: 'Yes',
            matchWithBlockDiagram: 'Yes',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
    ];
    
    return data;
}

function getListOfModifications() {
    const data = [
        {
            rotation : 'Anesthesia for General Surgery',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery - Ambulatory Cases',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery – Urology Surgery',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Anesthesia for General Surgery – Vascular Surgery',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
        {
            rotation : 'Pre-Anesthesia Clinic',
            remarks: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto nihil quidem',
            addressedBy: 'YesAbbas Al Ajmi'
        },
    ];
    return data;
}
