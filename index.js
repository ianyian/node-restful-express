// npm init --yes
// npm install express
// npm install -g nodemon
// npm index.js
// nodemon index.js
// npm install joi

// mac set enviroment command , export PORT=5000
// windows set enviroment command, set PORT=5000
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course with given ID was not found");
  res.send(course);
});

app.get("/api/post/:year/:month", (req, res) => {
  //res.send(req.params);
  res.send(req.query);
});

app.post("/api/courses", (req, res) => {
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  //schema.validate
  const result = schema.validate(req.body);

  //console.log(result);

  if (result.error) {
    // if (!req.body.name || req.body.name.length < 3) {
    // 400 bad request
    //res.status(400).send("name is required and should be minimum 3 chars");
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));