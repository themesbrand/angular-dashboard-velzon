const data = {
    tableData: [
        {
            sponsorName : 'MOH'
        },
        {
            sponsorName : 'SQUH'
        },
    ],
    sponsorNames : [
        'MOH',
        'SQUH'
    ]

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