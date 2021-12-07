//hi there
const express = require('express');
//const Connection = require('mysql2/typings/mysql/lib/Connection');
const path = require('path');

const filePath = path.join(__dirname, '/DBconnection.js')
//this object can be used to create new db connections 
const newConnection = require(filePath);

const wicked = express();

// functionality1
wicked.get('/functionality1', (req, res) => {
  let conn = newConnection();
  conn.connect();
  let studentlist
  conn.query(`select * from Student where fName='${req.query.fname}' lName='${req.query.lname}';`, (err,rows,fields) => {
    if (err)
      res.send('ERROR: ' + err)
    else {
      studentlist = rows
      let content = '';

      for (item of studentlist)
      {
          content += '<div>'
          content += (item.fName + " " + item.lName + " : " + item.studentAge + "years old" + " ; " + item.studentYear + " : " + item.studentAverage + "%" + " : " + creditsToDate + "credits to date. " + " : " + item.numberOfClasses + "number of classes" + " : " + "classroom " + classroomNo + " : " + "instructor" + instructorNo) ;
          content += '</div>'
          content += '\n';
          content += '\n';
      }
      content += '<br/>';

      res.send(content);
    }

  })

  conn.end();
})
// -----

// functionality2
wicked.get('/functionality2', (req, res) => {
  let conn = newConnection();
  conn.connect();
  conn.query(`SELECT i.deptName, i.instructorNo, min(i.salary) as salary, i.fName, i.lName
  FROM Department as d , Instructor as i
  GROUP BY i.deptName;`, (err,rows,fields) => {
    if (err)
    res.send('ERROR: ' + err)
    else
    {
      let userList = rows;
      let content = '';
      for (u of userList)
      {
        content += '<div>'
        content += u.fName + ' ' + u.lName + ' : $' + u.salary + ' Department: ' + u.deptName
        content += '</div>'
        content += '<br>'
      }
      content += '</div>';
      content += `<a href= '/'>Quit</a>`;
      res.send(content);
    }

  })

  conn.end();
})
// -----

// functionality3
wicked.get('/functionality3', (req, res) => {
  let conn = newConnection();
  conn.connect();

  conn.query(`SELECT s.fName, s.lName FROM Enrollment e, Student s 
  WHERE e.sectionID= (SELECT e.sectionID FROM Enrollment e, Section s 
    WHERE '${req.query.studentnum}' given AND '${req.query.courseID}') And e.studentNo = s.studentNo ;`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('students found');
                })



  conn.end();
})
// -----

// functionality4
wicked.get('/functionality4', (req, res) => {
  let conn = newConnection();
  conn.connect();
  
  conn.query(`INSERT INTO Student (fName ,lName ,studentAge, studentYear , creditsToDate, numberOfClasses) VALUES ( '${req.query.studentFName}', '${req.query.studentLName}', '${req.query.studentAge}', '${req.query.studentYear}', '${req.query.studentCredits}', '${req.query.studentClasses}');` , (err,rows,fields) => {

    if (err) { 

      res.send('ERROR: ' +err)

    } else {

      let content = '';

      content += '<div>';
        content += '<h3>Student '+ req.query.studentFName + ' ' + req.query.studentLName + ' is now enrolled!</h3>';
      content += '</div>';

      res.send(content);
    }
  })

  conn.end();
})
// -----

// functionality5
wicked.get('/functionality5', (req, res) => {
  let conn = newConnection();
  conn.connect();

  conn.query(`UPDATE Instructor
              SET salary = salary*1.`+req.query.raise+` 
              WHERE deptName = '`+req.query.dept+`';`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('salaries updated');
                }
            )


  conn.end();
})
// -----

// functionality6
wicked.get('/functionality6', (req, res) => {
  let conn = newConnection();
  conn.connect();

  conn.query(`SELECT t.courseID, t.startTime, t.endTime
  FROM Enrollment e, Student s, Section t
  WHERE s.fName = '${req.query.studentFName}' AND s.lName = '${req.query.studentLName}' AND s.studentNo = e.studentNo AND e.sectionID = t.sectionID;` , (err,rows,fields) => {

    if (err) { 

      res.send('ERROR: ' +err)

    } else {
      let content = '<div>';

      for (r of rows) {
        content += '<div>';
        content += 'Course Number: ' + r.courseID + ' Start Time: ' + r.startTime + ' Start Time: ' + r.endTime;
        content += '</div>';
        content += '\n';
      }
      content += '</div>';
      content += `<a href= '/'>Quit</a>`;
      res.send(content);
    }
  })
  
  conn.end();
})
// -----

wicked.use(express.urlencoded({
  extended: true
}))

wicked.get('/', (req, res) => {
  res.sendFile('/frontend/index.html', { root: __dirname })
})

wicked.get('/page1', (req, res) => {
  res.sendFile('/frontend/page1.html', { root: __dirname })
})

wicked.get('/page2', (req, res) => {
  res.sendFile('/frontend/page2.html', { root: __dirname })
})

wicked.get('/page3', (req, res) => {
  res.sendFile('/frontend/page3.html', { root: __dirname })
})

wicked.get('/page4', (req, res) => {
  res.sendFile('/frontend/page4.html', { root: __dirname })
})

wicked.get('/page5', (req, res) => {
  res.sendFile('/frontend/page5.html', { root: __dirname })
})

wicked.get('/page6', (req, res) => {
  res.sendFile('/frontend/page6.html', { root: __dirname })
})

wicked.use(express.static('frontend'))

// make the wicked listen to port 80 as specified in the project instructions
// part 6 of the development section adresses this 

wicked.listen(80);