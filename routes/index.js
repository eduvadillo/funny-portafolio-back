const router = require("express").Router();
const User = require("../models/User.model");

router.post("/score-user", (req, res, next) => {
  const { name, puntuacion } = req.body;
  User.create({ username: name, score: puntuacion }).then((createdUser) => {
    res.status(201).json(createdUser);
  });
});

router.get("/all-score", (req, res, next) => {
  User.find()
    .sort({ score: -1 })
    .limit(3)
    .then((allUsers) => res.json(allUsers));
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
