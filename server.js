const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const Document = require("./models/document");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wastebin");

app.get("/", (req, res) => {
  const code = `Welcome to Wastebin!

  Use the commands in the top right corner
  to create a new file to share with others.`;

  res.render("code-display", { code, language: "plaintext" });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/save", (req, res) => {
  const value = req.body.value;
  console.log(value);
});

app.listen(3000);
