let scheduleJson = {
    schedule: []
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class schedule {
    constructor() {
        this.classId = classId;
        this.classroomNo = classroomNo;
        this.homeInstructor = homeInstructor;
        this.classroomQuantity = classroomQuantity;
    }
}

//-----

function createTuple (id) {
    let tuple = new schedule(id);
    return tuple;
}

function generatescheduleData () {
    for (let i = 1; i < 67; i++) {
        scheduleJson.schedule.push(createTuple(i));
    }
    let json = JSON.stringify(classroomJson);

    let fs = require('fs');
    fs.writeFile('schedule.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

generatescheduleData(); 