const data = {
    rotationObjectives : [ 'Medical Knowledge', 'Interpersonal and Communications Skills', 'Systems-Based Practice', 'Practice-Based Learning and Improvement', 'Professionalism', 'Patient Care'
    ],
    rotationYears: ['R1', 'R2', 'R3', 'R4', 'R4'],
    rotationTypes: ['Core', 'Elective'],
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