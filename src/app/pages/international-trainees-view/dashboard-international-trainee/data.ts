import { Countries } from "src/app/shared/data/countries";

const data = {
    applicationTableDate : [
        {
            requestType : 'Extension Request',
            description  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio quod. Ullam consequatur nemo fugiat voluptatum dicta dolor esse nam odit asperiores? Ex, cupiditate officia.',
            country: 'Oman',
            dateFrom: '2022-08-10',
            dateTo: '2023-01-05',
            NewUniversity: 'Arabian Gulf University',
            status : 'Further documents are required '
        },
        {
            requestType : 'Change of Country Request',
            description  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio quod. Ullam consequatur nemo fugiat voluptatum dicta dolor esse nam odit asperiores? Ex, cupiditate officia.',
            country: 'Oman',
            dateFrom: '2022-08-10',
            dateTo: '2023-01-05',
            NewUniversity: 'Arabian Gulf University',
            status : 'Approved'

        },
        {
            requestType : 'Change of University Request',
            description  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio quod. Ullam consequatur nemo fugiat voluptatum dicta dolor esse nam odit asperiores? Ex, cupiditate officia.',
            country: 'India',
            dateFrom: '2022-08-10',
            dateTo: '2023-01-05',
            NewUniversity: 'Sultan Qaboos Univestiry',
            status : 'Initial Screening Complete & Submitted for Employer Approval'

        },
    ],
    requestTypes : [
        'Extension Request',
        'Interruption Request',
        'Re-joining Request',
        'Withdrawal Request',
        'Change of Country Request',
        'Change of University Request'
    ],
    educationInstitutesList: [ 'Sultan Qaboos Univestiry',"Arabian Gulf University", "Royal College of Surgeons in Ireland "],
    countryList : Countries.countries,

}

export {data};