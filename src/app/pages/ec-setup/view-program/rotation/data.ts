const data = {
    tableData : [
        { rotation: 'Anesthesia for General Surgery ', R1 : '1', R2 : '0', R3: '1', R4 : '1', R5 : '0'},
        { rotation: 'Anesthesia for General Surgery - Ambulatory Cases', R1 : '0.5', R2 : '0', R3: '0', R4 : '0', R5 : '2'},
        { rotation: 'Anesthesia for General Surgery – Urology Surgery ', R1 : '0', R2 : '4', R3: '0', R4 : '1.5', R5 : '0'},
        { rotation: 'Anesthesia for General Surgery – Vascular Surgery', R1 : '1', R2 : '0', R3: '0', R4 : '2', R5 : '0'},
        { rotation: 'Anesthesia for ENT/Ophthalmology/ Oral & Maxillofacial Surgery', R1 : '0', R2 : '4', R3: '0', R4 : '0.5', R5 : '0'},
        { rotation: 'Obstetrics and Gynecology Anesthesia', R1 : '1', R2 : '0', R3: '0', R4 : '0', R5 : '2.5'},
        { rotation: 'Regional Anesthesia ', R1 : '1', R2 : '0', R3: '0', R4 : '1.5', R5 : '0'},
        { rotation: 'Anesthesia for Orthopedic Surgery', R1 : '1', R2 : '0', R3: '0', R4 : '0', R5 : '0'},
        { rotation: 'Pre-Anesthesia Clinic (PAC)', R1 : '0.5', R2 : '0.5', R3: '0.5', R4 : '1', R5 : '2'},
        { rotation: 'Critical Care Medicine', R1 : '0', R2 : '2', R3: '0', R4 : '0', R5 : '0'},
        { rotation: 'Plastic Surgery & Burns Anesthesia', R1 : '0', R2 : '0', R3: '0', R4 : '0', R5 : '1'},
        { rotation: 'Pain Management', R1 : '0', R2 : '0', R3: '2.5', R4 : '0', R5 : '0'},
        { rotation: 'Postanesthesia Care Unit- (PACU) 2 week', R1 : '0', R2 : '0', R3: '0', R4 : '0', R5 : '1'},
        { rotation: 'Pediatric Anesthesia', R1 : '0', R2 : '0', R3: '1', R4 : '1', R5 : '0'},
        { rotation: 'Neurosurgical Anesthesia', R1 : '0', R2 : '1', R3: '0', R4 : '0.5', R5 : '0'},
        { rotation: 'Cardio Thoracic Anesthesia', R1 : '1', R2 : '0', R3: '1', R4 : '0', R5 : '0'},
        { rotation: 'Anesthesia for Radiodiagnosis/Remote Location', R1 : '2', R2 : '0', R3: '1', R4 : '0', R5 : '1'},
        { rotation: 'Respiratory Medicine', R1 : '0.5', R2 : '0', R3: '1.5', R4 : '0', R5 : '1'},
        { rotation: 'Coronary Care Unit', R1 : '2', R2 : '0', R3: '1.5', R4 : '0', R5 : '0'},
        { rotation: 'Research', R1 : '0.5', R2 : '0', R3: '1', R4 : '1', R5 : '0'},
        { rotation: 'Elective', R1 : '0', R2 : '0.5', R3: '1', R4 : '2', R5 : '1.5'},
        { rotation: 'Annual Leave', R1 : '1', R2 : '1', R3: '1', R4 : '1', R5 : '1'},
    ],
    rotationObjectives : [ 'Medical Knowledge', 'Interpersonal and Communications Skills', 'Systems-Based Practice', 'Practice-Based Learning and Improvement', 'Professionalism', 'Patient Care'
    ],
    rotationYears: ['R1', 'R2', 'R3', 'R4', 'R4'],
    rotationCodes: [
        {name : 'Anesthesia for General Surgery', code : 'ANGS', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for General Surgery - Ambulatory Cases', code : 'ANGS-AMC', isOwnedByRotation: 'No', type: 'Elective'},
        {name : 'Anesthesia for General Surgery – Urology Surgery', code : 'ANGS-US', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for General Surgery – Vascular Surgery', code : 'ANGS-VS', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Pre-Anesthesia Clinic (PAC)', code : 'PANES-C', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Critical Care Medicine', code : 'CCM', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Plastic Surgery & Burns Anesthesia', code : 'PS-BA', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Pain Management', code : 'PM', isOwnedByRotation: 'Yes', type: 'Elective'},
        {name : 'Cardio Thoracic Anesthesia', code : 'CARDTA', isOwnedByRotation: 'Yes', type: 'Core'},
        {name : 'Anesthesia for Radiodiagnosis/Remote Location', code : 'ANES-R-RL', isOwnedByRotation: 'Yes', type: 'Elective'},
    ],
    trainingSites : ['AFH' , 'Khoula Hospital' , 'Royal Hospital' , 'SQUH']
}

export {data}

