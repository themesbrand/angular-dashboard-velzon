const data = {
    trainerNamesList : ['Name 1', 'Name 2'],
    mentorNamesList : ['Name 1', 'Name 2'],
    trainerCenterList : ['Center 1', 'Center 2'],
    rotationList: ['OBGYN:ANW-RH', 'OBGYN:CLINIC-RH','OBGYN:ANW-RH','EM:EM-KH','OBGYN:OT-RH','OBGYN:RSCH(STAGE 1)-RH','OBGYN:CLINIC-SQUH','OBGYN:CLINIC-SQUH','OBGYN:ANW-SQUH','PEDS:NICU-SQUH', 'OBGYN:DELIVERY-SQUH', 'OBGYN:GYN-AFH', 'OBGYN:GYN-AFH'],
    'trainer-evaluation-form' : [
        {
            questionNumber: '',
            question : 'I. Medical Knowledge (MK)',
            isChoices : false,
        },
        {
            questionNumber: 'questionOne',
            question : '1 Demonstrated breadth of knowledge',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. Patient Care (PC)',
            isChoices : false,
        },
        {
            questionNumber: 'questionTwo',
            question : '2 Made rounds regularly',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3 Promoted a comprehensive approach to patient care',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4 Provided opportunity for performing procedure & techniques',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. Professionalism (P)',
            isChoices : false,
        },
        {
            questionNumber: 'questionFive',
            question : '5 Was approachable',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6 Provided a good role model',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : `7 Was available with enough time for resident's support & supervision`,
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. Interpersonal and Communication Skills (ICS)',
            isChoices : false,
        },
        {
            questionNumber: 'questionEight',
            question : '8 Established good rapport with resident',
            isChoices : true,
        },
        {
            questionNumber: 'questionNine',
            question : '9 Communicated well with colleagues',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10 Communicated well with other health care professionals',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11 Related well with patients and families, if applicable',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. System-Based Practice (SBP)',
            isChoices : false,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12 Was well organized',
            isChoices : true,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13 Allowed resident protected teaching time',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14 Allowed residents to attend mandatory workshops, if applicable',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'VI. Practice-Based Learning and Improvement (PBLI)',
            isChoices : false,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15 Provided quality teaching',
            isChoices : true,
        },
        {
            questionNumber: 'questionSixteen',
            question : '16 Stimulated enthusiasm for knowledge',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeventeen',
            question : '17 Provided direction & feedback',
            isChoices : true,
        },
        {
            questionNumber: 'questionEighteen',
            question : '18 Encouraged resident to take appropriate responsibility',
            isChoices : true,
        },
        {
            questionNumber: 'questionNineteen',
            question : '19 My total workload was appropriate for the time available',
            isChoices : true,
        }
    ],
    'research-mentor-evaluation-form' : [
        {
            questionNumber: 'questionOne',
            question : '1 Encourages identification of research topics.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwo',
            question : '2 Helps me become independent in identifying research questions.',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3 Provides constructive feedback on my research designs.',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4 Encourages identifying research methodology.',
            isChoices : true,
        },
        {
            questionNumber: 'questionFive',
            question : '5 Helps me develop my capacity for theoretical reasoning.',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6 Helps me to be critical and objective.',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : '7 Provides guidance on writing skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionEight',
            question : '8 Provides guidance on presenting skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionNine',
            question : '9 Provides guidance on technical skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10 Ensures ethical research practice',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11 Encourages teamwork.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12 Provides thoughtful advice on my research progress.',
            isChoices : true,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13 Accessible',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14 Approchable',
            isChoices : true,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15 Is a good role model in research',
            isChoices : true,
        }
    ],
    'rotation-evaluation-form' : [
        {
            questionNumber: '',
            question : 'I. Clinical Volume',
            isChoices : false,
        },
        {
            questionNumber: 'questionOne',
            question : '1 The number of in-patient cases seen',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwo',
            question : '2 The number of outpatient cases seen',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3 Range of clinical cases/problems',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4 The number of procedures',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. Clinical Experience',
            isChoices : false,
        },
        {
            questionNumber: 'questionFive',
            question : '5 Level of responsibility in patient care',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6 The opportunity to see acute emergency cases',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : '7 The opportunity to see consultations',
            isChoices : true,
        },
        {
            questionNumber: 'questionEight',
            question : '8 The opportunity to perform procedures',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. Academic activities',
            isChoices : false,
        },
        {
            questionNumber: 'questionNine',
            question : '9 Formal didactic teaching',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10 Quality assurance activities',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11 Journal Club',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12 Opportunity to do research',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'IV. Supervision',
            isChoices : false,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13 Discussion of learning objectives',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14 Support & supervision',
            isChoices : true,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15 Feedback from trainer on performance',
            isChoices : true,
        },
        {
            questionNumber: 'questionSixteen',
            question : '16 Assessment of Resident performance',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. Educational environment',
            isChoices : false,
        },
        {
            questionNumber: 'questionSeventeen',
            question : '17 Physical environment (e.g. on-call rooms, lounge, etc.)',
            isChoices : true,
        },
        {
            questionNumber: 'questionEighteen',
            question : '18 Learning environment (e.g. Teamwork, support, professional, etc.)',
            isChoices : true,
        },
        {
            questionNumber: 'questionNineteen',
            question : '19 Learning resources (e.g. workstations, microscopes, e-learning, etc.)',
            isChoices : true,
        }
    ],
}
export { data };