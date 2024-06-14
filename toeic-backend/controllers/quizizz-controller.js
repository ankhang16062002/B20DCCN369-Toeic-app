const Quizizz = require("../models/Quizizz");

const addQuizizz = async (req, res, next) => {
  //create new quizizz
  const { Q, A0, A1, A2, A3, correct, explanation } = req.body;

  if (!Q && !A0 && !A1 && !A2 && !A3 && !correct) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let quizizz;

  try {
    quizizz = new Quizizz({
      Q,
      A0,
      A1,
      A2,
      A3,
      correct,
      explanation,
    });

    await quizizz.save();
  } catch (err) {
    return console.log(err);
  }

  if (!quizizz) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ quizizz });
};

const getAllQuizizzs = async (req, res, next) => {
  let quizizzs;

  try {
    quizizzs = await Quizizz.find();
  } catch (err) {
    return console.log(err);
  }

  if (!quizizzs) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ quizizzs });
};

const getQuizizzById = async (req, res, next) => {
  const id = req.params.id;
  let quizizz;

  try {
    quizizz = await Quizizz.findById(id);
  } catch (err) {
    return console.log(err);
  }

  if (!quizizz) {
    return res.status(404).json({ message: "Invalid Quizizz ID" });
  }

  return res.status(200).json({ quizizz });
};

module.exports = {
  addQuizizz,
  getQuizizzById,
  getAllQuizizzs,
};
