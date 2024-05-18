const availableCars = [
  {
    id: 1,
    brand: "bmw",
    model: "m1",
    location: "selam",
    available: true,
    type: "basic",
  },
  {
    id: 2,
    brand: "Honda",
    model: "city",
    location: "chennai",
    available: true,
    type: "basic",
  },
  {
    id: 3,
    brand: "bmw",
    model: "x2",
    location: "selam",
    available: true,
    type: "luxury",
  },
  {
    id: 4,
    brand: "skoda",
    model: "slavia",
    location: "chennai",
    available: true,
    type: "basic",
  },
  {
    id: 5,
    brand: "volksWagon",
    model: "polo Gt",
    location: "selam",
    available: true,
    type: "premium",
  },
];

function searchAvailableCars(location) {
  const cars = availableCars.filter(
    (car) => car.location.toLowerCase() === location.toLowerCase()
  );
  if (!cars) {
    console.log("no cars available");
  }
  return cars;
}

function makeReservation(carid, startDate, endDate) {
  const car = availableCars.find((car) => car.id === carid);
  if (car) {
    car.available = false;
    return {
      success: true,
      message: `Reservation ${car.brand} ${car.model} confirmed from ${startDate} to ${endDate}.`,
    };
  } else {
    return { success: false, message: "Car not found." };
  }
}

console.log("available cars in");
console.log(searchAvailableCars("chennai"));
console.log(makeReservation(1, "2024-05-01", "2024-05-07"));
