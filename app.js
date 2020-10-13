// created entire server using express code... doing backend javascript code

const express = require("express");
//
const app = express();
//
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello You!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
