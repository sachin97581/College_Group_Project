import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: String,
  time: String,
//   symptoms: String,
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;