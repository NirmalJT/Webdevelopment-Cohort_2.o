const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  const updatedData = data.split(" ");
  let newArray = [];
  let str = "";
  updatedData.forEach((data) => {
    data = data.trim();
    if (data !== "") {
      newArray.push(data);
      str = str + data + " ";
    }
  });
  str = str.trim();
  fs.writeFile("text.txt", `${str}`, (err) => {
    if (err) throw err;
    console.log("Your string is added after removing extra spaces");
  });
  console.log(str);
});
