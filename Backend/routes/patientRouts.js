import express from "express";
import Patient from "../module/patient.js";
import { getAIResponse } from "../ai/ai.js"; // Using Cohere-based function
import bcrypt from "bcryptjs";
import  {auth} from "../middleware/auth.js";
import jwt from "jsonwebtoken";
import twilio from "twilio";
import axios from "axios";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { getAuthUrl, getTokens, oauth2Client } from "../googleFillAPI/googleAuth.js";
import fs from "fs";



const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


// get weatehr report 

async function getWeatherAndPollution(lat, lon) {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  if (!lat || !lon) {
    console.log("❌ ERROR: lat or lon missing");
    return;
  }

  try {
    // 🌦 Weather
    const weatherRes = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    // 😷 Pollution
    const pollutionRes = await axios.get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    // 🟦 Free OneCall API (v2.5)
    const oneCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    console.log("🌦 Weather:", weatherRes.data);
    console.log("😷 Pollution:", pollutionRes.data);
    console.log("📡 OneCall:", oneCall.data);

    return {
      weather: weatherRes.data,
      pollution: pollutionRes.data,
      oneCall: oneCall.data,
    };

  } catch (err) {
    console.error("❌ API Error:", err.response?.data || err.message);
  }
}

// CALL FUNCTION CORRECTLY
// getWeatherAndPollution(28.7041, 77.1025); // Delhi





// google Fit API

router.get("/auth", (req, res) => {
  res.redirect(getAuthUrl());
});

router.get("/auth/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const tokens = await getTokens(code);
    // TODO: store tokens securely with association to user (DB)
    
    // Save them locally (for development)

    fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));


    res.json({ success: true, tokens });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ error: "token exchange failed" });
  }
});

router.get("/fitness-data/steps", async (req, res) => {
  try {
    // 🔹 Load saved tokens from file (or DB)
    const tokenData = JSON.parse(fs.readFileSync("tokens.json"));
    oauth2Client.setCredentials(tokenData); // ✅ set credentials before making request

    const fitness = google.fitness({ version: "v1", auth: oauth2Client });

    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    const requestBody = {
      aggregateBy: [{ dataTypeName: "com.google.step_count.delta" }],
      bucketByTime: { durationMillis: oneDay },
      startTimeMillis: now - 7 * oneDay,
      endTimeMillis: now,
    };

    const response = await fitness.users.dataset.aggregate({
      userId: "me",
      requestBody,
    });

    res.json(response.data);
  } catch (err) {
    // console.error("Google Fit API error:", err.message);
    res.status(500).json({ error: "Could not fetch fitness data", details: err.message });
  }
});


//  User Profile 

router.get("/profile", auth, async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from auth middleware
    // console.log("Fetching profile for user ID:", userId);
    const patient = await Patient.findById(userId).select("-password"); // Exclude password
    // console.log("Patient data:", patient);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json({ patient });
  } catch (error) {
    // console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Setup transporter (using Gmail here)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sinethakur211021@gmail.com",  // exact Gmail
    pass: "kggk paem milj pvjo"        // App Password without spaces
  }
});

// send SMS route
router.post("/send-sms", async (req, res) => {
  try {
    const { phone , message } = req.body;

    const sms = await client.messages.create({
      body: message,
      from: '+17754415335', // Your Twilio number
      to: '+91'+phone // Recipient's phone number (make sure to include country code)
    });
    // console.log("SMS sent:", sms.sid);
    // console.log("Message body:", sms.body);
    res.status(200).json({ message: "SMS sent successfully", sms });
  } catch (error) {
    // console.error("Error sending SMS:", error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
});

// use FAST2SMS API to send sms
router.post("/sms", async (req, res) => {
  const { phone, message } = req.body;

  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "v3",
        sender_id: "TXTIND",
        message: message,
        language: "english",
        flash: 0,
        numbers: phone
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ success: true, data: response.data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ success: false, error: "Failed to send SMS" });
  }
});


// Route for sending mail
router.get("/sendmail" , async (req , res) => {
  try{
    const mailOptions = {
      from : "sinethakur211021@gmail.com",
      to : [
        "ravi1bansara@gmail.com",
        "vishwajeet14nov@gmail.com",
        "lakhipurkoli95087@gmail.com",
        "sat211021@gmail.com",
        "singhshivam16897@gmail.com",
        "ravikantg397@gmail.com"
      ],
      subject: "This mail send you from Sachin Thakur For Project Testing",
      text: "This Mail From SACHIN THAKUR for College Group Testing, if you got this then testing Success full please tell me once you got the mail"
    };

    // send mail
    await transporter.sendMail(mailOptions);
    res.send("Email send successfully")
  }catch(error){
    // console.log(error);
    res.status(500).send("Error sending mail")
  }
});

