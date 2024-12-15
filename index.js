const express = require("express");
const app = express();
const cors = require("cors");
const { run, db } = require("./utils/dbconnection");
const doctorRoutes = require("./routes/doctorsRoute");
const userRoutes = require("./routes/usersRoute");

require("dotenv").config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

run();

//routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/users", userRoutes);

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});
