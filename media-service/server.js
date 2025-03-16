const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Media Service is Running!");
});

app.get("/", (req, res) => {
  res.send("Media Service is Running!");
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Media service is running on port ${PORT}`);
});

