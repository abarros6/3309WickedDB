let Names = require('./names.js');

let names = Names.names;

let staffJson = {
    staff: []
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class staff {
    constructor(staffNo, deptAssigned, StaffName) {
        this.staffNo = staffNo;
        this.deptAssigned = deptAssigned;
        this.StaffName = StaffName;
    }
}

function getDeptAssigned() {
    let depts = ["Math", "Science", "Social_Science", "English", "French", "Physical_Activities"];
    return depts[getRndInteger(0,5)];
}

function getStaffName() {
    return names[getRndInteger(0, names.length - 1)];
}

function createTuple (id) {
    let tuple = new staff(id, getDeptAssigned(), getStaffName());
    return tuple;
}

function generatestaffData () {
    for (let i = 1; i < 67; i++) {
        staffJson.staff.push(createTuple(i));
    }
    let json = JSON.stringify(staffJson);

    let fs = require('fs');
    fs.writeFile('staff.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

generatestaffData(); 