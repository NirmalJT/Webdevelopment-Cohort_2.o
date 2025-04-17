const fs = require("fs");
console.log(__dirname);

fs.readFile("read.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
let sum = 0;
for (let i = 0; i <= 10000000000; i++) {
  sum = sum + i;
}
console.log(sum);
