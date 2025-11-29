import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    discease: {type: String},
    age:{type: Number ,required: true},
    condition:{type: String},
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
