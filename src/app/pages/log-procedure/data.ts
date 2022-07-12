const data = {
    gender: [
        { name: "Male", value: "male" },
        { name: "Female", value: "Female" },
    ],
    patientType : [
        'Adult', 'Pediatric (<13 Years)'
    ],
    caseType : [
        'Case Type 1', 'Case Type 2'
    ],
    procedureCategory: [],
    procedureList : ['Intrathoracic with CPB', 'Intrathoracic without CPB', 'Major Vascular (e.g. carotid, aorta, iliac)'],
    cptCodes : [
        ['2641', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda fugit sunt earum reiciendis dignissimos!', 'Sub Area 1', 'Type 1'],
      ['1328', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatem.', 'City 2', 'Type 2'],
      ['3813', 'sit amet consectetur adipisicing', 'Province 3', 'Type 3'],
      ['1364', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit quod vitae delectus doloribus molestiae perspiciatis quis necessitatibus?', 'Area 4', 'Gen 4']
    ],
    procedureObjectsList: [
        {
            patientId: 'SS2135454', firstName : 'Madan', lastName : 'Khan', gender: 'Male', dob: '1964-06-04', patientType : 'Adult', caseType : 'Case Type 1', confirmedDate : '2022-05-05',
            procedures: [
                { datePerformed : '2019-10-15', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Madan Al Abri', role: 'Doctor', diagnosis : 'Heart Issue', comment : 'Operation Successful'  },
                { datePerformed : '2019-10-15', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Saleh Mahfoudh', role: 'Doctor', diagnosis : 'Heart Issue', comment : 'Operation Successful' },
            ]        
        },
        {
            patientId: 'BS2135454', firstName : 'Abri', lastName : 'Falsal', gender: 'Female', dob: '1964-06-04', patientType : 'Adult', caseType : 'Case Type 1', confirmedDate : '2022-06-10',
            procedures: [
                { datePerformed : '2022-06-15', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Madan Al Abri', role: 'Doctor', diagnosis : 'Heart Issue' },
                { datePerformed : '2022-06-18', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Saleh Mahfoudh', role: 'Doctor', diagnosis : 'Heart Issue' , comment : 'Check MRI'},
                { datePerformed : '2022-06-19', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Madan Al Abri', role: 'Doctor', diagnosis : 'Heart Issue' },
                { datePerformed : '2022-06-20', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Saleh Mahfoudh', role: 'Doctor', diagnosis : 'Heart Issue' , comment : 'Check MRI'},
            ]        
        },
        {
            patientId: 'CD9135454', firstName : 'Abdel', lastName : 'Maddali', gender: 'Male', dob: '1964-06-04', patientType : 'Adult', caseType : 'Case Type 1', confirmedDate : '2022-07-03',
            procedures: [
                { datePerformed : '2019-10-15', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Madan Al Abri', role: 'Doctor', diagnosis : 'Heart Issue', comment : 'Check MRI' },
                { datePerformed : '2019-10-15', procedureGroup : 'Anaesthesia', procedure: 'Intrathoracic with CPB', cptCode : '36315', location: 'Al Nahdah Hospital', supervisor : 'Saleh Mahfoudh', role: 'Doctor', diagnosis : 'Heart Issue' , comment : 'Check MRI'},
            ]        
        },

    ],
    supervisors: ['Madan Al Abri', 'Saleh Mahfoudh', 'Madan Khan', 'Al Abri Ibraham'],
    roles: []
}

export { data }
