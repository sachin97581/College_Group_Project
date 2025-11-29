import express from "express";
import axios from "axios";
import Family from "../module/family.js";


const router = express.Router();

router.get("/" , (req , res) => {
    res.send("Family route is working");
})

router.post("/add", async (req, res) => {
  try {
    console.log("Received Body at /family/add:", req.body);  // 👈 ADD THIS LINE

    const { patientId, name, email } = req.body;

    const newFamily = await Family.create({
      patientId,
      name,
      email
    });

    res.status(201).json({ success: true, family: newFamily });

  } catch (err) {
    console.error("Error adding family member:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// router.post("/add", (req, res) => {
//     try{
//           const { patientId, name, email} = req.body;

//           const newFamily = Family.create({
//             patientId,
//             name,
//             email
//           });
//           res.status(201).json({ success: true, family: newFamily });
//     }catch(err) {
//     console.error("Error adding family member:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// })


router.get("/:patientId", (req ,res) => {
    try{
        const findById = Family.find({patientId: req.params.patientId});

        res.json(findById);
    }catch(err){
        console.error("Error occru to facting the patient");
        res.status(400).json({error: "Not Found"});
    }
})





export default router;