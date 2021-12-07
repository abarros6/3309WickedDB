let Names = require('./names.js');
let names = Names.names;
//get functions used for multiple tables

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getName() {
    return names[getRndInteger(0, names.length - 1)];
}

let deptCounter=0
function getDept(){
    deptCounter++;
switch (deptCounter) {
    case 1:
        return 'Math';
    case 2: 
        return 'Science';
    case 3: 
        return 'Social_Science';
    case 4:
        return 'English';
    case 5:
        return 'French';
    case 6:
        deptCounter = 0;
        return 'Physical_Activities';
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//READ ME//
/*
this program generates insert statements for each table in the form of variables that can be sent to conection.query
eg

 connection.query( deptContent
        ,(error,rows,feilds)=>{
            console.log(error);

        }
    )

the variables generated are:
deptContent
adminContent
classContent
instructorContent
studentContent
courseContent
sectionContent
enrollmentContent
equipmentContent
allotmentContent

Iv also made a drop and create for all tables to reset them when needed(work in progress)

copy paste this into the servers index.js or reference it remotely
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



//dept and adminstaff are short enougth to do manualy
let deptContent = `INSERT INTO Department VALUES ('Math', 11, 2700),('Science', 11, 2400),('Social_Science', 11, 1700),('English',11, 3000),('French', 11, 1400),('Physical_Activities', 11, 300);`;

let adminContent =`INSERT INTO AdminStaff
( adminNo,position,startDate,deptName,salary)
VALUES (1, 'Principal', '2019-05-03',null,10000),(2, 'Vice_Principal', '2020-04-10',null,8000),(3, 'Vice_Principal', '2018-07-21',null,8000),
(4, 'Vice_Principal', '2021-03-01',null,8000),(5, 'Secretary', '2019-11-22',null,7000),(6, 'Secretary', '2018-10-30',null,7000),(7, 'Secretary', '2017-02-24',null,7000),
(8, 'Secretary', '2021-05-26',null,7000),(9, 'Science_Head', '2016-05-21','Science',8000),(10, 'Math_Head', '2019-04-23','Math',8000),
(11, 'Social_Science_Head', '2020-11-09','Social_Science',8000),(12, 'Physical_Activities_head', '2020-10-09','Physical_Activities',8000),(13, 'French_Head', '2020-09-09','French',8000),
(14, 'English_Head', '2019-11-09','English',8000),(15, 'Custodial_Technicial', '2019-10-09',null,4000),(16, 'Custodial_Technicial', '2019-09-09',null,4000),
(17, 'Custodial_Technicial', '2018-04-22',null,4000),(18, 'Custodial_Technicial', '2017-03-21',null,4000),(19, 'Custodial_Technicial', '2018-02-20',null,4000),
(20, 'Custodial_Technicial', '2021-08-25',null,4000);`; 

//populate calssrooms, classroomNo ranges from 1-51
    let classContent = 'INSERT INTO Classroom (classroomQuantity,coursesTaught) VALUES ';
    for(i=0;i<50;i++){ 
         classContent+='('+getRndInteger(1,10) + ',' + getRndInteger(1,5) +'),';
    }
    classContent+='('+getRndInteger(1,10) + ',' + getRndInteger(1,5) +');';

    
//populate instructors, ranges from 1-51
    let instructorContent = 'INSERT INTO Instructor (deptName,coursesTaught,fName,lName,salary) VALUES ';
    for(i=0;i<50;i++){ 
        instructorContent+='("' + getDept() +'",' + getRndInteger(1,5)+ ',"' + getName()+'","' +getName()+'",' +getRndInteger(5000,6000)+'),';
   }
   instructorContent+='("'+ getDept() +'",' + getRndInteger(1,5)+ ',"' + getName()+'","' +getName()+'",' +getRndInteger(5000,6000)+');';

//populate students there are 1020 randomly generated students, 20 for each instructor/classroom
let studentContent = 'INSERT INTO Student (fName ,lName ,studentAge, studentYear ,studentAverage ,creditsToDate ,numberOfClasses ,classroomNo ,instructorNo )VALUES ';
for(i=1;i<52;i++){ 
    let a = getRndInteger(1,4);
    for(j=0;j<20;j++){    
    studentContent+='("'+getName()+'","' +getName()+'",' +(a+14)+','+a+','+getRndInteger(45,99)+ ',' + (a*getRndInteger(5,8))+','+ getRndInteger(5,8)+','+i+','+(52-i)+ '),';
    }
}
studentContent+='("'+getName()+'","' +getName()+'",' +18+','+4+','+getRndInteger(45,99)+ ',' + (4*getRndInteger(5,8))+','+ getRndInteger(5,8)+','+51+','+1+ ');';

//populate courses range from 1-49
let courseContent= 'INSERT INTO Course (courseName,courseClassroom ,deptName ,courseYear ,instructorNo ) VALUES ';
for (i=1;i<9;i++)
{
    courseContent+='("'+'Math'+i+'",'+getRndInteger(1,51)+',"'+'Math'+'",'+i+','+ getRndInteger(1,51)+'),';
}
for (i=1;i<9;i++)
{
    courseContent+='("'+'Science'+i+'",'+getRndInteger(1,51)+',"'+'Science'+'",'+i+','+ getRndInteger(1,51)+'),';
}
for (i=1;i<9;i++)
{
    courseContent+='("'+'Social_Science'+i+'",'+getRndInteger(1,51)+',"'+'Social_Science'+'",'+i+','+ getRndInteger(1,51)+'),';
}
for (i=1;i<9;i++)
{
    courseContent+='("'+'English'+i+'",'+getRndInteger(1,51)+',"'+'English'+'",'+i+','+ getRndInteger(1,51)+'),';
}
for (i=1;i<9;i++)
{
    courseContent+='("'+'French'+i+'",'+getRndInteger(1,51)+',"'+'French'+'",'+i+','+ getRndInteger(1,51)+'),';
}
for (i=1;i<9;i++)
{
    courseContent+='("'+'Physical_Activities'+i+'",'+getRndInteger(1,51)+',"'+'Physical_Activities'+'",'+i+','+ getRndInteger(1,51)+'),';
}
courseContent+='("'+'Math'+9+'",'+getRndInteger(1,51)+',"'+'Math'+'",'+4+','+ getRndInteger(1,51)+');';

//populate sections range from 1-99, 2 sections for each course and 3 for the last course
let sectionContent= 'INSERT INTO Section (courseID,startDate,endDate,startTime,endTime) VALUES ';
for (i=1;i<50;i++)
{
    sectionContent+='('+i+',"'+ '2021-09-05'+'","'+'2022-06-20'+'","'+ '11:00:00' +'","'+'13:00:00' + '"),';
    sectionContent+='('+i+',"'+ '2021-09-05'+'","'+'2022-06-20'+'","'+ '13:00:00' +'","'+'15:00:00' + '"),';
}
sectionContent+='('+49+',"'+ '2021-09-05'+'","'+'2022-06-20'+'","'+ '17:00:00' +'","'+'19:00:00' + '");';

//populate enrollments, 5 for each student, range from 1-5100
let enrollmentContent='INSERT INTO Enrollment (studentNo,sectionID,dateEnrolled) VALUES ';
for (i=1;i<1020;i++)
{   
    let sn=getRndInteger(1,95);
    for (j=0;j<5;j++)
    {
    enrollmentContent+= '('+i+','+(sn+j)+',"'+'2021-09-05'+'"),';
    }
}
enrollmentContent+= '('+1020+','+1+',"'+'2021-09-05'+'"),';
enrollmentContent+= '('+1020+','+2+',"'+'2021-09-05'+'"),';
enrollmentContent+= '('+1020+','+3+',"'+'2021-09-05'+'"),';
enrollmentContent+= '('+1020+','+4+',"'+'2021-09-05'+'"),';
enrollmentContent+= '('+1020+','+5+',"'+'2021-09-05'+'");';

//populate course equipment ranges from 1=501
function getDeviceName() {
    let brands = ["Apple", "Samsung", "Chromebook", "Microsoft"];
    let devicetypes = ["Phone", "Small_Tablet", "Large_Tablet", "PC", "Laptop"];
    
    return (brands[getRndInteger(0,3)] + "-" + devicetypes[getRndInteger(0,4)])
}

let equipmentContent= 'INSERT INTO CourseEquipment (deviceName,courseAssigned,dueDate) VALUES '; 

for (i=0;i<500;i++)
{ 
    equipmentContent+='("'+getDeviceName()+'",'+getRndInteger(1,49) +',"'+'2022-06-18'+'"),';
}
equipmentContent+='("'+getDeviceName()+'",'+getRndInteger(1,49) +',"'+'2022-06-18'+'");';

//populate allotment
let allotmentContent= 'INSERT INTO Allotment(instructorNo,classroomNo,dateAssigned,timeAssigned) VALUES '; 
for(i=1;i<51;i++){ 

    allotmentContent+='('+i+','+getRndInteger(1,51)+',"'+'2021-09-05'+'","'+'11:00:00'+'"),';
}
allotmentContent+='('+51+','+getRndInteger(1,51)+',"'+'2021-09-05'+'","'+'11:00:00'+'");';

exports.deptContent = deptContent;
exports.adminContent = adminContent;
exports.classContent = classContent;
exports.instructorContent = instructorContent;
exports.studentContent = studentContent;
exports.courseContent = courseContent;
exports.sectionContent = sectionContent;
exports.enrollmentContent = enrollmentContent;
exports.equipmentContent = equipmentContent;
exports.allotmentContent = allotmentContent;