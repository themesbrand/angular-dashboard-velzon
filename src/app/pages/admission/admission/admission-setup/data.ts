const data = {
    yearsList : getYearsList(),
    programType : [
        'Residency Program',
        'Fellowship'
    ],
    residencyProgramList : [
        'Anesthesia',
        'ENT',
        'Medical Microbiology',
        'Pediatrics',
        'Histopathology',
        'Emergency Medicine',
        'General Surgery',
        'General Dentistry program and Oral',
        'Maxillofacial surgery program'
    ],
    fellowshipProgramList : [
        'Adult Cardiology Fellowship'
    ],
    tableData: [
        {
            academicYear : '2022',
            programName : 'Medical Microbiology',	
            applicationStartDate : '2022-10-15T15:30',
            applicationEndDate: '2022-12-15T15:30',
            status : 'Open'
        },
        {
            academicYear : '2022',
            programName : 'General Surgery',	
            applicationStartDate : '2022-10-15T15:30',
            applicationEndDate: '2022-12-15T15:30',
            status : ''
        },
        {
            academicYear : '2022',
            programName : 'General Dentistry program and Oral',	
            applicationStartDate : '2022-12-15T15:30',
            applicationEndDate: '2022-12-15T15:30',
            status : 'Close'
        },
    ],
    admissionData : {
        programType : 'Residency Program',
        programName : 'General Dentistry program and Oral',
        academicYear : 2022,
        applicationStartDate  : 'Wed Aug 18 2022 12:00:00 GMT+0530 (India Standard Time)',
        applicationEndDate  : 'Wed Aug 24 2022 12:00:00 GMT+0530 (India Standard Time)',
        medicalQualifications  : 'MD',
        medicalQualificationsOther : null,
        certificationsRequired  : 'BMBS',
        certificationsRequiredOther : null,
        specialtyCertificates  : null,
        dentistryCertificate  : 'Yes',
        selectionExamRequired  : 'Yes',
        evaluationForm : 'Evaluation Form'
    }


}

export {data};

function getYearsList() {
    var max = new Date().getFullYear()
    var min = max - 50
    var years = []
  
    for (var i = min; i <= max; i++) {
      years.push(i)
    }
    return years
}