const express = require("express");
const {
  addQuizizz,
  getQuizizzById,
  getAllQuizizzs,
} = require("../controllers/quizizz-controller");

const quizizzRouter = express.Router();

quizizzRouter.post("/quizizz", addQuizizz);
quizizzRouter.get("/quizizz/:id", getQuizizzById);
quizizzRouter.get("/quizizzs", getAllQuizizzs);

module.exports = quizizzRouter;
