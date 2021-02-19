const express = require("express");
const app = express();

const students = [
  {
    id: "4809613106",
    name: "Tanawat",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(8000, () => {
  console.log(`Student service is running at http://localhost:8000`);
});
