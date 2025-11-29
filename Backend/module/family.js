import mongoose from "mongoose";

// const familySchema = new mongoose.Schema({
//     name1: {type: String, required: true},
//     email1: { type: String,required: true,unique: true },
//     name2: { type: String,required: true },
//     email2: {type: String,required: true,unique: true},
//     name3: {type: String,},
//     email3: {type: String,unique: true },
//     name4: {type: String},
//     email4: { type: String, unique: true},
// })



const FamilySchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
//   relation: {
//     type: String,
//     enum: ["Mother", "Father", "Brother", "Sister", "Spouse", "Child", "Friend", "Other"],
//     required: true,
//   },
  email: {
    type: String,
    required: true,
  }
});

const Family = mongoose.model("Family", FamilySchema);
export default Family;
