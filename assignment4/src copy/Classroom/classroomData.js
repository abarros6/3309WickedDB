let classroomJson = {
    classroom: []
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class classroom {
    constructor(classId, classroomNo, homeInstructor, classroomQuantity) {
        this.classId = classId;
        this.classroomNo = classroomNo;
        this.homeInstructor = homeInstructor;
        this.classroomQuantity = classroomQuantity;
    }
}

function getClassroomNo() {
    let floor1 = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    let floor2 = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222];
    let floor3 = [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322];
    
    switch(getRndInteger(0,2)) {
        case 0:
            return (floor1[getRndInteger(0,21)])
        case 1: 
            return (floor2[getRndInteger(0,21)])
        case 2:
            return (floor3[getRndInteger(0,21)])
    }
}

function getHomeInstructor () {
    let instrucotrIDlist = [];
        for (let i = 1; i <= 66; i++) {
            instrucotrIDlist.push(i);
        }

        for (let i = 1; i < 67; i++)
            var currentrandnumber = getRndInteger(0,instrucotrIDlist.length)
            return instrucotrIDlist[currentrandnumber]
            instrucotrIDlist.remove(currentrandnumber)

}

function getClassroomQuantity () {
    return getRndInteger(20,40)
}

function createTuple (id) {
    let tuple = new classroom(id, getClassroomNo(), getHomeInstructor(), getClassroomQuantity());
    return tuple;
}

function generateClassroomData () {
    for (let i = 1; i < 67; i++) {
        classroomJson.classroom.push(createTuple(i));
    }
    let json = JSON.stringify(classroomJson);

    let fs = require('fs');
    fs.writeFile('classroom.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

generateClassroomData(); 