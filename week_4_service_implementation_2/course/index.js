const express = require("express");
const app = express();
app.use(express.json());

const courses = {};

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/courses", (req, res) => {
  res.json(Object.values(courses));
});

app.post("/course", (req, res) => {
  const course = req.body;
  if (!course.id) {
    res.status(400);
    res.json({ error: "Course must have an ID." });
    return;
  }

  courses[req.body.id] = req.body;
  res.status(201);
  res.json(req.body);
});

app.put("/course/:id", (req, res) => {
  courses[req.params.id] = req.body;
  res.json(req.body);
});

app.delete("/course/:id", (req, res) => {
  delete courses[req.params.id];
  res.status(200).end();
});

app.listen(8001, () => {
  console.log(`Course service is running at http://localhost:8001`);
});
