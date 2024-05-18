// Sample database of available cars
const availableCars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    location: "New York",
    available: true,
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    location: "New York",
    available: true,
  },
  {
    id: 3,
    brand: "Ford",
    model: "Fusion",
    location: "Los Angeles",
    available: true,
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Malibu",
    location: "Los Angeles",
    available: true,
  },
];

// Function to search for available cars by location and date
function searchAvailableCars(location, date) {
  const availableCarsByLocation = availableCars.filter(
    (car) =>
      car.location.toLowerCase() === location.toLowerCase() && car.available
  );
  return availableCarsByLocation;
}

// Function to make a reservation
function makeReservation(carId, startDate, endDate) {
  const car = availableCars.find((car) => car.id === carId);
  if (car) {
    car.available = false;
    return {
      success: true,
      message: `Reservation for ${car.brand} ${car.model} confirmed from ${startDate} to ${endDate}.`,
    };
  } else {
    return { success: false, message: "Car not found." };
  }
}

// Function to calculate rental fee based on duration and vehicle type
function calculateRentalFee(startDate, endDate, vehicleType) {
  // Sample fee calculation logic (replace with actual logic)
  const durationInDays =
    (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  let baseRate = 50; // Base rate per day
  if (vehicleType === "luxury") {
    baseRate *= 1.5; // Luxury vehicle surcharge
  }
  return baseRate * durationInDays;
}

// Example usage:
console.log("Available cars in New York:");
console.log(searchAvailableCars("New York"));

console.log("\nMaking a reservation for car with id 1:");
console.log(makeReservation(1, "2024-05-01", "2024-05-07"));

console.log("\nAvailable cars in New York after reservation:");
console.log(searchAvailableCars("New York"));

console.log("\nRental fee for a luxury vehicle from 2024-05-01 to 2024-05-07:");
console.log(calculateRentalFee("2024-05-01", "2024-05-07", "luxury"));
