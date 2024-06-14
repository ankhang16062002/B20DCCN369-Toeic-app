const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const quizizzRouter = require("./routes/quizizz-routes");
const cors = require("cors");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.use("/", quizizzRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
