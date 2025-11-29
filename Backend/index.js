import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import patientRoutes from "./routes/patientRouts.js";
import familyRoutes from "./routes/familyRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// const allowedOrigins = [
//   "http://localhost:5173",   // Your React app
//   "http://localhost:4000/dashboard",
// //   "http://localhost:5173"    // If needed
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             console.log("❌ Blocked by CORS:", origin);
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
// }));

app.use(cors({
  origin: [
    "http://localhost:4000",  // React frontend
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));



app.use(bodyParser.json());
app.use("/patients", patientRoutes);
app.use("/family", familyRoutes);
app.use("/doctor", doctorRoutes);
app.use("/appointment", appointmentRoutes);

// for token
app.use(express.json());

// connect to MongoDB (uncomment when ready)
const mongo_url = "mongodb://127.0.0.1:27017/ai_chatbot";
main().catch(err => console.error("❌ MongoDB connection error:", err));
async function main() {
    mongoose.connect(mongo_url);
}


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
