const { db } = require("../utils/dbconnection");

const doctorsCollection = db.collection("doctors");

// get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const result = await doctorsCollection.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

//post a doctor after sign in
const postDoctor = async (req, res) => {
  const newDoctor = req.body;
  const query = { email: newDoctor.email };

  try {
    // Check if the doctor already exists
    const exist = await doctorsCollection.findOne(query);
    if (exist) {
      return res.status(409).send({ message: "Doctor already exists" });
    }
    // Insert new doctor
    const result = await doctorsCollection.insertOne(newDoctor);

    if (result.insertedId) {
      res.status(201).send({
        message: "Doctor created successfully",
        doctorId: result.insertedId,
      });
    } else {
      res.status(500).send({ message: "Failed to create doctor" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

//get a single doctor
const getSingleDoctor = async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res
      .status(400)
      .send({ message: "Email query parameter is required" });
  }
  const query = { email };
  try {
    const doctor = await doctorsCollection.findOne(query); // Find doctor by email
    if (doctor) {
      res.status(200).send(doctor); // Send doctor data if found
    } else {
      res.status(404).send({ message: "Doctor not found" }); // Handle if doctor is not found
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

//get doctor role by email
const isDoctor = async (req, res) => {
  const email = req.query.email;

  // console.log(email);
  // console.log(req.decoded);

  if (req.decoded.email !== email) {
    res.send({ isDoctor: false });
  }

  const query = { email: email };
  const doctor = await doctorsCollection.findOne(query);
  // console.log(doctor);
  const result = { isDoctor: doctor?.role === "doctor" };
  res.send(result);
};

module.exports = { getAllDoctors, postDoctor, getSingleDoctor, isDoctor };
