const data = {
    trainerNamesList : ['Name 1', 'Name 2'],
    mentorNamesList : ['Name 1', 'Name 2'],
    trainerCenterList : ['Center 1', 'Center 2'],
    setting : ['ICU', 'OT'],
    rotationList: ['OBGYN:ANW-RH', 'OBGYN:CLINIC-RH','OBGYN:ANW-RH','EM:EM-KH','OBGYN:OT-RH','OBGYN:RSCH(STAGE 1)-RH','OBGYN:CLINIC-SQUH','OBGYN:CLINIC-SQUH','OBGYN:ANW-SQUH','PEDS:NICU-SQUH', 'OBGYN:DELIVERY-SQUH', 'OBGYN:GYN-AFH', 'OBGYN:GYN-AFH'],
    'trainer-evaluation-form' : [
        {
            questionNumber: '',
            question : 'I. Medical Knowledge (MK)',
            isChoices : false,
        },
        {
            questionNumber: 'questionOne',
            question : '1. Demonstrated breadth of knowledge',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. Patient Care (PC)',
            isChoices : false,
        },
        {
            questionNumber: 'questionTwo',
            question : '2. Made rounds regularly',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3. Promoted a comprehensive approach to patient care',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4. Provided opportunity for performing procedure & techniques',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. Professionalism (P)',
            isChoices : false,
        },
        {
            questionNumber: 'questionFive',
            question : '5. Was approachable',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6. Provided a good role model',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : `7 Was available with enough time for resident's support & supervision`,
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'IV. Interpersonal and Communication Skills (ICS)',
            isChoices : false,
        },
        {
            questionNumber: 'questionEight',
            question : '8. Established good rapport with resident',
            isChoices : true,
        },
        {
            questionNumber: 'questionNine',
            question : '9. Communicated well with colleagues',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10. Communicated well with other health care professionals',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11. Related well with patients and families, if applicable',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. System-Based Practice (SBP)',
            isChoices : false,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12. Was well organized',
            isChoices : true,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13. Allowed resident protected teaching time',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14. Allowed residents to attend mandatory workshops, if applicable',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'VI. Practice-Based Learning and Improvement (PBLI)',
            isChoices : false,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15. Provided quality teaching',
            isChoices : true,
        },
        {
            questionNumber: 'questionSixteen',
            question : '16. Stimulated enthusiasm for knowledge',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeventeen',
            question : '17. Provided direction & feedback',
            isChoices : true,
        },
        {
            questionNumber: 'questionEighteen',
            question : '18. Encouraged resident to take appropriate responsibility',
            isChoices : true,
        },
        {
            questionNumber: 'questionNineteen',
            question : '19. My total workload was appropriate for the time available',
            isChoices : true,
        }
    ],
    'research-mentor-evaluation-form' : [
        {
            questionNumber: 'questionOne',
            question : '1. Encourages identification of research topics.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwo',
            question : '2. Helps me become independent in identifying research questions.',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3. Provides constructive feedback on my research designs.',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4. Encourages identifying research methodology.',
            isChoices : true,
        },
        {
            questionNumber: 'questionFive',
            question : '5. Helps me develop my capacity for theoretical reasoning.',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6. Helps me to be critical and objective.',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : '7. Provides guidance on writing skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionEight',
            question : '8. Provides guidance on presenting skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionNine',
            question : '9. Provides guidance on technical skills for Research.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10. Ensures ethical research practice',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11. Encourages teamwork.',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12. Provides thoughtful advice on my research progress.',
            isChoices : true,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13. Accessible',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14. Approchable',
            isChoices : true,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15. Is a good role model in research',
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
            question : '1. The number of in-patient cases seen',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwo',
            question : '2. The number of outpatient cases seen',
            isChoices : true,
        },
        {
            questionNumber: 'questionThree',
            question : '3. Range of clinical cases/problems',
            isChoices : true,
        },
        {
            questionNumber: 'questionFour',
            question : '4. The number of procedures',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. Clinical Experience',
            isChoices : false,
        },
        {
            questionNumber: 'questionFive',
            question : '5. Level of responsibility in patient care',
            isChoices : true,
        },
        {
            questionNumber: 'questionSix',
            question : '6. The opportunity to see acute emergency cases',
            isChoices : true,
        },
        {
            questionNumber: 'questionSeven',
            question : '7. The opportunity to see consultations',
            isChoices : true,
        },
        {
            questionNumber: 'questionEight',
            question : '8. The opportunity to perform procedures',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. Academic activities',
            isChoices : false,
        },
        {
            questionNumber: 'questionNine',
            question : '9. Formal didactic teaching',
            isChoices : true,
        },
        {
            questionNumber: 'questionTen',
            question : '10. Quality assurance activities',
            isChoices : true,
        },
        {
            questionNumber: 'questionEleven',
            question : '11. Journal Club',
            isChoices : true,
        },
        {
            questionNumber: 'questionTwelve',
            question : '12. Opportunity to do research',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'IV. Supervision',
            isChoices : false,
        },
        {
            questionNumber: 'questionThirteen',
            question : '13. Discussion of learning objectives',
            isChoices : true,
        },
        {
            questionNumber: 'questionFourteen',
            question : '14. Support & supervision',
            isChoices : true,
        },
        {
            questionNumber: 'questionFifteen',
            question : '15. Feedback from trainer on performance',
            isChoices : true,
        },
        {
            questionNumber: 'questionSixteen',
            question : '16. Assessment of Resident performance',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. Educational environment',
            isChoices : false,
        },
        {
            questionNumber: 'questionSeventeen',
            question : '17. Physical environment (e.g. on-call rooms, lounge, etc.)',
            isChoices : true,
        },
        {
            questionNumber: 'questionEighteen',
            question : '18. Learning environment (e.g. Teamwork, support, professional, etc.)',
            isChoices : true,
        },
        {
            questionNumber: 'questionNineteen',
            question : '19. Learning resources (e.g. workstations, microscopes, e-learning, etc.)',
            isChoices : true,
        }
    ],
    'in-training-evaluation-form' : [
        {
            questionNumber: '',
            question : 'I. MEDICAL KNOWLEDGE (MK)',
            isChoices : false,
        },
        {
            questionNumber: 'Q1',
            question : '1. Demonstrates basic science knowledge',
            isChoices : true,
        },
        {
            questionNumber: 'Q2',
            question : '2. Applies medical knowledge in patient care',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. PATIENT CARE (PC)',
            isChoices : false,
        },
        {
            questionNumber: 'Q3',
            question : '3. Elicits pertinent history',
            isChoices : true,
        },
        {
            questionNumber: 'Q4',
            question : '4. Performs pertinent physical exam',
            isChoices : true,
        },
        {
            questionNumber: 'Q5',
            question : '5. Demonstrates appropriate clinical judgment',
            isChoices : true,
        },
        {
            questionNumber: 'Q6',
            question : '6. Interprets data logically',
            isChoices : true,
        },
        {
            questionNumber: 'Q7',
            question : '7. Executes management plans effectively',
            isChoices : true,
        },
        {
            questionNumber: 'Q8',
            question : '8. Manages emergencies promptly',
            isChoices : true,
        },
        {
            questionNumber: 'Q9',
            question : '9. Demonstrates appropriate procedural skills',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. PROFESSIONALISM (P)',
            isChoices : false,
        },
        {
            questionNumber: 'Q10',
            question : '10. Is punctual',
            isChoices : true,
        },
        {
            questionNumber: 'Q11',
            question : '11. Demonstrates sensitivity to cultural diversity',
            isChoices : true,
        },
        {
            questionNumber: 'Q12',
            question : '12. Demonstrates responsibility & accountability',
            isChoices : true,
        },
        {
            questionNumber: 'Q13',
            question : '13. Responds to patient needs before his/her own needs',
            isChoices : true,
        },
        {
            questionNumber: 'Q14',
            question : `14. Respects patient's privacy and autonomy`,
            isChoices : true,
        },
        {
            questionNumber: 'Q15',
            question : '15. Develops skills in conflict resolution',
            isChoices : true,
        },
        {
            questionNumber: 'Q16',
            question : '16. Exhibits respect, compassion and integrity',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'IV. INTERPERSONAL & COMMUNICATION SKILLS (ICS)',
            isChoices : false,
        },
        {
            questionNumber: 'Q17',
            question : '17. Communicates effectively with patients & families',
            isChoices : true,
        },
        {
            questionNumber: 'Q18',
            question : '18. Communicates effectively with health care professionals',
            isChoices : true,
        },
        {
            questionNumber: 'Q19',
            question : '19. Maintains comprehensive and timely medical records',
            isChoices : true,
        },
        {
            questionNumber: 'Q20',
            question : '20. Works effectively as a team member',
            isChoices : true,
        },
        {
            questionNumber: 'Q21',
            question : '21.  Leads medical teams effectively',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'V. SYSTEMS-BASED PRACTICE (SBP)',
            isChoices : false,
        },
        {
            questionNumber: 'Q22',
            question : '22. Utilizes resources appropriately',
            isChoices : true,
        },
        {
            questionNumber: 'Q23',
            question : '23. Participates in quality improvement activities',
            isChoices : true,
        },
        {
            questionNumber: 'Q24',
            question : '24. Advocates for quality patient care',
            isChoices : true,
        },
        {
            questionNumber: 'Q25',
            question : '25. Complies with patient safety measures',
            isChoices : true,
        },
        {
            questionNumber: 'Q26',
            question : '26. Coordinates patient care within the healthcare system',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'VI. PRACTICE-BASED LEARNING & IMPROVEMENT (PBLI))',
            isChoices : false,
        },
        {
            questionNumber: 'Q27',
            question : '27. Recognizes own strengths and limitations',
            isChoices : true,
        },
        {
            questionNumber: 'Q28',
            question : '28. Incorporates feedback into practice',
            isChoices : true,
        },
        {
            questionNumber: 'Q29',
            question : '29. Critically appraises medical literature',
            isChoices : true,
        },
        {
            questionNumber: 'Q30',
            question : '30. Demonstrates appropriate teaching skills',
            isChoices : true,
        },
        {
            questionNumber: 'Q31',
            question : '31. Uses technology for self and system improvement',
            isChoices : true,
        },
        {
            questionNumber: 'Q32',
            question : '32. Develops life-long learning skills',
            isChoices : true,
        },
        {
            questionNumber: 'Q33',
            question : '33. Employs practise-based data to improve care',
            isChoices : true,
        },
    ],
    'presentation-evaluation-form' : [
        {
            questionNumber: '',
            question : 'I. INTRODUCTION',
            isChoices : false,
        },
        {
            questionNumber: 'Q1',
            question : '1. Self-introduction.',
            isChoices : true,
        },
        {
            questionNumber: 'Q2',
            question : '2. Gained attention of group.',
            isChoices : true,
        },
        {
            questionNumber: 'Q3',
            question : '3. Stated the objectives',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'II. PROCESS AND CONTENT',
            isChoices : false,
        },
        {
            questionNumber: 'Q4',
            question : '1. Clear, concise delivery.',
            isChoices : true,
        },
        {
            questionNumber: 'Q5',
            question : '2. Logical sequence.',
            isChoices : true,
        },
        {
            questionNumber: 'Q6',
            question : '3. Well paced.',
            isChoices : true,
        },
        {
            questionNumber: 'Q7',
            question : '4. Knowledge of subject and preparedness',
            isChoices : true,
        },
        {
            questionNumber: 'Q8',
            question : '5. Good use of voice/tone.',
            isChoices : true,
        },
        {
            questionNumber: 'Q9',
            question : '6. Made appropriate eye contact and body language',
            isChoices : true,
        },
        {
            questionNumber: 'Q10',
            question : '7. Effective group participation (interactive).',
            isChoices : true,
        },
        {
            questionNumber: 'Q11',
            question : '8. Appropriate teaching methods used',
            isChoices : true,
        },
        {
            questionNumber: 'Q12',
            question : '9. Slides were easy to read and see.',
            isChoices : true,
        },
        {
            questionNumber: 'Q13',
            question : '10. Grammar, spelling, and punctuations are correct.',
            isChoices : true,
        },
        {
            questionNumber: '',
            question : 'III. CONCLUSION',
            isChoices : false,
        },
        {
            questionNumber: 'Q14',
            question : `1. Effective use of questioning.`,
            isChoices : true,
        },
        {
            questionNumber: 'Q15',
            question : `2. Summarized key points`,
            isChoices : true,
        },
        {
            questionNumber: 'Q16',
            question : `3. Objectives are met.`,
            isChoices : true,
        },
        {
            questionNumber: 'Q17',
            question : `4. Kept to time limit.`,
            isChoices : true,
        }
    ],
    'six-month-and-annual-evaluation-form' : [
        {
            questionNumber: 'Q1',
            question : 'OBGYN:ANW-RH',
            isChoices : true,
        },
        {
            questionNumber: 'Q2',
            question : 'OBGYN:CLINIC-RH',
            isChoices : true,
        },
        {
            questionNumber: 'Q3',
            question : 'OBGYN:ANW-RH',
            isChoices : true,
        },
        {
            questionNumber: 'Q4',
            question : 'EM:EM-KH',
            isChoices : true,
        },
        {
            questionNumber: 'Q5',
            question : 'OBGYN:OT-RH',
            isChoices : true,
        },
        {
            questionNumber: 'Q6',
            question : 'OBGYN:RSCH(STAGE 1)-RH',
            isChoices : true,
        },
        {
            questionNumber: 'Q7',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q8',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q9',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q10',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q11',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q12',
            question : '',
            isChoices : 'disabled',
        },
        {
            questionNumber: 'Q13',
            question : '',
            isChoices : 'disabled',
        },
    ]
}
export { data };