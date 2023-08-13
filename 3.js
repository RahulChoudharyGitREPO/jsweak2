
const students = [
    { name: "Mithun", marks: 85 },
    { name: "Prabhir", marks: 92 },
    { name: "Alka", marks: 78 },
    { name: "Shivam", marks: 95 },
    { name: "Farman", marks: 88 }
];

function checkResults(studentList) {
    studentList.forEach(student => {
        if (student.marks > 90) {
            console.log(`Congratulations ${student.name}! You have cleared the exam.`);
        }
    });
}

checkResults(students);
