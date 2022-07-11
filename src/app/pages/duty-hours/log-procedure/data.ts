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
        ['B001', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda fugit sunt earum reiciendis dignissimos!', 'Sub Area 1', 'Type 1'],
      ['0002', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatem.', 'City 2', 'Type 2'],
      ['A003', 'sit amet consectetur adipisicing', 'Province 3', 'Type 3'],
      ['0004', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit quod vitae delectus doloribus molestiae perspiciatis quis necessitatibus?', 'Area 4', 'Gen 4']
    ],
    procedureObjectsList: [
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'Male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },
        {'patientId': 'CS2135454', 'firstName' : 'Madan', 'lastName' : 'Khan', 'gender': 'male', 'dob': '1964-06-04', 'patientType' : 'Adult', 'caseType' : 'Case Type 1', 'datePerformed' : '2019-10-15', 'procedureGroup' : '', 'procedure': 'Intrathoracic with CPB', 'cptCode' : '', 'location': '', 'supervisor' : '', 'role': '', 'diagnosis' : '', 'confirmedDate' : '2022-06-15' },

    ],
    supervisors: ['Madan Al Abri', 'Saleh Mahfoudh', 'Madan Khan', 'Al Abri Ibraham'],
    roles: []
}

export { data }
