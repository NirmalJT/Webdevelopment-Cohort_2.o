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

function calculateTotalSpentByCategory(transactions) {
  let Output=[{}]
  transactions.map((Element)=>{

  })
}

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

calculateTotalSpentByCategory(transactions);
