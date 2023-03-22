const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Thread = require("./models/Thread");

app.use(express.json());

mongoose
  .connect
  // 自分のMONGODBのDASHBOARD URLを貼り付け
  ()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/thread", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, console.log("server running"));
