const data = {
    trainingRecordsTableData: [
        {
            startDate : '01/02/2020',
            endDate : '30/01/2021',
            year : '1st Year in Residency',
            status : 'R1',
            pgy : '1',
        },
        {
            startDate : '01/02/2021',
            endDate : '30/01/2022',
            year : '2nd Year in Residency',
            status : 'R2',
            pgy : '2',
        },
        {
            startDate : '01/02/2022',
            endDate : '30/01/2023',
            year : '3rd Year in Residency',
            status : 'R3',
            pgy : '3',
        },
    ],
    compliancePerRotationTableData : [
        {
            name : 'PESDPULUMO-RH',
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
            name : 'PESD-NICU-KH',
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
            name : 'PEDSPICU-RH',
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
            name : 'PEDSMETABOLIC-SQUH',
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
            name : 'PEDSGP-SQUH',
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
            attendedPercentage : '---',
        },
        {
            level : 'L2',
            category : 'Journal Club - 2',
            conference : 2,
            required : 2,
            present : 0,
            tardy : 0,
            excused : 2,
            requiredPercentage : '50%',
            attendedPercentage : '---',
        },
        {
            level : 'L2',
            category : 'Journal Club - 3',
            conference : 2,
            required : 2,
            present : 0,
            tardy : 0,
            excused : 2,
            requiredPercentage : '50%',
            attendedPercentage : '---',
        },
    ],
    dutyHourViolationsTableData : [
        {
            name : 'PESDPULUMO-RH',
            startDate : '01/09/2022',
            endDate : '28/09/2022',
            perWeek : '50.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        },
        {
            name : 'PESD-NICU-KH',
            startDate : '29/09/2022',
            endDate : '26/10/2022',
            perWeek : '54.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        },
        {
            name : 'PEDSPICU-RH',
            startDate : '27/10/2022',
            endDate : '23/11/2022',
            perWeek : '42.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        },
        {
            name : 'PEDSMETABOLIC-SQUH',
            startDate : '24/11/2022',
            endDate : '21/12/2022',
            perWeek : '36.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        },
        {
            name : 'PEDSGP-SQUH',
            startDate : '22/12/2022',
            endDate : '18/01/2020',
            perWeek : '16.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        },
        {
            name : 'PESSENDO-RH',
            startDate : '24/11/2022',
            endDate : '21/12/2022',
            perWeek : '48.5',
            hr : '0',
            twentyFourPlus : '0',
            call : '0', 
            daysOff : '0'
        }
    ],
    competencyByRotation : [
        {
            rotation : 'PESDPULUMO-RH',
            dates : '01/09/2022	- 28/09/2022',
            patientCare : '3.45',
            medicalKnowledge : '3.00',
            systemsBased : '3.00',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
        {
            rotation : 'PESD-NICU-KH',
            dates : '29/09/2022	- 26/10/2022',
            patientCare : '3.00',
            medicalKnowledge : '3.15',
            systemsBased : '3.25',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
        {
            rotation : 'PEDSPICU-RH',
            dates : '27/10/2022	- 23/11/2022',
            patientCare : '3.00',
            medicalKnowledge : '3.15',
            systemsBased : '3.25',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
        {
            rotation : 'PEDSMETABOLIC-SQUH',
            dates : '24/11/2022	- 21/12/2022',
            patientCare : '3.15',
            medicalKnowledge : '3.15',
            systemsBased : '3.25',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
        {
            rotation : 'PEDSGP-SQUH',
            dates : '22/12/2022	- 18/01/2022',
            patientCare : '3.15',
            medicalKnowledge : '3.15',
            systemsBased : '3.25',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
        {
            rotation : 'PESSENDO-RH',
            dates : '24/11/2022	- 21/12/2022',
            patientCare : '3.00',
            medicalKnowledge : '3.45',
            systemsBased : '3.25',
            practiceBased : '3.00',
            professionalism : '3.00',
            interpersonal : '3.20'
        },
    ], 
    proceduresLogged : [
        {
            procedureName : 'ICU Patient',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
        {
            procedureName : 'Spinal Taps',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
        {
            procedureName : 'Suture Removal',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
        {
            procedureName : 'Carotid Endarterectomy',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
        {
            procedureName : 'Cholecystectomy',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
        {
            procedureName : 'Coronary artery bypass',
            conditionalIndependenceTarget : '5',
            reviewTotalPassed : '1',
            reviewTotalNotPassed : '0',
            residencyTotalPassed : '1',
            residencyTotalNotPassed : '0'
        },
    ] 
}

export {data}