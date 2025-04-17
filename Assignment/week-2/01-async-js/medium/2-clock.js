setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  let h = String(hour).padStart(2, "0");
  let m = String(minute).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  let time24 = `${h} : ${m} : ${s}`;
  let hour12 = hour % 12 || 12;
  hour12 = String(hour12).padStart(2, "0");
  const AMPM = hour >= 12 ? "PM" : "AM";
  console.clear();
  console.log(`time24 : ${time24}`);
  console.log(`time12-easy way : ${date.toLocaleTimeString()}`); //simple way
  console.log(` time12-2ndWay : ${hour12} : ${m} : ${s} : ${AMPM} `);
}, 1000);
