const express = require("express");
const app = express();
const users = require("./userData");
const port = 3000;
app.use(express.json());

function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/sum", (req, res) => {
  const n = parseInt(req.query.n);
  if (isNaN(n)) return res.status(404).send("Invalid number");
  res.send(sum(n).toString());
});

app.get("/", (req, res) => {
  let totalUsersData = [];
  for (let j = 0; j < users.length; j++) {
    const userName = users[j].fullName || "Unknown";
    const userAge = users[j].age || "Not Available";
    const userKidneys = Array.isArray(users[j].kidneys) ? users[j].kidneys : [];
    const noOfKidneys = userKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i < noOfKidneys; i++) {
      if (userKidneys[i].Healthy) {
        noOfHealthyKidneys++;
      }
    }
    let noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    const usersKidneyData = {
      userName,
      userAge,
      noOfKidneys,
      noOfHealthyKidneys,
      noOfUnHealthyKidneys,
    };
    totalUsersData.push(usersKidneyData);
  }
  res.json(totalUsersData);
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  for (let i = 0; i < users.length; i++) {
    const userKidneys = users[i].kidneys;
    userKidneys.push({
      Healthy: isHealthy,
    });
  }

  res.json({ msg: "done" });
});
app.put("/", (req, res) => {
  let isAllHealthy = false;
  for (let i = 0; i < users.length; i++) {
    let usersKidney = users[i].kidneys;
    for (let j = 0; j < usersKidney.length; j++) {
      if (!usersKidney[j].Healthy) {
        usersKidney[j].Healthy = true;
        isAllHealthy = true;
      }
    }
  }
  if (isAllHealthy) {
    res.json({ msg: "done" });
  } else {
    res.json({ msg: "All kidneys are healthy" });
  }
});
app.delete("/", (req, res) => {
  for (let i = 0; i < users.length; i++) {
    let usersKidney = users[i].kidneys;
    let newKidneys = [];
    if (usersKidney.length === 0) {
      res.json({ msg: "You dont have any unHealthy kidneys" });
    } else {
      for (let j = 0; j < usersKidney.length; j++) {
        if (usersKidney[j].Healthy) {
          newKidneys.push({
            Healthy: true,
          });
        }
      }
      users[i].kidneys = newKidneys;
    }

    res.json({ msg: "done" });
  }
});

app.listen(port, () => {
  console.log(`App is listenign on ${port}`);
});
