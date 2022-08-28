const data = {
    tableDataAdmin : [
        {
            courseName : 'Anesthesia',
            courseDescription : 'Anesthesiology is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }               
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'Draft',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},
                { stage : 'Sent to SME Team', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'With SME Team',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'Completed',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'With PCD Admin',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Complete', date : '2022-08-05 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'Closed',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Complete', date : '2022-08-05 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Request Closed by PCD Admin', status : 'Complete', date : '2022-08-08 08:00:00 AM', by : 'Hilal basheer'}
            ],
        }
    ],
    tableDataTeam : [
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'With SME Team',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'},
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'With SME Team',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'Completed',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Pending', date : 'N/A', by : 'N/A'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'With PCD Admin',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Complete', date : '2022-08-05 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Request Closed by PCD Admin', status : 'Pending', date : 'N/A', by : 'N/A'}
            ],
        },
        {
            courseName : 'ENT',
            courseDescription : 'ENT is a medical specialty, which includes patient assessment and provision of life support, and analgesia for both surgical procedures and childbirth; assessment and management of critically ill patients, and patients with acute and chronic pain.',
            courseReferenceNumber : 'KJ-31354',
            courseVersion : '1',
            coursePPT : '',
            courseTeam : [
                {
                    firstName : 'Madan',
                    secondName : 'Ali',
                    lastName : 'Khan',
                    email : "Madan@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '789465312',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }, 
                {
                    firstName : 'Faisal',
                    secondName : 'Ali',
                    lastName : 'Gawas',
                    email : "Faisal@email.com",
                    phoneNumber : '+968456789',
                    position : 'Doctor',
                    civilID : '7987412358',
                    institution : 'Khoula Hospital',
                    isTeamRapporteur : true,
                    isTeamChair : true
                }
            ],
            courseTeamChairperson : {
                email: "Abbas@email.com",
                labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                name: "Abbas Al Ajmi"
            },
            teamQarar : '',
            status : 'Closed',
                        comments: [
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-19',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                },
                {
                    comments : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa exercitationem dolor consequatur incidunt provident optio.',
                    createdOn : '2022-08-30',
                    createdBy : 'Abu Nasser',
                    assignedTo : [
                        {
                            email: "Faisal@email.com",
                            labelValue: "Faisal Gawas | Faisal@email.com | 19-206 ",
                            name: "Faisal Gawas"
                        }, {
                            email: "Abbas@email.com",
                            labelValue: "Abbas Al Ajmi | Abbas@email.com | 19-204 ",
                            name: "Abbas Al Ajmi"
                        }
                    ]
                }
            ],
            applicationStatus : [
                { stage : 'Submit as a Draft', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},                
                { stage : 'Sent to SME Team', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Rapporteur', status : 'Complete', date : '2022-08-01 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Approval By SME Team Chair', status : 'Complete', date : '2022-08-05 08:00:00 AM', by : 'Faisal Gawas'},
                { stage : 'Request Closed by PCD Admin', status : 'Complete', date : '2022-08-08 08:00:00 AM', by : 'Hilal basheer'}
            ],
        }
    ],
    userLists : userListGenerator(),

}

export {data}

function userListGenerator() {
    const users = [
        {
            name : 'Abbas Al Ajmi',
            email : 'Abbas@email.com',
            omsb: '19-204'
        }, 
        {
            name : 'Madan Khan',
            email : 'Madan@email.com',
            omsb: '19-210'
        }, 
        {
            name : 'Madan Al Abri',
            email : 'Madan@email.com',
            omsb: '19-209'
        }, 
        {
            name : 'Faisal Gawas',
            email : 'Faisal@email.com',
            omsb: '19-206'
        },
        {
            name : 'Al Abri Ibraham',
            email : 'Abri@email.com',
            omsb: '19-219'
        },
        {
            name : 'Hilal basheer',
            email : 'Hilal@email.com',
            omsb: '19-221'
        },
    ]
    const userDefinedList: { name: string; email: string; labelValue: string; }[] = [];

    users.forEach(user=> {
        userDefinedList.push(
            {
                name : user.name,
                email : user.email,
                labelValue : `${user.name} | ${user.email} | ${user.omsb} `
            }
        )
    })

    return userDefinedList;
}
