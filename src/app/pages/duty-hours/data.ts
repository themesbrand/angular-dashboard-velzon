const data = {
    calendarEvents: <any>[
        {dutyType: 'On Call', assignmentName : 'On Call', colorCode : '#f06548', startDate : 'Sat Jul 09 2022 08:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 09 2022 09:30:00 GMT+0530 (India Standard Time', duration: '1 Hour', department : 'Orthographic', trainingCenter: 'Khoula Hospital'},
        { dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44', startDate : 'Sat Jul 10 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 10 2022 12:30:00 GMT+0530 (India Standard Time', duration: '2 Hour', department : 'Orthographic', trainingCenter: 'Armed Forces Hospital'},
        { dutyType: 'Post Call', assignmentName : 'Post Call', colorCode : '#ffc710', startDate : 'Sat Jul 9 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 9 2022 11:30:00 GMT+0530 (India Standard Time', duration: '1 Hour', department : 'ENT', trainingCenter: 'Khoula Hospital'},
        { dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44', startDate : 'Sat Jul 15 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 15 2022 12:30:00 GMT+0530 (India Standard Time', duration: '2 Hour', department : 'ICU', trainingCenter: 'Al Nahdah Hospital'},
        {dutyType: 'Rotation Hours', assignmentName : 'Ward', colorCode : '#05464e', startDate : 'Sat Jul 15 2022 09:00:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 15 2022 09:45:00 GMT+0530 (India Standard Time', duration: '45 Minutes', department : 'Orthographic', trainingCenter: 'Al Nahdah Hospital'},
        { dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44', startDate : 'Sat Jul 10 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 10 2022 12:30:00 GMT+0530 (India Standard Time', duration: '2 Hour', department : 'Orthographic', trainingCenter: 'Armed Forces Hospital'},
        { dutyType: 'Post Call', assignmentName : 'Post Call', colorCode : '#ffc710', startDate : 'Sat Jul 9 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 9 2022 11:30:00 GMT+0530 (India Standard Time', duration: '1 Hour', department : 'ENT', trainingCenter: 'Khoula Hospital'},
        {dutyType: 'Rotation Hours', assignmentName : 'Ward', colorCode : '#05464e', startDate : 'Sat Jul 20 2022 09:00:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 20 2022 09:45:00 GMT+0530 (India Standard Time', duration: '45 Minutes', department : 'Orthographic', trainingCenter: 'Khoula Hospital'},
        { dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44', startDate : 'Sat Jul 15 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 15 2022 12:30:00 GMT+0530 (India Standard Time', duration: '2 Hour', department : 'ICU', trainingCenter: 'Al Nahdah Hospital'},
        { dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44', startDate : 'Sat Jul 15 2022 10:30:00 GMT+0530 (India Standard Time', endDate: 'Sat Jul 15 2022 12:30:00 GMT+0530 (India Standard Time', duration: '2 Hour', department : 'ICU', trainingCenter: 'Al Nahdah Hospital'},

    ],
    dutyTypes : ['On Call', 'Post Call', 'Rotation Hours'],
    assignmentsDataObject : [
        {dutyType: 'On Call', assignmentName : 'On Call', colorCode : '#f06548'},
        {dutyType: 'Post Call', assignmentName : 'Post Call', colorCode : '#ffc710'},
        {dutyType: 'Rotation Hours', assignmentName : 'Conference', colorCode : '#08ff44'},
        {dutyType: 'Rotation Hours', assignmentName : 'Morning Meeting', colorCode : '#089eff'},
        {dutyType: 'Rotation Hours', assignmentName : 'Clinic', colorCode : '#3ae8ff'},
        {dutyType: 'Rotation Hours', assignmentName : 'ICU', colorCode : '#ab3bc3'},
        {dutyType: 'Rotation Hours', assignmentName : 'Ward', colorCode : '#05464e'},
    ],
    department: ['Orthographic','ENT', 'ICU'],
    trainingSites: ['Al Nahdah Hospital', 'Armed Forces Hospital', 'Khoula Hospital', 'Royal Hospital', 'Sultan Qaboos University Hospital'],
    slotDuration: getSlotDates()
}

export {data}

let eventGuid = 0;
export function createEventId() {
    return String(eventGuid++);
}

function getSlotDates() {
    let slots = []
    slots.push({value : 15, name : '15 Minutes'},
    {value : 30, name : '30 Minutes'},
    {value : 45, name : '45 Minutes'})
    let index = 1;
    while (index < 25) {
        if(index === 1 ) {
            slots.push({value : (index * 60), name : `${index} Hour`})
        } else {
            slots.push({value : (index * 60), name : `${index} Hours`})
        }
        index +=1 
    }
    return slots
}
