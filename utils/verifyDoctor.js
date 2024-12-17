//verify doctor

const { db } = require("./dbconnection");

const doctorsCollection = db.collection("doctors");

const verifyDoctor = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const doctor = await doctorsCollection.findOne(query);
  //   console.log(doctor);
  if (doctor?.role !== "doctor") {
    return res.status(403).send({ error: true, message: "forbidden message" });
  }
  next();
};

module.exports = verifyDoctor;
