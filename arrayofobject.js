/*
========================================
NORMAL ARRAY
========================================
*/

const fruits = ["Apple", "Banana", "Mango"];

// Access without loop
console.log("=== ARRAY WITHOUT LOOP ===");

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// Access with loop
console.log("=== ARRAY WITH LOOP ===");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*
========================================
ARRAY OF OBJECTS
========================================
*/

const users = [
  {
    name: "Ratul",
    age: 20,
    role: "Developer",
  },
  {
    name: "Hasan",
    age: 22,
    role: "Designer",
  },
  {
    name: "Abeer",
    age: 19,
    role: "Manager",
  },
];

// Access complete object
console.log("=== COMPLETE OBJECT ===");

console.log(users[0]);

// Access individual values without loop
console.log("=== OBJECT VALUES WITHOUT LOOP ===");

console.log(users[0].name);
console.log(users[0].age);
console.log(users[0].role);

console.log(users[1].name);
console.log(users[2].role);

// Access with loop
console.log("=== OBJECT VALUES WITH LOOP ===");

for (let i = 0; i < users.length; i++) {
  console.log("------ USER ------");

  console.log("Name:", users[i].name);
  console.log("Age:", users[i].age);
  console.log("Role:", users[i].role);
}

/*
========================================
NESTED ARRAY INSIDE OBJECT
========================================
*/

const company = {
  companyName: "Notifyer",

  employees: [
    {
      name: "Ratul",
      skills: ["JS", "C++", "Python"],
    },

    {
      name: "Hasan",
      skills: ["UI Design", "Figma"],
    },
  ],
};

// Access nested data
console.log("=== NESTED DATA ===");

console.log(company.companyName);

console.log(company.employees[0].name);

console.log(company.employees[0].skills[0]);

console.log(company.employees[1].skills[1]);

// Nested loop
console.log("=== NESTED LOOP ===");

for (let i = 0; i < company.employees.length; i++) {
  console.log("Employee:", company.employees[i].name);

  for (let j = 0; j < company.employees[i].skills.length; j++) {
    console.log("Skill:", company.employees[i].skills[j]);
  }
}
