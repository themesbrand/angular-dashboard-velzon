const data = {
    dataTable : [
        {
            program : 'Anesthesia',
            researchDay : 2021,
            winners :[
                {
                    position : '1st Position',
                    name : 'Saleh Mahfoudh',
                    level : 'L2',
                },
                {
                    position : '2nd Position',
                    name : 'Al Abri Falsal',
                    level : 'L2',
                },
                {
                    position : 'rd Position',
                    name : 'Hilal basheer',
                    level : 'L3',
                },
            ]
        }
    ],
    sampleProgramNomination : {
        program : 'Anesthesia',
        researchDay : 2021,
        winners :[
            {
                position : '1st Position',
                name : 'Saleh Mahfoudh',
                level : 'L2',
            },
            {
                position : '2nd Position',
                name : 'Al Abri Falsal',
                level : 'L2',
            },
            {
                position : 'rd Position',
                name : 'Hilal basheer',
                level : 'L3',
            },
        ]
    },
    userLists : userListGenerator(),
    yearsList : getYearsList()
}

export {data}

function userListGenerator() {
    const users = [
        {
            name : 'Abbas Al Ajmi',
            email : 'Abbas@email.com',
            omsb: '19-204', 
            level: 'L1'
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com',
            omsb: '19-210', 
            level: 'L3'
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com',
            omsb: '19-209', 
            level: 'L5'
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com',
            omsb: '19-206', 
            level: 'L4'
        },
        {
            name : 'Al Abri Ibraham',
            email : 'Abri@email.com',
            omsb: '19-219', 
            level: 'L3'
        },
        {
            name : 'Hilal basheer',
            email : 'Hilal@email.com',
            omsb: '19-221', 
            level: 'L2'
        },
    ]
    const userDefinedList: any[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                omsb: user.omsb, 
                level: user.level,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}

function getYearsList() {
    var max = new Date().getFullYear()
    var min = max - 50
    var years = []
  
    for (var i = min; i <= max; i++) {
      years.push(i)
    }
    return years
}