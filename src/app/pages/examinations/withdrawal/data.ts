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
