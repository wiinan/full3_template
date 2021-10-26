const jwt = require("jsonwebtoken");
const { sessions } = require("../models");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  const authHeader = await req.headers.token;

  if (!authHeader) return res.status(401).json("Token nao autenticado");

  const token = authHeader.split(" ")[1];

  const tokenVerificated = jwt.verify(token, process.env.JWT_SECRET);

  if (!tokenVerificated) return res.status(401).json("Usuario nao encontrado");

  req.currentUserId = tokenVerificated;

  next();
};

// const verifyTokenAndAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.name.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not alowed to do that");
//     }
//   });
// };

module.exports = verifyToken;
