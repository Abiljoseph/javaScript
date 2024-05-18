// Define calorie-burning rates for different exercise types (calories burned per minute)
const exerciseCalories = {
  running: 10,
  weightlifting: 5,
  yoga: 3,
  cycling: 8,
  swimming: 7,
};

// Function to log an exercise and calculate calories burned
function logExercise(exerciseLog, type, duration) {
  if (!exerciseCalories.hasOwnProperty(type)) {
    console.log("Invalid exercise type.");
    return;
  }

  const caloriesBurned = exerciseCalories[type] * duration;
  exerciseLog.push({
    type: type,
    duration: duration,
    caloriesBurned: caloriesBurned,
  });
}

// Function to calculate total calories burned for the day
function calculateTotalCalories(exerciseLog) {
  let totalCalories = 0;
  exerciseLog.forEach((exercise) => {
    totalCalories += exercise.caloriesBurned;
  });
  return totalCalories;
}

// Example usage
const exerciseLog = [];

// Log exercises
logExercise(exerciseLog, "running", 30); // Running for 30 minutes
logExercise(exerciseLog, "weightlifting", 45); // Weightlifting for 45 minutes
logExercise(exerciseLog, "yoga", 60); // Yoga for 60 minutes

// Calculate total calories burned
const totalCaloriesBurned = calculateTotalCalories(exerciseLog);
console.log("Total calories burned for the day:", totalCaloriesBurned);
