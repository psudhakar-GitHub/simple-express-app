const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("App is running..");
});

router.get("/demo", (req, res) => {
  res.json([
    {
      id: "001",
      name: "Aayush",
    },
    {
      id: "002",
      name: "rohit",
    },
    {
      id: "003",
      name: "Mohit",
    },
  ]);
});

app.use("/api/", router);

module.exports.handler = serverless(app);
