SELECT * FROM Student, Instructor,Classroom,Allotment
WHERE classroomNo > 300;

SELECT * FROM Student
WHERE studentAverage < 50;

SELECT fName, lName FROM AdminStaff, Instructor
WHERE salary > ALL(SELECT salary 
                    FROM AdminStaff, Instructor);

SELECT creditsToDate, studentYear FROM Student;

SELECT COUNT(studentNo), Student AS NumberOfStudents FROM Student;

SELECT * FROM Student
ORDER BY studentYear DESC;

SELECT COUNT(studentNo), coursesEnrolled
FROM Schedule
GROUP BY coursesEnrolled;



