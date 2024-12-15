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
    // Check if the user already exists
    const exist = await doctorsCollection.findOne(query);
    if (exist) {
      return res.status(409).send({ message: "Doctor already exists" });
    }
    // Insert new user
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

module.exports = { getAllDoctors, postDoctor };
