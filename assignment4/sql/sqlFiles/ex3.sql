INSERT INTO Student 
VALUES (2001, 'Jaden', 'Smith', 17, 3, 84, 4, 8, 313, 902);

INSERT INTO Allotment
VALUES (SELECT i.instructorNo, c.courseClassroom, e.dateEnrolled, t.startTime
        FROM Instructor i, Course c, Enrollment e, Timing t
        WHERE c.courseClassroom = i.classroomNo AND c.courseID = e.courseID AND c.courseID = t.courseID);

INSERT INTO Enrollment (
    SELECT s.studentNo, c.courseID t.startDate 
    FROM Student s, Course c, Timing t 
    WHERE s.studentNo < 10 AND t.scheduledToStudent < 10);
