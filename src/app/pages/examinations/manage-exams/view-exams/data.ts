import { sharedData } from "src/app/shared/data/shared.data"

const data = {
    programTypes : sharedData.programTypes,
    residencyPrograms : sharedData.residencyPrograms,
    fellowshipPrograms : sharedData.fellowshipPrograms,
    gfpPrograms : sharedData.gfpPrograms,
    typeOfExams : [
        'Part 1 Exam',
        'Part 2 – Clinical',
        'Part 2 – Written',
        'Fellowship Exit exam',
        'Selection exam',
        'Filtration exam',
    ],
    tableData : [
        {
            programName : 'Anastasia', examType : 'Part 1 Exam', examStartDate : '2022-10-15', examEndDate : '2022-10-18', createdOn :  '2022-09-05 09:45:15 AM', status : 'Draft' 
        },
        {
            programName : 'Medical Microbiology', examType : 'Part 2 – Written', examStartDate : '2022-10-17', examEndDate : '2022-10-20', createdOn :  '2022-09-01 10:25:15 AM', status : 'Dates Created' 
        }
    ]
}

export {data}