const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(8000, () => {
  console.log(`Student service is running at http://localhost:8000`);
});
