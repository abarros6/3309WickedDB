--this is not actualy used
INSERT INTO Department
VALUES ('Math', 11, 2700),('Science', 11, 2400),('Social_Science', 11, 1700),('English',11, 3000),('French', 11, 1400),('Physical_Activities', 11, 300);



INSERT INTO AdminStaff
( adminNo,position,startDate,deptName,salary)
VALUES (1, 'Principal', 20190503,null,10000),(2, 'Vice_Principal', 20200410,null,8000),(3, 'Vice_Principal', 20180721,null,8000),
(4, 'Vice_Principal', 20210301,null,8000),(5, 'Secretary', 20191122,null,7000),(6, 'Secretary', 20181030,null,7000),(7, 'Secretary', 20170224,null,7000),
(8, 'Secretary', 20210526,null,7000),(9, 'Science_Head', 20160521,'Science',8000),(10, 'Math_Head', 20190423,'Math',8000),
(11, 'Social_Science_Head', 20201109,'Social_Science',8000),(12, 'Physical_Activities_head', 20201009,'Physical_Activities',8000),(13, 'French_Head', 20200909,'French',8000),
(14, 'English_Head', 20191109,'English',8000),(15, 'Custodial_Technicial', 20191009,null,4000),(16, 'Custodial_Technicial', 20190909,null,4000),
(17, 'Custodial_Technicial', 20180422,null,4000),(18, 'Custodial_Technicial', 20170321,null,4000),(19, 'Custodial_Technicial', 20180220,null,4000),
(20, 'Custodial_Technicial', 20210825,null,4000);

INSERT INTO Classroom
(classroomQuantity,coursesTaught)
VALUES(5,3),(5,2),(5,4),(5,5),(5,4),(5,3),(5,3),(5,1),(5,2),(5,3),
(3,4),(3,4),(3,4),(3,4),(3,4),(3,4),(3,4),(3,4),(3,4),(3,4),
(2,3),(2,3),(2,3),(2,3),(2,3),(2,3),(2,3),(2,3),(2,3),(2,3);

INSERT INTO Instructor
(classroomNo,deptName,salary)
VALUES (1,'Math',5500),(2,'Math',5500),(3,'Math',5500),(4,'Math',5500),(5,'Math',5500),
(6,'Science',5400),(7,'Science',5400),(8,'Science',5400),(9,'Science',5400),(10,'Science',5400),
(11,'Social_Science',5600),(12,'Social_Science',5600),
(13,'English',5200),(14,'English',5200),(15,'English',5200),
(16,'French',5300),(17,'French',5300),(18,'French',5300),
(19,'Physical_Activities',5000);

INSERT INTO Student 
(fName ,lName ,studentAge, studentYear ,studentAverage ,creditsToDate ,numberOfClasses ,classroomNo ,instructorNo )
VALUES('Lucca', 'TJ', 14, 1, 46, 1, 2, 1, 1),
('Lochlan', 'Jarno', 15, 2, 71, 14, 5, 2, 2),
('Bobby', 'Dante', 16, 3, 45, 20, 3, 3, 3),
('Jez', 'Ezra', 17, 4, 82, 25, 4, 4, 4)


