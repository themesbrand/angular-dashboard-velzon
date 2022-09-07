const data = {
  tableDataAdmin : [
    {
      requestSerialNo : '65486321',
      requestFrom : 'Faisal Gawas',
      examName : 'Exam Name - 1',
      certificateRecipient : 'Faisal Gawas',
      reason : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus, quisquam commodi ipsa, perspiciatis voluptates aut animi non maiores neque repudiandae, consequatur quae excepturi earum.',
      documents : '',
      status : 'Pending Certificate',
      applicationStatus: [
        { stage : 'Payment for Certificate', status : 'Completed', by : 'Abdel Maddali', date : '2022-09-29'},
        { stage : 'Certificate Issued', status : 'Pending', date : 'N/A', by : 'N/A'},
      ]
    },
    {
      requestSerialNo : '65486321',
      requestFrom : 'Faisal Gawas',
      examName : 'Exam Name - 1',
      certificateRecipient : 'Faisal Gawas',
      reason : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus, quisquam commodi ipsa, perspiciatis voluptates aut animi non maiores neque repudiandae, consequatur quae excepturi earum.',
      documents : '',
      status : 'Issued',
      applicationStatus: [
        { stage : 'Payment for Certificate', status : 'Completed', by : 'Faisal Gawas' , date : '2022-09-29'},
        { stage : 'Certificate Issued', status : 'Completed', by : 'Abu Nasser', date : '2022-09-29'},
      ]
    },
  ],
  tableDataTrainee : [
    {
      examName : 'Exam Name - 1',
      certificateRecipient : 'Faisal Gawas',
      reason : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus, quisquam commodi ipsa, perspiciatis voluptates aut animi non maiores neque repudiandae, consequatur quae excepturi earum.',
      documents : '',
      status : 'Payment Pending',
      applicationStatus: [
        { stage : 'Payment Pending', status : 'Pending', date : 'N/A', by : 'N/A'},
        { stage : 'Certificate Issued', status : 'Pending', date : 'N/A', by : 'N/A'},
      ]
    },
    {
      examName : 'Exam Name - 2',
      certificateRecipient : 'Faisal Gawas',
      reason : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus, quisquam commodi ipsa, perspiciatis voluptates aut animi non maiores neque repudiandae, consequatur quae excepturi earum.',
      documents : '',
      status : 'Pending Certificate',
      applicationStatus: [
        { stage : 'Payment for Certificate', status : 'Completed', by : 'Abdel Maddali', date : '2022-09-29'},
        { stage : 'Certificate Issued', status : 'Pending', date : 'N/A', by : 'N/A'},
      ]
    },
    {

      examName : 'Exam Name - 3',
      certificateRecipient : 'Faisal Gawas',
      reason : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus, quisquam commodi ipsa, perspiciatis voluptates aut animi non maiores neque repudiandae, consequatur quae excepturi earum.',
      documents : '',
      status : 'Issued',
      applicationStatus: [
        { stage : 'Payment for Certificate', status : 'Completed', by : 'Faisal Gawas' , date : '2022-09-29'},
        { stage : 'Certificate Issued', status : 'Completed', by : 'Abu Nasser', date : '2022-09-29'},
      ]
    },
  ],
  userData :userListGenerator(),

}

export {data};

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
  const userDefinedList: any[] = [];

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