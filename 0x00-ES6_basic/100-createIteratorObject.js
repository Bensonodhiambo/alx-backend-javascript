export default function createIteratorObject(report) {
  const employees = []; // Create an array to hold all employees

  // Collect all employees from each department
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]); // Spread the employees into the array
    }
  }

  // Create a generator function to yield each employee
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee; // Yield each employee
    }
  }

  return employeeIterator(); // Return the generator iterator
}
