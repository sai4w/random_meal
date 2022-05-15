const Mongoose = require("mongoose");

const MealSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mealType: {
    type: String,
    minlength: 6,
    required: true,
  },
  cookingTime: {
    type: Number,
    default: "0",
    required: true,
  },
});

const Meal = Mongoose.model("meal", MealSchema);

module.exports = Meal;