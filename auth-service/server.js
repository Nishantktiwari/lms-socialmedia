const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Auth Service is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
app.get('/health', (req, res) => {
    res.json({ status: "running" });
})
