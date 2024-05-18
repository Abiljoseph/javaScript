// Sample data representing doctors and their availability
const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    specialty: "Cardiology",
    availability: ["Monday", "Wednesday", "Friday"],
    appointments: [],
  },
  {
    id: 2,
    name: "Dr. Johnson",
    specialty: "Dermatology",
    availability: ["Tuesday", "Thursday"],
    appointments: [],
  },
  {
    id: 3,
    name: "Dr. Brown",
    specialty: "Orthopedics",
    availability: ["Monday", "Wednesday", "Friday"],
    appointments: [],
  },
];

// Sample data representing patients and their appointments
const patients = [
  { id: 1, name: "Alice", appointments: [] },
  { id: 2, name: "Bob", appointments: [] },
  { id: 3, name: "Charlie", appointments: [] },
];

// Function to search for doctors based on specialty and availability
function searchDoctors(specialty, day) {
  return doctors.filter(
    (doctor) =>
      doctor.specialty === specialty && doctor.availability.includes(day)
  );
}

// Function to book an appointment
function bookAppointment(patientId, doctorId, day) {
  const patient = patients.find((p) => p.id === patientId);
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!patient || !doctor) {
    console.log("Patient or doctor not found.");
    return;
  }

  if (!doctor.availability.includes(day)) {
    console.log("Doctor is not available on the selected day.");
    return;
  }

  const appointment = { patient: patient.name, doctor: doctor.name, day: day };
  patient.appointments.push(appointment);
  doctor.appointments.push(appointment);
  console.log("Appointment booked successfully:", appointment);
}

// Example usage
const specialty = "Cardiology";
const day = "Wednesday";

const availableDoctors = searchDoctors("Cardiology", "Wednesday");
console.log(availableDoctors);
// console.log("Available doctors for", specialty, "on", day + ":");
// console.log(availableDoctors);

// Assuming patient with id 1 books an appointment with doctor 1 on Wednesday
// bookAppointment(1, 1, "Wednesday");
// console.log("Updated appointments:");
// console.log("Patient:", patients[0].appointments);
// console.log("Doctor:", doctors[0].appointments);
