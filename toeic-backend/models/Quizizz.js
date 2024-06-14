const mongoose = require("mongoose");

const quizizzSchema = new mongoose.Schema({
  Q: {
    type: String,
    unique: true,
    required: true,
  },
  A0: {
    type: String,
    required: true,
  },
  A1: {
    type: String,
    required: true,
  },
  A2: {
    type: String,
    required: true,
  },
  A3: {
    type: String,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
  },
});

module.exports = mongoose.model("Quizizz", quizizzSchema);
