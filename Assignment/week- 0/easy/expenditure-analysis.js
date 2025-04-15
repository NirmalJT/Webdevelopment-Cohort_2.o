/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 50,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 30,
    category: "Food",
    itemName: "Pasta",
  },
  {
    id: 5,
    timestamp: 1656422400000,
    price: 100,
    category: "Clothing",
    itemName: "Jacket",
  },
];

function calculateTotalSpentByCategory(transactions) {
  let categoryTotal = {};

  for (let transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;

    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }
  }

  let result = [];
  for (let category in categoryTotal) {
    result.push({ category: category, totalSpent: categoryTotal[category] });
  }

  return result;
}

console.log(calculateTotalSpentByCategory(transactions));
