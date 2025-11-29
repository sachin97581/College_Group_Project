import express from 'express';
import Appointment from '../module/appointment.js';
const router = express.Router();

router.get('/' , (req , res) => {
    res.send("This is the appointment router file");
})

//add appointment
router.post("/addappointments", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    // console.log("New appointment created:", appointment);
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get patient appointments associated with patientId and populate doctor details
router.get("/appointments/patient/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;

    const appointments = await Appointment.find({ patientId })
      .populate("doctorId", "name specialization") // show only required fields
      .select("doctorId status date time"); // optional: limit fields
      // console.log("Appointments for patient:", appointments);
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


// Doctor → Get All Requests for Doctor Dashboard
router.get("/doctor/appointments/:doctorId", async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.params.doctorId }).populate("patientId");
    // console.log("Appointments for doctor:", appointments);
    res.json({ success: true, appointments });
  } catch (error) {
    console.error("error comes from /doctor/appointments/:doctorId", error);
    res.status(500).json({ error });
  }
});

// Doctor → Accept or Reject Request
router.put("/appointments/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ success: true, updated });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
