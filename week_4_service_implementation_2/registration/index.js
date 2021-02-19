const express = require("express");
const app = express();
app.use(express.json());

const registrations = {};

app.post("/course/:courseId", (req, res) => {
  const courseId = req.params.courseId;
  if (!registrations[courseId]) {
    registrations[courseId] = [];
  }

  registrations[courseId].push(req.body.student);

  res.status(200).end();
});

app.get("/course/:courseId/students", (req, res) => {
  const courseId = req.params.courseId;
  const students = registrations[courseId] || [];
  res.json(students);
});

app.listen(8002, () => {
  console.log(`Registration service is running at http://localhost:8002`);
});
