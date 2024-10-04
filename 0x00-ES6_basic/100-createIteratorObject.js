export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from each department
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]); // Spread the employees into the array
  }

  // Create a generator function to yield each employee
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee;
    }
  }

  return employeeIterator(); // Return the generator
}
