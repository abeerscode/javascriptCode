const orders = [
  {
    customer: "Ratul",
    items: ["Mouse", "Keyboard"],
    total: 2500,
    delivered: true,
  },

  {
    customer: "Hasan",
    items: ["Monitor"],
    total: 12000,
    delivered: false,
  },

  {
    customer: "Abeer",
    items: ["Laptop", "Mouse Pad"],
    total: 55000,
    delivered: true,
  },
];

// Print the second customer’s name.

console.log(orders[1].customer);

// Print the first item of Abeer.

console.log(orders[0].items[0]);

// Using loop, print ALL customer names.

for (let i = 0; i < orders.length; i++) {
  console.log("Customer:", orders[i].customer);
}

// Using nested loop, print all items.

for (let i = 0; i < orders.length; i++) {
  for (let j = 0; j < orders[i].items.length; j++) {
    console.log(orders[i].items[j]);
  }
}

// Print only customers whose order is delivered.

for (let i = 0; i < orders.length; i++) {
  if (orders[i].delivered == true) {
    console.log(orders[i].customer);
  } else {
    console.log("Invalid");
  }
}
