
import express from "express";
import Doctor from '../module/doctor.js';

const router = express.Router();

router.get('/', (req , res) => {
    res.send("Doctor file routes");
})

router.post('/addDoctor', async (req, res) => {
    try{
        const {name , email, specialization} = req.body;

        const newDoctor = await Doctor.create(
        {
            name,
            email,
            specialization
        });

        res.status(201).json({success: true, doctors: newDoctor});
        
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.get('/allDoctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();  // Fetch data from MongoDB
        // console.log(doctors);
        res.status(200).json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// get all appoinment 

// router.get("/doctor/appointments/:doctorId", async (req, res) => {
//   try {
//     const appointments = await Appointment.find({ doctorId: req.params.doctorId }).populate("patientId");
//     res.json({ success: true, appointments });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// doctor accept the requst or reject 

// router.put("/appointments/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;
//     const updated = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     res.json({ success: true, updated });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });




export default router;