const express = require("express");
const router = express.Router();

const { getRandomMeal, addMeal, deleteMeal, updateMeal } = require("./run");

router.route("/random-meal").get(getRandomMeal);
router.route("/add-meal").post(addMeal);
router.route("/update-meal").put(updateMeal);
router.route("/delete-meal").delete(deleteMeal);

module.exports = router;