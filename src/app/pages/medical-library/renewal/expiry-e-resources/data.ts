const data = {
    resourceRequestsTableData : [
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2021-06-15',
            title : 'Meeting agenda for Anaesthesia Meeting 1st June 2022',
            publisher: 'Hilal basheer',
            status : 'Expired',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Faisal Gawas',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            expiryDate: '2022-07-01',
            eResourceDescription :  `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Faisal Gawas',
            updatedDate : '2022-07-01'
        },
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2021-06-15',
            title : 'Meeting agenda for Anaesthesia Meeting 1st June 2022',
            publisher: 'Hilal basheer',
            status : 'Expiry in 30 Days',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Faisal Gawas',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            expiryDate: '2022-08-25',
            eResourceDescription :  `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Faisal Gawas',
            updatedDate : '2022-07-01'
        },
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
