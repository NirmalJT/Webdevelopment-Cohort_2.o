const fs = require("fs");


fs.writeFile("write.txt", `i am written text using fs library js hello`, (err) => {
  if (err) throw err;
  console.log("your text is written in th write.txt file");
});
