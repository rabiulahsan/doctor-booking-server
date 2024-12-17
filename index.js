const express = require("express");
const app = express();
const cors = require("cors");
const { run, db } = require("./utils/dbconnection");
const doctorRoutes = require("./routes/doctorsRoute");
const userRoutes = require("./routes/usersRoute");
const jwtRoute = require("./routes/jwtRoute");
const verifyJWT = require("./utils/verifyJWT");
const verifyDoctor = require("./utils/verifyDoctor");

require("dotenv").config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

run();

//routes
app.use("/jwt", jwtRoute);
app.use("/api/doctors", doctorRoutes);
app.use("/api/users", userRoutes);

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

// Protected test route
app.get("/test-protected", verifyJWT, (req, res) => {
  res.send({ message: "You have access to this protected route." });
});

//only doctor
app.get("/test-doctor", verifyJWT, verifyDoctor, (req, res) => {
  res.send({ message: "You have access to this doctor protected route." });
});

//only user ( patient)
app.get("/test-user", verifyJWT, (req, res) => {
  res.send({ message: "You have access to this user protected route." });
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});
