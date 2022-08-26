const data = {
    tableData : [
        {
            equipmentName : 'Equipment Name - 1',
            model : 'M51C55',
            supplierName : 'Supplier - 1',
            serialNumber : 'SC53168465',
            endOfWarranty : '2020-03-15',
            dateOfPurchase : '2030-03-15',
            maintenanceStartDate : 'N/A',
            maintenanceEndDate : 'N/A',
            nextMaintenance : 'N/A',
            status : 'Not Scheduled',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},    
                { stage : 'Scheduled', status : 'Pending', date : 'N/A', by : 'N/A'},    
                { stage : 'Pass / Fail Status', status : 'Pending', date : 'N/A', by : 'N/A'},    
            ]
        },
        {
            equipmentName : 'Equipment Name - 2',
            model : 'CS531321',
            supplierName : 'Supplier - 1',
            serialNumber : 'SC9783135',
            endOfWarranty : '2020-03-15',
            dateOfPurchase : '2030-03-15',
            maintenanceStartDate : '2022-09-16',
            maintenanceEndDate : '2022-09-18',
            nextMaintenance : 'N/A',
            status : 'Pending',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},    
                { stage : 'Scheduled', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Ibraham'},    
                { stage : 'Pass / Fail Status', status : 'Pending', date : 'N/A', by : 'N/A'},    
            ]
        },
        {
            equipmentName : 'Equipment Name - 2',
            model : 'CS531321',
            supplierName : 'Supplier - 1',
            serialNumber : 'SC9783135',
            endOfWarranty : '2020-03-15',
            dateOfPurchase : '2030-03-15',
            maintenanceStartDate : '2022-09-16',
            maintenanceEndDate : '2022-09-18',
            nextMaintenance : '2022-12-16',
            status : 'Pass',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},    
                { stage : 'Scheduled', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Al Abri Ibraham'},    
                { stage : 'Pass', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Al Abri Falsal'},    
            ]
        },
        {
            equipmentName : 'Equipment Name - 2',
            model : 'CS531321',
            supplierName : 'Supplier - 1',
            serialNumber : 'SC9783135',
            endOfWarranty : '2020-03-15',
            dateOfPurchase : '2030-03-15',
            maintenanceStartDate : '2022-09-16',
            maintenanceEndDate : '2022-09-18',
            nextMaintenance : 'N/A',
            status : 'Fail',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-07-25 08:00:00 AM', by : 'Al Abri Falsal'},    
                { stage : 'Scheduled', status : 'Complete', date : '2022-07-29 08:00:00 AM', by : 'Al Abri Ibraham'},    
                { stage : 'Fail', status : 'Complete', date : '2022-07-30 08:00:00 AM', by : 'Al Abri Falsal'},    
            ]
        },
        {
            equipmentName : 'Equipment Name - 2',
            model : 'CS531321',
            supplierName : 'Supplier - 1',
            serialNumber : 'SC9783135',
            endOfWarranty : '2020-03-15',
            dateOfPurchase : '2030-03-15',
            maintenanceStartDate : '2022-04-16',
            maintenanceEndDate : '2022-04-18',
            nextMaintenance : '2022-06-16',
            status : 'Overdue',
            applicationStatus : [
                { stage : 'Created', status : 'Complete', date : '2022-01-25 08:00:00 AM', by : 'Al Abri Falsal'},    
                { stage : 'Scheduled', status : 'Complete', date : '2022-03-29 08:00:00 AM', by : 'Al Abri Ibraham'},    
                { stage : 'Overdue', status : 'Complete', date : 'N/A', by : 'N/A'},    
            ]
        },
    ]
}

export {data}