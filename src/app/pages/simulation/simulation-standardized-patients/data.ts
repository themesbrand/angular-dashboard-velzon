import { Nationalities } from "src/app/enums/nationality";

const data = {
    requestTableData : [
        {
            civilID : '9743213531321',
            fullName : 'Madan Al Abri',
            gender : 'Male',
            dateOfBirth : '1982-06-06',
            nationality : 'Omani',
            registrationDate : '2010-06-08',
            physicalInformation :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
            medicalInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
            payableAmount : 'ر.ع.25000'
        }
    ],
    standardizedPatientsSampleObject : {
        civilID : '9743213531321',
        fullName : 'Madan Al Abri',
        gender : 'Male',
        dateOfBirth : '1982-06-06',
        nationality : 'Omani',
        registrationDate : '2010-06-08',
        physicalInformation :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
        medicalInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nostrum, nulla commodi sunt est, vero distinctio iste obcaecati asperiores quibusdam, eligendi atque pariatur deserunt.',
        payableAmount : 'ر.ع.25000'
    },
    nationalities : Nationalities.nationalities,
    participationTableData : [
        {
            courseOrWorkshopName : 'Workshop 1',
            date : '2022-07-01',
            amount : 2500,
            status : 'Paid'    
        },
        {
            courseOrWorkshopName : 'Workshop 2',
            date : '2022-07-11',
            amount : 5000,
            status : 'Paid'    
        },
        {
            courseOrWorkshopName : 'Workshop 3',
            date : '2022-07-15',
            amount : 1500,
            status : 'Not Paid'    
        },
    ]

}

export {data};