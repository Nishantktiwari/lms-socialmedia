const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Users Service is Running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Users Service is running on port ${PORT}`);
});

