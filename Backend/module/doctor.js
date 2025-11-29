import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  specializaion: String
//   role: { type: String, enum: ["doctor", "patient"], required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
