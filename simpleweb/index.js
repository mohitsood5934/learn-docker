const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hii there !!");
});

app.listen(8080, () => {
  console.log("You are listening to port 8080");
});
