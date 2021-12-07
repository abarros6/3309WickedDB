//this is where i will initialize the database

/*
let deptContent = require
import{deptContent,
    adminContent,
    classContent,
    instructorContent,
    studentContent,
    courseContent,
    sectionContent,
    enrollmentContent,
    equipmentContent,
    allotmentContent} from './populate.js';
*/

const content = require("./populate");

let deptContent = content.deptContent;
let adminContent = content.adminContent;
let classContent = content.classContent;
let instructorContent = content.instructorContent;
let studentContent = content.studentContent;
let courseContent = content.courseContent;
let sectionContent = content.sectionContent;
let enrollmentContent = content.enrollmentContent;
let equipmentContent = content.equipmentContent;
let allotmentContent = content.allotmentContent;


const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'',
    database:'serverdb',
    port: '3306'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

 

//if there are tables in place already then reset them
conn.query(`Drop Table Allotment,CourseEquipment,Enrollment,Section,Course,Student,Instructor,AdminStaff,Classroom,Department`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Tables Dropped');
                }
            )

//init the tables


conn.query(`CREATE TABLE Department(
    deptName varchar(255),
    instructorsAssiged int,
    studentsEnrolled int,
    PRIMARY KEY (deptName)
)
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('department Tables Created');
            })

conn.query(`CREATE TABLE Classroom(
    classroomNo int NOT NULL AUTO_INCREMENT,
    classroomQuantity int,
    coursesTaught int,
    PRIMARY KEY (classroomNo)
)`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('classroom Tables Created');
            })

            conn.query(`CREATE TABLE AdminStaff(
                adminNo int NOT NULL AUTO_INCREMENT,
                position varchar(255),
                startDate DATE,
                deptName varchar(255),
                fName varchar(255),
                lName varchar(255),
                salary int,
                PRIMARY KEY (adminNo),
                FOREIGN KEY (deptName) REFERENCES Department(deptName)
                ON DELETE SET NULL ON UPDATE CASCADE  
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('adminstaff Tables Created');
            })

            conn.query(`CREATE TABLE Instructor(
                instructorNo int NOT NULL AUTO_INCREMENT,
                deptName varchar(255),
                coursesTaught int,
                fName varchar(255),
                lName varchar(255),
                salary int,
                PRIMARY KEY (instructorNo),
                FOREIGN KEY (deptName) REFERENCES Department(deptName)
                ON DELETE SET NULL ON UPDATE CASCADE  
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('instructor  Tables Created');
            })

            conn.query(`CREATE TABLE Student(
                studentNo int NOT NULL AUTO_INCREMENT,
                fName varchar(255),
                lName varchar(255),
                studentAge int,
                studentYear int,
                studentAverage int,
                creditsToDate int,
                numberOfClasses int,
                classroomNo int,
                instructorNo int,
                PRIMARY KEY (studentNo),
                FOREIGN KEY (classroomNo) REFERENCES Classroom(classroomNo)
                ON DELETE SET NULL ON UPDATE CASCADE,
                FOREIGN KEY (instructorNo) REFERENCES Instructor(instructorNo)
                ON DELETE SET NULL ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('student Tables Created');
            })

            conn.query(`CREATE TABLE Course(
                courseID int NOT NULL AUTO_INCREMENT,
                courseName varchar(255),
                courseClassroom int,
                deptName varchar(255),
                courseYear int,
                instructorNo int,
                PRIMARY KEY (courseID),
                FOREIGN KEY (courseClassroom) REFERENCES Classroom(classroomNo)
                ON DELETE SET NULL ON UPDATE CASCADE,
                FOREIGN KEY (deptName) REFERENCES Department(deptName)
                ON DELETE SET NULL ON UPDATE CASCADE,
                FOREIGN KEY (instructorNo) REFERENCES Instructor(instructorNo)
                ON DELETE SET NULL ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('course Tables Created');
            })

            conn.query(`CREATE TABLE Section(
                sectionID int NOT NULL AUTO_INCREMENT,
                courseID int,
                startDate DATE,
                endDate DATE,
                startTime TIME,
                endTime TIME,
                PRIMARY KEY (sectionID),
                FOREIGN KEY (courseID) REFERENCES Course(courseID)
                ON DELETE CASCADE ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('section Tables Created');
            })

            conn.query(`CREATE TABLE Enrollment(
                studentNo int,
                sectionID int,
                dateEnrolled DATE,
            
                PRIMARY KEY (studentNo,sectionID),
                FOREIGN KEY (studentNo) REFERENCES Student(studentNo)
                ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (sectionID) REFERENCES Section(sectionID)
                ON DELETE CASCADE ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('enrollment Tables Created');
            })

            conn.query(`CREATE TABLE CourseEquipment(
                deviceNo int NOT NULL AUTO_INCREMENT,
                deviceName varchar(255),
                courseAssigned int,
                studentNo int,
                dueDate DATE,
                PRIMARY KEY (deviceNo),
                FOREIGN KEY (courseAssigned) REFERENCES Course(courseID)
                ON DELETE SET NULL ON UPDATE CASCADE,
                FOREIGN KEY (studentNo) REFERENCES Student(studentNo)
                ON DELETE SET NULL ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('equipment Tables Created');
            })

            conn.query(`CREATE TABLE Allotment(
                instructorNo int,
                classroomNo int,
                dateAssigned DATE,
                timeAssigned TIME,
                PRIMARY KEY (instructorNo,classroomNo),
                FOREIGN KEY (instructorNo) REFERENCES Instructor(instructorNo)
                ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (classroomNo) REFERENCES Classroom(classroomNo)
                ON DELETE CASCADE ON UPDATE CASCADE
            )`
            
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('allotment Tables Created');
            })



//populate the tables

conn.query( deptContent
    , (err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log(' dept data inserted');
    })

conn.query( adminContent
    , (err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('admin data inserted');
    })         
conn.query( classContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('classroom data inserted');
    })
conn.query( instructorContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('instructor data inserted');
    })
    
    
    
    conn.query( studentContent
        ,(err,rows,fields) => {
            if (err)
                console.log(err);
            else
                console.log('student data inserted');
        })
        

    
conn.query( courseContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('course data inserted');
    })
conn.query( sectionContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('section data inserted');
    })
conn.query( enrollmentContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('enrollments data inserted');
    })
conn.query( equipmentContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('equipment data inserted');
    })
conn.query( allotmentContent
    ,(err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('allotment data inserted');
    })


conn.end();