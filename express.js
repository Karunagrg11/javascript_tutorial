import express from "express";
const app = express();
app.listen(3000, (req, res) => {
  console.log("app is running on port 3000");
});
