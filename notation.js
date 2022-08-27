const student = {
    name: 'kholil uddin',
    age: 15,
    marks: {
        math: 60,
        bangla: 80,
        english: 70,
        biology: 90
    }
}
const math = student.marks.math;
const biology = student['marks']['biology'];
console.log(biology);

const subject = 'bangla';
const subjectMark = student.marks[subject];
console.log(subjectMark)