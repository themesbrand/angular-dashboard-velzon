const data = {
    trainingRecordsTableData: [
        {
            startDate : '01/02/2020',
            endDate : '30/01/2021',
            year : '1st Year in Residency',
            status : 'RL1',
        },
        {
            startDate : '01/02/2021',
            endDate : '30/01/2022',
            year : '2nd Year in Residency',
            status : 'RL2',
        },
        {
            startDate : '01/02/2022',
            endDate : '30/01/2023',
            year : '3rd Year in Residency',
            status : 'RL3',
        },
    ],
    curriculumConfirmedTableData : [
        
        {
            name : 'Internal Medicine',
            startDate : '29/04/2022',
            endDate : '26/04/2022',
            status : 'completed'
        },
        {
            name : 'Pathology',
            startDate : '27/05/2022',
            endDate : '23/05/2022',
            status : 'completed'
        },
        {
            name : 'Pediatrics',
            startDate : '24/06/2022',
            endDate : '21/06/2022',
            status : 'completed'
        },
        {
            name : 'Psychology',
            startDate : '01/07/2022',
            endDate : '30/07/2020',
            status : 'completed'
        },
        {
            name : 'Family Medicine',
            startDate : '01/08/2022',
            endDate : '30/08/2022',
            status : 'completed'
        },
        {
            name : 'Gynecology',
            startDate : '01/09/2022',
            endDate : '28/09/2022',
            status : 'in-progress'
        }
    ],
    dutyHourViolationsTableData : [
        {
            name : 'Gynecology',
            startDate : '01/09/2022',
            endDate : '28/09/2022',
            perWeek : '50.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        },
        {
            name : 'Internal Medicine',
            startDate : '29/09/2022',
            endDate : '26/10/2022',
            perWeek : '54.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        },
        {
            name : 'Pathology',
            startDate : '27/10/2022',
            endDate : '23/11/2022',
            perWeek : '42.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        },
        {
            name : 'Pediatrics',
            startDate : '24/11/2022',
            endDate : '21/12/2022',
            perWeek : '36.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        },
        {
            name : 'Psychology',
            startDate : '22/12/2022',
            endDate : '18/01/2020',
            perWeek : '16.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        },
        {
            name : 'Family Medicine',
            startDate : '24/11/2022',
            endDate : '21/12/2022',
            perWeek : '48.5',
            hr : '0',
            twentyFourPlus : '0',
            shortBreak : '0'
        }
    ],
    compliancePerRotationTableData : [
        {
            name : 'Gynecology',
            startDate : '01/05/2022',
            endDate : '28/05/2022',
            rotationValue : '1 of 1',
            rotationChecked : true,
            facultyValue : '1 of 1',
            facultyChecked : true,
            curriculumValue : '1 of 1',
            curriculumChecked : true,
        },
        {
            name : 'Pathology',
            startDate : '27/06/2022',
            endDate : '23/06/2022',
            rotationValue : '1 of 2',
            rotationChecked : false,
            facultyValue : '1 of 2',
            facultyChecked : false,
            curriculumValue : '1 of 2',
            curriculumChecked : false,
        },
        {
            name : 'Pediatrics',
            startDate : '24/07/2022',
            endDate : '21/07/2022',
            rotationValue : '1 of 1',
            rotationChecked : true,
            facultyValue : '1 of 1',
            facultyChecked : true,
            curriculumValue : '1 of 2',
            curriculumChecked : false,
        },
        {
            name : 'Psychology',
            startDate : '22/08/2022',
            endDate : '18/08/2020',
            rotationValue : '0 of 1',
            rotationChecked : false,
            facultyValue : '1 of 1',
            facultyChecked : false,
            curriculumValue : '1 of 2',
            curriculumChecked : false,
        },
        {
            name : 'Family Medicine',
            startDate : '24/09/2022',
            endDate : '21/09/2022',
            rotationValue : '0 of 1',
            rotationChecked : false,
            facultyValue : '1 of 1',
            facultyChecked : true,
            curriculumValue : '1 of 2',
            curriculumChecked : false,
            status : 'in-progress'
        }
    ],
    proceduresLoggedTableData : [
        {
            name : 'ICU Patient',
            logged : 15,
            confirmed : 10
        },
        {
            name : 'Spinal Taps',
            logged : 23,
            confirmed : 10
        },
        {
            name : 'Suture Removal',
            logged : 23,
            confirmed : 10
        },
    ],
    conferenceAttendanceTableData : [
        {
            level : 'L1',
            category : 'M&M',
            conference : 113,
            required : 113,
            present : 37,
            tardy : 0,
            excused : 76,
            requiredPercentage : '50%',
            attendedPercentage : '100%',
        },
        {
            level : 'L2',
            category : 'Journal Club',
            conference : 2,
            required : 2,
            present : 0,
            tardy : 0,
            excused : 2,
            requiredPercentage : '50%',
            attendedPercentage : '0%',
        }
    ],
    myLeaves : [
        {
            type : 'Annual',
            date : '2022-Jan-20'
        },
        {
            type : 'Medical',
            date : '2022-Mar-05'
        },
        {
            type : 'Annual',
            date : '2022-Apr-15'
        },
        {
            type : 'Annual',
            date : '2022-Apr-16'
        },
        {
            type : 'Annual',
            date : '2022-Apr-17'
        },
    ],
    counselingEvents : [
        { name : 'Counseling Event 1', date : '2022-05-16 08:00:00 AM', counselorName : 'Madan Al Abri' , assessmentCount : 5},
        { name : 'Counseling Event 2', date : '2022-05-22 08:00:00 AM', counselorName : 'Saleh Mahfoudh', assessmentCount : 2 },
        { name : 'Counseling Event 3', date : '2022-05-26 08:00:00 AM', counselorName : 'Madan Al Abri' , assessmentCount : 7},
        { name : 'Counseling Event 4', date : '2022-06-10 08:00:00 AM', counselorName : 'Saleh Mahfoudh' , assessmentCount : 4},
        { name : 'Counseling Event 5', date : '2022-06-15 08:00:00 AM', counselorName : 'Madan Al Abri', assessmentCount : 3 },
        { name : 'Counseling Event 6', date : '2022-06-26 08:00:00 AM', counselorName : 'Saleh Mahfoudh' , assessmentCount : 2},
    ],
    myRequests : [
        {
            transferType : 'Residency Program to GFP',
            status : 'Applied',
            link: '/admission/transfer/application'
        },
        {
            transferType : 'Interruption - 3 Blocks',
            status : '	Sponsor Approved',
            link: '/admission/interruption/application'
        }
    ]
}

export {data} 

// Level
// Category
// No. Of Conference
// No. Of Required
// Present
// Tardy
//Erxcused
// % Required
// % Attended

// L2 /l3 l4
// Fake Medicine Residecncy
