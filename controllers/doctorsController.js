const { db } = require("../utils/dbconnection");

const doctorsCollection = db.collection("doctors");

// get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const result = await doctorsCollection.find().toArray();
    res.status(200).send(result);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

module.exports = { getAllDoctors };
