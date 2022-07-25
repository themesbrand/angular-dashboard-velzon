const data = {
    resourceRequestsTableData : [
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-07-25',
            title : 'Request for Curriculum - Anaesthesia',
            publisher: 'Faisal Gawas',
            status : 'Approved',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Abdel Maddali',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Al Abri Falsal',
            updatedDate : '2022-07-26'
        },
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-07-28',
            title : 'Actions Items for Education Committee Meeting',
            publisher: 'Faisal Gawas',
            status : 'Approved',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Al Abri Ibraham',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Al Abri Ibraham',
            updatedDate : '2022-07-28'
        },
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-08-10',
            title : 'Request for Curriculum part 2 - Anaesthesia',
            publisher: 'Madan Al Abri',
            status : 'Approved',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Faisal Gawas',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Madan Khan',
            updatedDate : '2022-07-30'
        },
        {
            programName : 'Anaesthesia',
            dateOfRequest : '2022-08-11',
            title : 'Meeting agenda for Anaesthesia Meeting 1st June 2022',
            publisher: 'Hilal basheer',
            status : 'Approved',
            description : `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            requestedBy: 'Hilal basheer',
            quoteDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            lpoNumber : 'LPO-2135421',
            lpoDescription: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium consequatur facere repudiandae, optio odit nemo quibusdam corporis aliquam tenetur ipsam perferendis doloribus accusamus ad?</p><ul><li>Lorem, ipsum dolor.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit.</li></ul>`,
            updatedBy : 'Hilal basheer',
            updatedDate : '2022-08-01'
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
