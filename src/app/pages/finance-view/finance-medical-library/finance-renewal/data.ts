const data = {
    resourceRequestsTableData : [
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-08-10',
            title : 'Request for Curriculum part 2 - Anaesthesia',
            publisher: 'Madan Al Abri',
            status : 'Approved By Director',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Faisal Gawas',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Madan Khan',
            updatedDate : '2022-07-30',
            applicationStatus : [
                { stage : 'Initiated', status : 'Submit', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Quote Received', status : 'Submit', date : '2022-07-26 08:15:00 AM'},
                { stage : 'Approved by Director', status : 'Submit', date : '2022-07-28 08:15:00 AM'},
                { stage : 'LPO Issued', status : 'Pending', date : ''},
                { stage : 'Invoiced', status : 'Pending', date : ''},
                { stage : 'Paid', status : 'Pending', date : ''},
                { stage : 'E-Resource Enabled', status : 'Pending', date : ''},
            ]
        },
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-08-11',
            title : 'Meeting agenda for Anaesthesia Meeting 1st June 2022',
            publisher: 'Hilal basheer',
            status : 'LPO Issued',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Hilal basheer',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            lpoNumber : 'LPO-2135421',
            lpoDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Hilal basheer',
            updatedDate : '2022-08-01',
            applicationStatus : [
                { stage : 'Initiated', status : 'Submit', date : '2022-07-25 08:15:00 AM'},
                { stage : 'Quote Received', status : 'Submit', date : '2022-07-26 08:15:00 AM'},
                { stage : 'Approval by Director', status : 'Submit', date : '2022-07-28 08:15:00 AM'},
                { stage : 'LPO Issued', status : 'Submit', date : '2022-07-29 08:15:00 AM'},
                { stage : 'Invoiced', status : 'Pending', date : ''},
                { stage : 'Paid', status : 'Pending', date : ''},
                { stage : 'E-Resource Enabled', status : 'Pending', date : ''},
            ]
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
