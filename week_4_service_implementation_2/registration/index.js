const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());

const registrations = {};

app.post("/course/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    await axios.get("http://localhost:8001/course/" + req.params.courseId);
    await axios.get("http://localhost:8000/student/" + req.body.student);
    if (!registrations[courseId]) {
      registrations[courseId] = [];
    }

    registrations[courseId].push(req.body.student);

    res.status(200).end();
  } catch (err) {
    console.log(err.message);
    res.status(400).end();
    return;
  }
});

app.get("/course/:courseId/students", (req, res) => {
  const courseId = req.params.courseId;
  const students = registrations[courseId] || [];
  res.json(students);
});

app.listen(8002, () => {
  console.log(`Registration service is running at http://localhost:8002`);
});
