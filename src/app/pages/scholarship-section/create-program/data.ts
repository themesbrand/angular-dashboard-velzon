import { Countries } from "src/app/enums/countries"

const data = {
    programDataTable : [
        {
            programName : 'Anesthesia',
            programType : 'International Residency Program',
            programSpecialization : 'Value 1',
            programSubSpecialization : 'Value 1',
            sponsoredBy : 'MoHERI',
            academicYear : [
                {
                    applicableAcademicYear: 'R3',
                    noOfScholarships : '5',
                    unit : 'Muscat',
                    startDate : '2022-07-01',
                    startTime : '09:30AM',
                    endDate : '2022-07-03',
                    endTime : '11:45PM'
                }
            ],
            offeredCountries : [],
            employersSetup: [
                { employerName : 'Ministry of Health', employerNameOther: null, hospitalName: 'DGHS of Al Dhahira', hospitalNameOther : null, authorizedIndividuals : [
                    { name : 'Madan Al Abri', civilId: '9852133531', title : 'Dr.' },
                    { name : 'Saleh Mahfoudh', civilId: '9562143030', title : 'Prof.' },
                    { name : 'Madan Khan', civilId: '8550158030', title : 'Prof.' }
                ]},
                { employerName : 'Ministry of Health', employerNameOther: null, hospitalName: 'DGHS of Al Dhakliya', hospitalNameOther : null,authorizedIndividuals : [
                    
                ]},
            ]
        }

    ],
    programType : [
        'International Residency Program', 'International Fellowship program', 'Stroke Units Residency Program', 'Stroke Units Fellowship program', 'other projects funded by OMSB'
    ],
    sponsoredBy: ['MoHERI', 'OMSB', 'Other'] ,
    programSpecialization: ['Value 1', 'Value 2', 'Value 3'],
    programSubSpecialization: ['Value 1', 'Value 2', 'Value 3'],
    
    applicableAcademicYear : ['R1', 'R2', 'R3', 'R4', 'R5'],
    unitList : ['Muscat','Sohar','Nizwa','Salalah'],
    countryList: Countries.countryList,
    employerNames : [
        'Ministry of Health',
        'Sultan Qaboos University',
        'Armed Forces Medical Services',
        'Royal Oman Police',
        'Diwan of Royal Court',
        'Other'
    ],
    hospitalNames : [
        'DGHS of Al Dhahira',
        'DGHS of Al Dhakliya',
        'DHS of Al Wusta',
        'DHS of Buraimi',
        'DGHS of Dhofar',
        'DGHS of Khoula Hospital',
        'DHS of Musandam',
        'DGHS of Muscat',
        'DGHS of North Al Batinah',
        'DGHS of North Al Sharqiya',
        'DGHS of Royal Hospital',
        'DGHS of South Al Batinah',
        'DGHS of South Al Sharqiya',
        'Other'
    ]

}

export {data}