const Todo = require("./todo-list");
const todo = new Todo();

todo.add("Todo-1");
todo.add("Todo-2");
todo.add("Todo-3");
todo.add("Hello again i am todo-2");
todo.remove(0);
todo.update(1, "i am updated todo");
console.log(`updated todo is : ${todo.get(1)}`);
todo.clear();
console.log(`Todo-list: ${todo.getAll()}`);
