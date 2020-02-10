const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  find(critera) {
    if (this.username === critera.username) {
      return this;
    }
  }
}

var phil = { user: "phil", pass: "p@ss" };
app.get("/phil", (req, res) => {
  res.send("halloooooo");
});

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  if (username == phil.user && password == phil.pass) {
    res.json({ logStatus: "success", username: username });
  } else {
    res.json({ logStatus: "failed" });
  }
});

app.listen(5000, () => console.log("server running on port 5000"));
