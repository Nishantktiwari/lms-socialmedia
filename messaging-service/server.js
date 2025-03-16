const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Courses Service is Running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Messaging Service is running on port ${PORT}`);
});

