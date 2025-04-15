const Calculator = require("./calculator");

const calculator = new Calculator();

calculator.add(3);
calculator.add(2);
calculator.multiply(2);
calculator.divide(2);
calculator.subtract(3);
calculator.calculate(1 * 2 * 3 - 1);
calculator.clear();
console.log(calculator.getResult());
