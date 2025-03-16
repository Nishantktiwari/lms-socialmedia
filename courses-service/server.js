const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Courses Service is Running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Courses Service is running on port ${PORT}`);
});

