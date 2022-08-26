const data = {
    typeOfResearchList : [
        'Medical Education', 
        'Clinical', 
        'Epidemiology/Public Health',
        'Health Service research', 
        'Other'],
    typeOfStudyDesignList : [ 
        'Cross-sectional with prospective data collection or surveys',
        'Cross-sectional with retrospective data collection',
        'Case-control',
        'Retrospective cohort',
        'Prospective cohort',
        'Quasi-experimental (pre-and-post studies or non-randomized trials)',
        'Randomized controlled trials',
        'Systematic review & Meta-analysis',
        'Other'
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
