const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
