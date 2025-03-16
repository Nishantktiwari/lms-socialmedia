const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Notification Service is Running!");
});
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Notification Service is running on port ${PORT}`);
});

