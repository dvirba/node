const topNStudentsAttendees = (students, attendees, N) => {
  var attendRank = [];

  for (var studentNum = 0; studentNum < students.length; studentNum++) {
    attendRank[studentNum] = [];
    attendRank[studentNum][0] = 0;
    attendRank[studentNum][1] = students[studentNum];

    attendees.forEach((course) => {
      found = false;
      course.forEach((attendee) => {
        if (!found && students[studentNum] == attendee) {
          attendRank[studentNum][0]++;
          found = true;
        }
      });
    });
  }

  attendRank.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  var result = [];

  for (var i = 0; i < N; i++) {
    result[i] = attendRank[i][1];
  }

  return result;
};

let students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];
let attendees = [
  ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'],
  ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
  ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'],
  ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan'],
];

var N = 4;
topNStudentsAttendees(students, attendees, N).forEach((studnet) => {
  console.log(studnet);
});
