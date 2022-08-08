const data = {
    yearsList : getYearsList(),
    competitionGroup: ['Section Booth', 'Program Booth'],
    tableData : [
      {
        programName	: 'Anastasia',
        judgeOne : '4.5',
        judgeTwo : '4.2',
        judgeThree : '4.3',
        medianScore : '4.3',
        meanScore : '4.3',
        rank : 1
      },
      {
        programName	: 'ENT',
        judgeOne : '4.2',
        judgeTwo : '4.1',
        judgeThree : '4.1',
        medianScore : '4.1',
        meanScore : '4.1',
        rank : 2
      },
      {
        programName	: 'Medical Microbiology',
        judgeOne : '3.9',
        judgeTwo : '4',
        judgeThree : '3.9',
        medianScore : '3.9',
        meanScore : '3.9',
        rank : 3
      },
      {
        programName	: 'Pediatrics',
        judgeOne : '3.8',
        judgeTwo : '3.9',
        judgeThree : '3.8',
        medianScore : '3.8',
        meanScore : '3.8',
        rank : 4
      },
      {
        programName	: 'Histopathology',
        judgeOne : '4',
        judgeTwo : '4',
        judgeThree : '3.2',
        medianScore : '4',
        meanScore : '3.7',
        rank : 5
      },
      {
        programName	: 'Emergency Medicine',
        judgeOne : '3.2',
        judgeTwo : '3.4',
        judgeThree : '3.3',
        medianScore : '3.3',
        meanScore : '3.3',
        rank : 6
      },
      {
        programName	: 'General Surgery',
        judgeOne : '3.1',
        judgeTwo : '3.1',
        judgeThree : '3.1',
        medianScore : '3.1',
        meanScore : '3.1',
        rank : 7
      },

    ]
    
}

export {data}

function getYearsList() {
    var max = new Date().getFullYear()
    var min = max - 50
    var years = []
  
    for (var i = min; i <= max; i++) {
      years.push(i)
    }
    years.reverse()
    return years
}