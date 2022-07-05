const data = {
  'programDataObject' : {
      'programName' : {
        name : 'Program Name', description : 'Anaesthesia',
      },
      'programCode' : {
        name : 'Program Code', description : '155-1321',
      },
      'programDescription' : {
        name : 'Program Description', description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi maiores mollitia dolorum at id accusantium quisquam vitae facilis natus? Ab recusandae eos iste nihil illum. Suscipit.',
      },
      'establishmentDate' : {
        name : 'Establishment Date', description : '2019-06-15',
      },
      'vision' : {
        name : 'Vision', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem explicabo nihil.',
      },
      'mission' : {
        name : 'MIssion', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      'noOfBlocks' : {name : 'Number of Block', value : '65 Blocks'} ,
      'programDuration' : {
        name : 'Program Duration', description : '05 Years', extra: 'Basic Level Training : 3 years & Advanced Training : 2 Years',
      },
  },
  'programDurations': [
    {name: '1 Year', value : '1'},
    {name: '2 Year', value : '2'},
    {name: '3 Year', value : '3'},
    {name: '4 Year', value : '4'},
    {name: '5 Year', value : '5'},
    {name: '6 Year', value : '6'},
    {name: '7 Year', value : '7'}
  ],
  'teamCommittee' : [
    'Education Committee', 'Curriculum Sub Committee', 'Program Evaluation Committee', 'Clinical Competency Committee', 'Research Sub Committee', 'Medical Simulation Sub Committee', 'Program Administrators'
  ],
  'teamObject' : {
    'educationCommittee' : [
        {'position' : {
            'name': 'Education Committee Chairman',
            'members' : [
                {
                    userImage : '/assets/images/users/avatar-3.jpg',
                    name : "Madan Al Abri",
                    email:'MadanAlAbri@gmail.com',
                    phone:'+9681325232'
                }
            ]
        }},
        {'position' : {
            'name': 'Program Director',
            'members' : [
                {
                    userImage : '/assets/images/users/avatar-4.jpg',
                    name : "Saleh Mahfoudh",
                    email:'SalehMahfoudh@gmail.com',
                    phone:'+96885325232'
                }
            ]
        }},
        {'position' : {
            'name': 'Assistant Program Director',
            'members' : [
                {
                    userImage : '/assets/images/users/avatar-2.jpg',
                    name : "Madan Khan",
                    email:'MadanKhan@gmail.com',
                    phone:'+96814525232'
                },
                {
                    userImage : '/assets/images/users/avatar-1.jpg',
                    name : "Abdel Maddali",
                    email:'Abdel94@gmail.com',
                    phone:'+968999232'
                }
            ]
        }},
        {'position' : {
            'name': 'Committee Member',
            'members' : [
                {
                    userImage : '/assets/images/users/avatar-5.jpg',
                    name : "Al Abri Falsal",
                    email:'AlAbriFalsal@gmail.com',
                    phone:'+9681999232'
                },
                {
                    userImage : '/assets/images/users/avatar-6.jpg',
                    name : "Al Abri Ibraham",
                    email:'AbriIbraham@gmail.com',
                    phone:'+9681999232'
                }
            ]
        }},
    ]
  },
  'team' : {
    'educationCommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Education Committee Chairman",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Program Director",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Assistant Program Director",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Assistant Program Director",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'curriculumSubcommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Committee Member",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Committee Member",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Committee Member",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Committee Member",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'programEvaluationCommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Committee Member",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Committee Member",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Committee Member",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Committee Member",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'clinicalCompetencyCommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Committee Member",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Committee Member",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Committee Member",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Committee Member",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'researchSubCommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Committee Member",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Committee Member",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Committee Member",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Committee Member",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'medicalSimulationSubCommittee' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Committee Member",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Committee Member",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Committee Member",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Committee Member",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Committee Member",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Committee Member",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
    'programAdministrators' : [
      {
          backgroundImg :'/assets/images/small/img-1.jpg',
          userImage : '/assets/images/users/avatar-4.jpg',
          name : "Madan Al Abri",
          jobPosition : "Program Administor",
          email:'MadanAlAbri@gmail.com',
          phone:'+9681325232'
      },
      {
          backgroundImg :'/assets/images/small/img-2.jpg',
          userImage : '/assets/images/users/avatar-1.jpg',
          name : "Saleh Mahfoudh",
          jobPosition : "Program Administor",
          email:'SalehMahfoudh@gmail.com',
          phone:'+96885325232'
      },
      {
          backgroundImg :'/assets/images/small/img-3.jpg',
          userImage : '/assets/images/users/avatar-2.jpg',
          name : "Madan Khan",
          jobPosition : "Program Administor",
          email:'MadanKhan@gmail.com',
          phone:'+96814525232'
      },
      {
          backgroundImg :'/assets/images/small/img-4.jpg',
          userImage : '/assets/images/users/avatar-3.jpg',
          name : "Abdel Maddali",
          jobPosition : "Program Administor",
          email:'Abdel94@gmail.com',
          phone:'+968999232'
      },
      {
          backgroundImg :'/assets/images/small/img-5.jpg',
          userImage : '/assets/images/users/avatar-5.jpg',
          name : "Al Abri Falsal",
          jobPosition : "Program Administor",
          email:'AlAbriFalsal@gmail.com',
          phone:'+9681999232'
      },
      {
          backgroundImg :'/assets/images/small/img-6.jpg',
          userImage : '/assets/images/users/avatar-6.jpg',
          name : "Al Abri Ibraham",
          jobPosition : "Program Administor",
          email:'AbriIbraham@gmail.com',
          phone:'+9681999232'
      }
    ],
  }
    
}

export { data }