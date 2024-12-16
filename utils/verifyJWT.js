const jwt = require("jsonwebtoken");

//create verifyJWT function
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  // console.log(authorization);
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }

  // bearer token
  const token = authorization.split(" ")[1];
  console.log(token);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: true, message: err.message });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyJWT;
