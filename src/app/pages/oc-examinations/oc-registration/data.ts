import { Countries } from "src/app/enums/countries"
import { Nationalities } from "src/app/enums/nationality"
import { sharedData } from "src/app/shared/data/shared.data"

const data = {
    programTypes : sharedData.programTypes,
    residencyPrograms : sharedData.residencyPrograms,
    fellowshipPrograms : sharedData.fellowshipPrograms,
    gfpPrograms : sharedData.gfpPrograms,
    typeOfExams : [
        'Omani Examination for Nurses (OEN)',
        'Omani Examination for General Practitioners (OEGP)',
        'Omani Examination for Pharmacists (OEP)',
        'Omani Examination for Medical Laboratory Scientists (OEMLS)'
    ],
    tableData : [
        {
            programName : 'Anesthesia', 
            examType : 'Omani Examination for Nurses (OEN)', 
            examStartDate : '2022-10-15', 
            examEndDate : '2022-10-18', 
            attempt : 1,
            registrationFee : 150,
            examDates : [
                {
                    examDate : '2022-10-15', examTime :'08:00 AM', venue : 'Armed Forces Hospital', seatsRemaining : 5
                },
                {
                    examDate : '2022-10-18', examTime :'08:00 AM', venue : 'Armed Forces Hospital', seatsRemaining : 3
                },
            ]
        },
        {
            programName : 'ENT', 
            examType : 'Omani Examination for Nurses (OEN)', 
            examStartDate : '2022-10-16', 
            examEndDate : '2022-10-16', 
            attempt : 1,
            registrationFee : 200,
            examDates : [
                {
                    examDate : '2022-10-16', examTime :'08:00 AM', venue : 'Armed Forces Hospital', seatsRemaining : 2
                },
                {
                    examDate : '2022-10-16', examTime :'10:00 AM', venue : 'Armed Forces Hospital', seatsRemaining : 3
                },
            ]
        }
    ],
    nationalities : Nationalities.nationalities,
    countryList : Countries.countryList,
    yearsList : getYearsList(),
    userLists : userListGenerator(),
}

export {data}

function getYearsList() {
    var max = new Date().getFullYear()
    var min = max - 50
    var years = []
  
    for (var i = min; i <= max; i++) {
      years.push(i)
    }
    return years
}

function userListGenerator() {
    const users = [
        {
            name : 'Abbas Al Ajmi',
            email : 'Abbas@email.com',
            omsb: '19-204'
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com',
            omsb: '19-210'
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com',
            omsb: '19-209'
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com',
            omsb: '19-206'
        },
        {
            name : 'Al Abri Ibraham',
            email : 'Abri@email.com',
            omsb: '19-219'
        },
        {
            name : 'Hilal basheer',
            email : 'Hilal@email.com',
            omsb: '19-221'
        },
    ]
    const userDefinedList: { name: string; email: string; labelValue: string; }[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}
