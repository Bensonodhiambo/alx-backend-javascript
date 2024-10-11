// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'New York',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Create and render a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append each student's information to the table
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);
