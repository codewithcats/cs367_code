const express = require("express");
const app = express();
app.use(express.json());

const students = {};

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/students", (req, res) => {
  res.json(Object.values(students));
});

app.post("/student", (req, res) => {
  const student = req.body;
  if (!student.id) {
    res.status(400);
    res.json({ error: "Student must have an ID." });
    return;
  }

  students[req.body.id] = req.body;
  res.status(201);
  res.json(req.body);
});

app.put("/student/:id", (req, res) => {
  students[req.params.id] = req.body;
  res.json(req.body);
});

app.delete("/student/:id", (req, res) => {
  console.log(students);
  delete students[req.params.id];
  res.status(200).end();
});

app.listen(8000, () => {
  console.log(`Student service is running at http://localhost:8000`);
});
