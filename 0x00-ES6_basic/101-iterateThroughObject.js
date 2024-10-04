export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Create an array to hold employee names

  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Push each employee name into the array
  }

  return employeeNames.join(' | '); // Join the names with ' | ' separator
}
