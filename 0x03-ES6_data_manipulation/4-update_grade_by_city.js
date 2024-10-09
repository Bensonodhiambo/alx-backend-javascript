export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city) // Filter students by city
    .map(student => {
      // Find the corresponding grade for the student
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      // If a grade is found, use it; otherwise, set it to 'N/A'
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
