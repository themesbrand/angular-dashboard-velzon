const data = {
    applicationListData: [
        {
            applicantName : 'Saleh Mahfoudh',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-01321354',
            typeOfResearch : 'Clinical',
            typeOfTheStudyDesign : 'Retrospective cohort',
            status : 'Applied',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Al Abri Ibraham',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-236356456',
            typeOfResearch : 'Medical Education',
            typeOfTheStudyDesign : 'Case-Control',
            status : 'Accepted',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Accepted', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Hilal basheer',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-23423423',
            typeOfResearch : 'Health Service research',
            typeOfTheStudyDesign : 'Cross-sectional with prospective data collection or surveys',
            status : 'Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-68431321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'RIC Rejected',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Accepted', status : 'Complete', date : '2022-07-28'},
                { stage : 'RIC Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-89431321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Assigned Reviewers',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30'},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Approve',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30'},
                { stage : 'Approval', status : 'Complete', date : '2022-08-02'},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Final Approval',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30'},
                { stage : 'Approval', status : 'Complete', date : '2022-08-02'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03'},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Ethical Approval Issued',
            applicationStatus : [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Rejected', status : 'Complete', date : '2022-07-28'},
                { stage : 'Assigned Reviewers', status : 'Complete', date : '2022-07-30'},
                { stage : 'Approval', status : 'Complete', date : '2022-08-02'},
                { stage : 'Final Approval', status : 'Complete', date : '2022-08-03'},
                { stage : 'Ethical Approval Issued', status : 'Complete', date : '2022-08-06'},
            ]
        },
        {
            applicantName : 'Madan Khan',
            titleOfResearchProject : 'Research Project - 1',
            refNumber : 'JS-1451321',
            typeOfResearch : 'Epidemiology/Public Health',
            typeOfTheStudyDesign : 'Randomized controlled trials',
            status : 'Resubmitted',
            applicationStatus : [
                { stage : 'Resubmitted', status : 'Complete', date : '2022-07-25'},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        },
    ],
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
    userLists : userListGenerator(),


}

export {data};

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
