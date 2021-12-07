//data can be generated sequentially
let Names = require('./names.js');

let names = Names.names;

let studentsJson = {
    Student: []
};

class Student {
    constructor(studentNo, fName, lName, studentAge, studentYear,studentAverage, creditsToDate, numberOfClasses, classroomNo, instructorNo) {
        this.studentNo = studentNo;
        this.fName = fName;
        this.lName = lName;
        this.studentAge = studentAge;
        this.studentYear = studentYear;
        this.studentAverage = studentAverage;
        this.creditsToDate = creditsToDate;
        this.numberOfClasses = numberOfClasses;
        this.classroomNo = classroomNo;
        this.instructorNo = instructorNo;
    }
}

function getName() {
    return names[getRndInteger(0, names.length - 1)];
}

// assuming all students are at or around highschool age 
let ageCounter = 0;
function getStudentAge() {
    ageCounter++;
    switch (ageCounter) {
        case 1:
            return getRndInteger(14,15);
        case 2: 
            return getRndInteger(15,16);
        case 3: 
            return getRndInteger(16,17);
        case 4:
            return getRndInteger(17,18);
    }
}

// assuming the value is 
let yearCounter = 0
function getStudentYear() {
    yearCounter++ 
    switch (yearCounter) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3: 
            return 3;
        case 4:
            yearCounter = 0
            return 4;
    }
}

// assuming the averages range from 45 to 100
function getStudentAverage() {
    return getRndInteger(45, 100);
}

// in ontario a student needs 18 compulsory and 12 elective credits roughly 8 per year or 4 per sem
let creditsCounter = 0;
function getCreditsToDate() {
    creditsCounter++;
    switch (creditsCounter) {
        case 1:
            return getRndInteger(0,8);
        case 2:
            return getRndInteger(8,16);
        case 3:
            return getRndInteger(16,24);
        case 4:
            creditsCounter = 0;
            return getRndInteger(24,32);
    }
}

function getNumberOfClasses() {
    let numbers = [1, 2, 3, 4, 5, 6];
    return numbers[getRndInteger(0,5)];
}

// assuming first number represents floor and next two numbers are actual room number. 3 floors
// lets say 22 rooms per floor and 3 floors
function getClassroomNo() {
    let floor1 = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    let floor2 = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222];
    let floor3 = [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322];
    
    switch(getRndInteger(0,2)) {
        case 0:
            return floor1[getRndInteger(0,21)]
        case 1: 
            return floor2[getRndInteger(0,21)]
        case 2:
            return floor3[getRndInteger(0,21)]
    }
}

// assuming there are exactly 66 instructors 
function getInstructorNo() {
    return getRndInteger(1, 66)
}
//this function returns a random number between min and max inclusive
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createTuple (id) {
    let tuple = new Student(id, getName(), getName(), getStudentAge(), getStudentYear(), getStudentAverage(), getCreditsToDate(), getNumberOfClasses(), getClassroomNo(), getInstructorNo());
    return tuple;
}


function generateStudentData () {
    for (let i = 1; i < 2001; i++) {
        studentsJson.Student.push(createTuple(i));
    }
    let json = JSON.stringify(studentsJson);

    let fs = require('fs');
    fs.writeFile('Student.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

generateStudentData(); 