// Example 
// app.post("/patients/sendmail", async (req, res) => {
//   const { patientName, email } = req.body; // coming from frontend
  
//   const mailOptions = {
//     from: "yourgmail@gmail.com",
//     to: email,
//     subject: "Patient Update",
//     text: `Hello, patient ${patientName}'s details updated successfully.`,
//   };

//   await transporter.sendMail(mailOptions);
//   res.send("Email sent!");
// });


/**
 * ✅ AI Chat Endpoint
 * Finds matching patients from DB and asks AI for suggestions
 */
// router.post("/chat", async (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message || message.trim() === "") {
//       return res.status(400).json({ error: "Message cannot be empty" });
//     }

//     // Search patients by disease keyword
//     // const dbData = await Patient.find({
//     //   discease: { $regex: message, $options: "i" }
//     // }).limit(3);

//     // console.log("DB Data:", dbData);

//     const aiReply = await getAIResponse(message);
//     console.log("AI Reply:", aiReply);

//     res.json({
//       status: "success",
//       userMessage: message,
//       // patientsMatched: dbData,
//       reply: aiReply
//     });
//   } catch (error) {
//     console.error("Error in /chat route:", error);
//     res.status(500).json({ error: "Something went wrong with AI Chat" });
//   }
// });


router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    // 🔍 Step 1: Health-related keyword list
    const healthKeywords = [
      "health", "medicine", "doctor", "disease", "symptom", "treatment",
      "fitness", "pain", "exercise", "nutrition", "diet", "illness",
      "fever", "cough", "covid", "flu", "diabetes", "bp", "blood pressure",
      "heart", "cardio", "skin", "hair fall", "infection", "injury",
      "stress", "mental health", "anxiety", "sleep"
    ];

    // 🔍 Step 2: Check if message contains at least one health keyword
    const isHealthRelated = healthKeywords.some(keyword =>
      message.toLowerCase().includes(keyword)
    );

    if (!isHealthRelated) {
      return res.json({
        status: "restricted",
        reply: "Sorry, I can only provide health-related suggestions. Please ask anything related to health, symptoms, fitness or medicine."
      });
    }

    // 🤖 Step 3: Get actual AI response (only for health topics)
    const aiReply = await getAIResponse(message);
    // console.log("AI Reply:", aiReply);

    res.json({
      status: "success",
      userMessage: message,
      reply: aiReply
    });

  } catch (error) {
    // console.error("Error in /chat route:", error);
    res.status(500).json({ error: "Something went wrong with AI Chat" });
  }
});


// register patient route with hashing password and ai suggestion


// REGISTER Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, discease, age, condition, password } = req.body;

    if (!name || !email || !discease || !age || !condition || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await Patient.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new patient
    const newPatient = new Patient({
      name,
      email,
      discease,
      age,
      condition,
      password: hashedPassword
    });
    await newPatient.save();

    // const token = newPatient.generateAuthToken();
    // const token = jwt.sign({ id: newPatient._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Fetch saved patient details
    const patientData = await Patient.findById(newPatient._id);
    // console.log("Saved Patient:", patientData);

    // AI suggestion (keep your existing logic)
    const aiSuggestion = await getAIResponse(
      `Give a health suggestion for a patient with condition: ${condition}`,
      patientData
    );

    // console.log("AI Suggestion:", aiSuggestion);

    // now i am using session to store user id
    // res.status(201).json({ token, newPatient });

    res.status(201).json({
      message: "Patient added successfully",
      patient: {
        name,
        email,
        discease,
        age,
        condition
      },
      aiSuggestion
    });
  } catch (err) {
    // console.error("Error saving patient:", err);
    res.status(500).json({ error: "Server error" });
  }
});



// login patient 

// LOGIN Route

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await Patient.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_secret_key", {
      expiresIn: "1d"
    });

   return res.json({
      message: "Login successful",
      // console: console.log("User logged in:", user),
      token, // Send token to client
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    // res.redirect('/patients');  
  } catch (err) {
    // console.error("Error during login:", err);
    res.status(500).json({ error: "Server error" });
  }
});



router.get("/dashboard", auth,(req, res) => {
  res.json({ message: `Welcome user ${req.user.id}` });
});



export default router;










