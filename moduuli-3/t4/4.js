'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.getElementById('target');

for (const student of students) {
  const element = document.createElement('option');
  //add value to option element and use it to store the student id
  element.value = student.id;
  //add text to option element
  element.textContent = student.name;
  //append option element to select element
  targetElement.appendChild(element);
}