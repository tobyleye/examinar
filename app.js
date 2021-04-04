const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const __questions__ = {};

app.get("/", (req, res) => {
  res.json({ message: "welcome to examinar" });
});

// create a new exam
app.post("/exam", (req, res) => {
  const { questions, title, duration } = req.body; // array of questions
  const id = new Date();

  const exam = { title, questions, duration };
  __questions__[id] = exam;
  return res.json({ message: "success", exam });
});

// retrieve an existing exam
app.get("/exam/:id", (req, res, next) => {
  const { id } = req.params;
  const exam = __questions__[id];
  if (!exam) {
    next();
    return;
  }
  return res.json({ message: "success", exam });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("app is running!");
});
