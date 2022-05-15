const Meal = require("../model/Meal");


exports.updateMeal = async (req, res, next) => {
    const { name, mealType, cookingTime, id } = req.body;
        await Meal.findById(id)
          .then((meal) => {
              meal.name = name;
              meal.mealType = mealType;
              meal.cookingTime = cookingTime;
              meal.save((err) => {
                if (err) {
                  return res
                    .status("400")
                    .json({ message: "An error occurred", error: err.message });
                  process.exit(1);
                }
                res.status("201").json({ message: "Update successful", meal });
              });
            
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "An error occurred", error: error.message });
          });
  };

exports.addMeal = async (req, res, next) => {
    const { name, mealType, cookingTime } = req.body;
      await Meal.create({
        name,
        mealType,
        cookingTime,
      })
    };
  

exports.deleteMeal = async (req, res, next) => {
    const { id } = req.body;
    await Meal.findById(id)
      .then((meal) => {
      console.log(meal)
      meal.remove()}) 
      .then((meal) =>
        res.status(201).json({ message: "Meal successfully deleted", meal })
      )
}



exports.getRandomMeal = async (req, res, next) => {
    await Meal.find({})
      .then((meals) => {
        const mealFunction = meals[Math.floor(Math.random()*meals.length)];
        res.status(200).json({ meal: mealFunction });
      })
      .catch((err) =>
        res.status(401).json({ message: "Not successful", error: err.message })
      );
  };