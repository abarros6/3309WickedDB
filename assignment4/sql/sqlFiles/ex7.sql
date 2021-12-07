CREATE VIEW HomeroomStudents AS 
SELECT studentNo,fName,lName,studentYear
FROM Student
WHERE instructorNo = 8;

CREATE VIEW InstructorsInDept AS
SELECT instructorNo,classroomNo,fName,lName
FROM Instructor
WHERE deptName = 'Math';

CREATE VIEW StudentClassTimes AS
SELECT t.courseID, t.startTime, t.endTime
FROM Timing t, Schedule s
WHERE t.scheduledToStudent = s.scheduledToStudent AND s.studentNo = 1982;
