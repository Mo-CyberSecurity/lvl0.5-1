const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
