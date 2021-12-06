let CoruseEquipmentJson = {
    CoruseEquipment: []
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class CoruseEquipment {
    constructor(deviceNo, deviceName, classAssigned) {
        this.deviceNo = deviceNo;
        this.deviceName = deviceName;
        this.classAssigned = classAssigned;
    }
}

function getDeviceName() {
    let brands = ["Apple", "Samsung", "Chromebook", "Microsoft"];
    let devicetypes = ["Phone", "Small_Tablet", "Large_Tablet", "PC", "Laptop"];
    
    return (brands[getRndInteger(0,3)] + "-" + devicetypes[getRndInteger(0,4)])
}

function getClassroomAssignedNo() {
    let floor1 = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    let floor2 = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222];
    let floor3 = [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322];
    
    switch(getRndInteger(0,2)) {
        case 0:
            return ("classroom" + "-" + floor1[getRndInteger(0,21)])
        case 1: 
            return ("classroom" + "-" + floor2[getRndInteger(0,21)])
        case 2:
            return ("classroom" + "-" + floor3[getRndInteger(0,21)])
    }
}

function createTuple (id) {
    let tuple = new CoruseEquipment(id, getDeviceName(), getClassroomAssignedNo());
    return tuple;
}

function generateCourseEquipmentData () {
    for (let i = 1; i < 301; i++) {
        CoruseEquipmentJson.CoruseEquipment.push(createTuple(i));
    }
    let json = JSON.stringify(CoruseEquipmentJson);

    let fs = require('fs');
    fs.writeFile('CoruseEquipment.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

generateCourseEquipmentData(); 