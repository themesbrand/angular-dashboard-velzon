const data = {
    researchTopics : [
        {
            category : 'Research Category - 1',
            name : 'Research Topic - 1'
        },
        {
            category : 'Research Category - 1',
            name : 'Research Topic - 1'
        },
        {
            category : 'Research Category - 2',
            name : 'Research Topic - 3'
        },
        {
            category : 'Research Category - 2',
            name : 'Research Topic - 4'
        },
        {
            category : 'Research Category - 2',
            name : 'Research Topic - 5'
        }
    ],
    additionalResearchTopics : [
        {
            category : 'Additional Research Category - 1',
            name : 'Additional Research Topic - 1'
        },
        {
            category : 'Additional Research Category - 1',
            name : 'Additional Research Topic - 1'
        },
        {
            category : 'Additional Research Category - 2',
            name : 'Additional Research Topic - 3'
        },
        {
            category : 'Additional Research Category - 2',
            name : 'Additional Research Topic - 4'
        },
        {
            category : 'Additional Research Category - 2',
            name : 'Additional Research Topic - 5'
        }
    ],
    userLists : userListGenerator(),

}

export {data}

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
