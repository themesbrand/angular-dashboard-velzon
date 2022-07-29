const data = {
    projectApplicationList: [ 'Graduate Research Grant', 'Other'],
    applicationListData: [
        {
            applicantName : 'Saleh Mahfoudh',	
            titleOfProject : 'Project Title 1',	
            typeOfProject : 'Graduate Research Grant',	
            proposalId : 'CS-10546444',	
            status : 'Applied',
            applicationStatus: [
                { stage : 'Applied', status : 'Complete', date : '2022-07-25'},
                { stage : 'Approval Status', status : 'Pending', date : ''},
                { stage : 'Assign Reviewers', status : 'Pending', date : ''},
                { stage : 'Approval', status : 'Pending', date : ''},
                { stage : 'Final Approval', status : 'Pending', date : ''},
                { stage : 'Ethical Approval Issued', status : 'Pending', date : ''},
            ]
        }
    ],
    applicationListObject: {
        applicantName : 'Abbas Al Ajmi',
        titleOfProject : 'Project Title 1',	
        typeOfProject : 'Graduate Research Grant',	
        proposalId : 'CS-10546444',	
        currentStatus: 'Status',
        collaborativePartners: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis dicta laborum asperiores iusto, porro laudantium!',
        expectedOutcome: [
            {
                outcomeType: 'Type 1',
                omani: '5',
                nonOmani: '15',
            },
            {
                outcomeType: 'Type 2',
                omani: '5',
                nonOmani: '15',
            },
        ],
        noOfExpectedPublications : 9,
        noOfExpectedPatents : 10,
        additionalKPIs : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi necessitatibus ad dicta voluptatibus consequatur? Ullam, a!',
        sectorName : 'Sector Name 1',
        teamDetails : [
            {
                position : 'Team Leader', name : 'Abdel Maddali', civilID: '9581312132', email:'abdel@emai.com'
            },
            {
                position : 'Team Leader', name : 'Al Abri Ibraham', civilID: '9751835135', email:'Abri@emai.com'
            },
        ],
        technologyReadinessLevel :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        priorityArea :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        executiveSummary :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        introductionAndStatementProblemOrProject :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        literatureReview :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        objectives :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        researchMethodology :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        benefits :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        significance :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        patentReview :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        references :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero velit accusantium non quidem neque sequi illo labore voluptate.',
        isResultInPatent :'Yes',
        duration :'5 months',
        budgets : [
            { budgetCategory : 'Budget Category 1', Budget : '15000'},
            { budgetCategory : 'Budget Category 2', Budget : '2500'}
        ],
        overallFundingRequested : 17500
    }
}

export {data}