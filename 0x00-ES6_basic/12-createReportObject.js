export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Use spread syntax to include all employees from the provided list
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Count the number of departments
    },
  };
}
