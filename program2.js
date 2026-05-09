const users = [
  {
    name: "Ratul",
    isActive: true,
    orders: [
      { amount: 100, status: "complete" },
      { amount: 50, status: "pending" },
    ],
  },
  {
    name: "Hasan",
    isActive: false,
    orders: [{ amount: 200, status: "complete" }],
  },
  {
    name: "Abeer",
    isActive: true,
    orders: [
      { amount: 300, status: "complete" },
      { amount: 100, status: "cancelled" },
    ],
  },
];

for (let i = 0; i < users.length; i++) {
  let user = users[i];

  if (user.isActive) {
    let totalAmount = 0;

    for (let j = 0; j < user.orders.length; j++) {
      let order = user.orders[j];

      if (order.status === "complete") {
        totalAmount += order.amount;
      }
    }

    console.log(user.name + " → Total: " + totalAmount);
  }
}
