const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.static("public"));

app.get("", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
