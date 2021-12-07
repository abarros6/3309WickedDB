--given student name find their info
SELECT* 
FROM Student
WHERE fName=//given AND lName= //given;

--find the lowest salaried staff from each department
SELECT i.deptName, i.instructorNo, min(i.salary) as salary, i.fName, i.lName
FROM Department as d , Instructor as i
GROUP BY i.deptName;

--given a student and a course find all students in the same section of that course with them
SELECT s.fName, s.lName FROM Enrollment e, Student s, Course c 
  WHERE e.sectionID= (SELECT DISTINCT e.sectionID FROM Enrollment e, Section s, Course c, Student st
    WHERE st.studentNo = e.studentNo AND s.sectionID = e.sectionID AND s.courseID = //given AND st.fName= //given AND st.lName=//given) AND e.studentNo = s.studentNo AND c.courseID = //given};

--add a new student to the student relation
INSERT INTO Student
(fName ,lName ,studentAge, studentYear ,creditsToDate ,numberOfClasses )
VALUES (//allgiven);
--note: the interface should have a selector list for calssroom number and instructor number to make sure they are valid

--increase the slaries of all instructors by a selected percest
UPDATE Instructor
SET salary = salary*1. //given%
WHERE deptName = given;

--look up a student name and find all the courses they are taking
--note: this function is highly ineficient
SELECT t.courseID, e.startTime, e.endTime
FROM Enrollment e, Student s, Section t
WHERE s.fName = //given AND s.lName = //given AND s.studentNo = e.studentNo AND e.sectionID = t.sectionID;










