import json


def convertStudent(data):
    f = open(data)
    text = json.load(f)
    tuples = text["Student"]
    r = open('StudentTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('StudentTuples.txt', "a")

    for x in tuples:
        r.write(',' + str((x['studentNo'], x['fName'], x['lName'], x['studentAge'], x['studentYear'],
                x['studentAverage'], x['creditsToDate'], x['numberOfClasses'], x['classroomNo'], x['instructorNo'])))


def convertClassroom(data):
    f = open(data)
    text = json.load(f)
    tuples = text["classroom"]
    r = open('ClassroomTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('ClassroomTuples.txt', "a")

    for x in tuples:
        r.write(',' + str((x['classId'], x['classroomNo'],
                x['homeInstructor'], x['classroomQuantity'])))


def convertCourseEquipment(data):
    f = open(data)
    text = json.load(f)
    tuples = text["CoruseEquipment"]
    r = open('CourseEquipmentTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('CourseEquipmentTuples.txt', "a")

    for x in tuples:
        r.write(
            ',' + str((x['deviceNo'], x['deviceName'], x['classAssigned'])))


def convertInstructor(data):
    f = open(data)
    text = json.load(f)
    tuples = text["instructor"]
    r = open('InstructorTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('InstructorTuples.txt', "a")

    for x in tuples:
        r.write(',' + str((x['InstructorId'], x['homeClassroom'])))


def convertAdminStaff(data):
    f = open(data)
    text = json.load(f)
    tuples = text["adminstaff"]
    r = open('AdminStaffTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('AdminStaffTuples.txt', "a")

    for x in tuples:
        r.write(',' + str((x['AdminNo'], x['position'], x['startDate'])))


def convertDepartment(data):
    f = open(data)
    text = json.load(f)
    tuples = text["department"]
    r = open('DepartmentTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('DepartmentTuples.txt', "a")

    for x in tuples:
        r.write(
            ',' + str((x['deptName'], x['instructorsAssigned'], x['studentsEnrolled'])))

# edit the three functions below this point


def convertStaff(data):
    f = open(data)
    text = json.load(f)
    tuples = text["staff"]
    r = open('StaffTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('StaffTuples.txt', "a")

    for x in tuples:
        r.write(
            ',' + str((x['staffNo'], x['deptAssigned'], x['StaffName'])))


def convertSchedule(data):
    f = open(data)
    text = json.load(f)
    tuples = text["schedule"]
    r = open('ScheduleTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('ScheduleTuples.txt', "a")

    for x in tuples:
        r.write(
            ',' + str((x['deptName'], x['instructorsAssigned'], x['studentsEnrolled'])))


def convertCourse(data):
    f = open(data)
    text = json.load(f)
    tuples = text["course"]
    r = open('CourseTuples.txt', "w")
    r.write(" ")
    r.close()
    r = open('CourseTuples.txt', "a")

    for x in tuples:
        r.write(
            ',' + str((x['courseID'], x['courseName'], x['courseClassroom'], x['courseDept'], x['courseYear'])))


convertStudent('../Students/Student.json')

convertInstructor('../Instructor/instructor.json')

convertCourseEquipment('../CourseEquipment/CoruseEquipment.json')

convertClassroom('../Classroom/classroom.json')

convertDepartment('../Department/department.json')

convertAdminStaff('../AdminStaff/adminstaff.json')

# edit below this point

convertStaff('../Staff/staff.json')

# convertSchedule('../Schedule/Schedule.json')

convertCourse('../Course/course.json')
