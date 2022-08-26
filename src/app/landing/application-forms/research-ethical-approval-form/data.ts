const data = {
    projectType : ['Medical Education', 'Clinical', 'Epidemiology/Public Health', 'Health Service research', 'Other'],
    typeOfStudyDesign : [
        'Cross-sectional with prospective data collection or surveys',
        'Cross-sectional with retrospective data collection',
        'Case-control',
        'Retrospective cohort',
        'Prospective cohort',
        'Quasi-experimental (pre-and-post studies or non-randomized trials)',
        'Randomized controlled trials',
        'Systematic review & Meta-analysis'
    ],
    userLists : userListGenerator(),
    applicationListObject: {
        researchTitle : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        researchType: 'Other',
        researchTypeOther: 'Medical Research',
        typeOfStudyDesign: 'Cross-sectional with prospective data collection or surveys',
        typeOfStudyDesignOther: null,
        abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel, rem placeat pariatur quod eaque!',
        researchTeam : [
            {
                teamMember : 'Saleh Mahfoudh',
                tasks : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro dolorum aspernatur laborum quidem ducimus rem quam, necessitatibus repudiandae earum dolor eligendi commodi, cumque molestias, fugit esse exercitationem modi doloremque similique sequi! Ea magnam dolores quisquam.' 
            },
            {
                teamMember : 'Abdel Maddali',
                tasks : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro dolorum aspernatur laborum quidem ducimus rem quam, necessitatibus repudiandae earum dolor eligendi commodi, cumque molestias, fugit esse exercitationem modi doloremque similique sequi! Ea magnam dolores quisquam.' 
            },
        ],
        researchProposal: [
            {
                literatureReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum voluptatem? Pariatur perferendis repellendus labore.',
                objectives: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa corporis facere perferendis nulla veritatis accusantium architecto dolor aliquam.'
            },
            {
                literatureReview:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum voluptatem? Pariatur perferendis repellendus labore.',
                objectives: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa corporis facere perferendis nulla veritatis accusantium architecto dolor aliquam.'
            },
        ],
        researchDesign: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
        targetPopulation : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, possimus vero nostrum exercitationem aperiam quos.',
        samplingAndSampleSize : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt nostrum neque totam repellendus perspiciatis obcaecati.',
        variableDefinitions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
        dataCollectionTools : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, possimus vero nostrum exercitationem aperiam quos.',
        pilotStudy : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt nostrum neque totam repellendus perspiciatis obcaecati.',
        dataQualityAndEntry: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
        dataAnalysis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, possimus vero nostrum exercitationem aperiam quos.',
        ethicalConsiderations : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt nostrum neque totam repellendus perspiciatis obcaecati.',
        resultsDissemination: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
        limitationsAndDifficulties : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, possimus vero nostrum exercitationem aperiam quos.',
        expectedDuration : '10 Months',
        timelineAndWorkPlan : [
            {
                activity: 'Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
                time:  '2022-08-16'
            },
            {
                activity: 'Voluptate nam perferendis sapiente laboriosam? Magnam, neque commodi.',
                time:  '2022-08-16'
            },
        ] ,
        isHealthInstitutionsInvolved : 'Yes',
        healthInstitutionsInvolved : 'Al Nahdah Hospital',

        isResearchFundingRequired : 'Yes',
        researchFundBudget : '2500',
        researchFundingInstitution : 'MOH'


        // isOtherHealthInstitutionsInvolved: new FormControl(null),
        // researchTeam : new FormArray([]),
        // researchProposal : new FormArray([]),
        // timelineAndWorkPlan : new FormArray([]),

        // isHealthInstitutionsInvolved : new FormControl(null),
        // isResearchFundingRequired : new FormControl(null),
    },
    applicationListData: [
        {
            applicantName : 'Abbas Al Ajmi',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-01321354',
            typeOfResearch : 'Clinical',
            typeOfTheStudyDesign : 'Retrospective cohort',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Abbas Al Ajmi',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Approve',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28 08:15:00 AM'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30 08:15:00 AM'},
                { stage : 'Approval', status : 'Complete', date : '2022-08-02 08:15:00 AM'},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Abbas Al Ajmi',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Final Approval',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28 08:15:00 AM'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30 08:15:00 AM'},
                { stage : 'Approval', status : 'Complete', date : '2022-08-02 08:15:00 AM'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03 08:15:00 AM'},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        }
    ],

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
