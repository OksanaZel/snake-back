const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/user.routes");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());

app.use("/api", userRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = err.message } = err;
  res.status(status).json({ status: "error", code: status, message });
});

module.exports = app;
