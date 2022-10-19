let arr = [1,2,3,4,5];
// let a = arr[0];
// let b = arr[1];
let [a,b,c] = arr;
console.log("Gia tri a: "+a+" - b: "+b);
const student = {
    studentId: 'SV001',
    studentName: 'Nguyen Van A',
    age: 20,
    address: 'Ha Noi'
}
// let studentId = student['studentId'];
// let studentName = student['studentName'];
let {studentId,studentName} = student;
console.log("studentId: "+studentId+" - studentName: "+studentName);