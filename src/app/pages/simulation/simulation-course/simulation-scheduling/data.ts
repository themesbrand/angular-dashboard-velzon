const data = {
    courseNameList: ['Basic Life Support', 'Pediatric Advanced Life Support', 'Advanced Cardiovascular Life Support'],
    foodRequiredList: ['Lunch', 'Refreshments' , 'Both'],
    schedulingTableData : [
        {
            courseName : 'Basic Life Support',
            registrationStartDate : '2022-08-06',
            registrationEndDate : '2022-08-15',
            courseStartDate : '2022-08-25',
            courseStartTime : '08:00',
            courseEndDate : '2022-08-30',
            courseEndTime : '15:00',
            noOfSeats : 50,
            venue : null,
            isFoodRequired : 'Yes',
            foodRequired : 'Both',
            termsAndConditions : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores dolorum ipsam neque excepturi temporibus, modi eligendi, doloribus, soluta harum cumque corporis ad in officiis?</p><ul><li>Lorem ipsum dolor sit amet consectetur.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo dignissimos deserunt hic blanditiis.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li></ul>",
            isInPersonPaymentsAllowed : true,
            roles: [
                { roleType : 'Course Director', name : 'Saleh Mahfoudh'},
                { roleType : 'Course Instructor', name : 'Madan Khan'},
                { roleType : 'Course Instructor', name : 'Abdel Maddali'},
                { roleType : 'Course Instructor', name : 'Al Abri Falsal'},
                { roleType : 'Course Instructor', name : 'Al Abri Ibraham'},
                { roleType : 'Course Instructor', name : 'Abu Nasser'},
                { roleType : 'Course Facilitator', name : 'Faisal Gawas'}
            ]
        }
    ]
}

export {data}