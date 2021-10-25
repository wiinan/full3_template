const { billingCycles, sessions } = require("../models");
const sessionServices = require("../service/sessionServices");

require("dotenv").config();

class SessionController {
  async store(req, res) {
    try {
      const userRegister = await sessionServices.store({ data: req.data });
      return res.json(userRegister);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  // const { name, password, confirmPassword } = req.data;
  // if (confirmPassword !== password)
  //   return res.status(401).json("senha nao se batem");
  // const HashPassword = await bcrypt.hash(password, 10);
  // try {
  //   let createUser = await sessions.create({ name, password: HashPassword });
  //   return res.status(200).json(createUser);
  // } catch (err) {
  //   if (err && err.name === "SequelizeUniqueConstraintError")
  //     return res.status(401).json("Email já existe");
  //   return res.status(500).json(err);
  // }}

  async login(req, res) {
    try {
      const userLogged = await sessionServices.login({ data: req.data });

      return res.json({ token: userLogged });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  // async login(req, res) {
  //   const { name, password } = req.body;
  //   try {
  //     const userExist = await sessions.findOne({ name, password });
  //     if (!userExist)
  //       return res.status(401).json({ erro: "email inexistente" });
  //     if (!isValid) return res.status(401).json({ Error: "Senha Incorreta" });
  //     const userLogin = jwt.sign(
  //       {
  //         name,
  //       },
  //       process.env.JWT_SECRET,
  //       { expiresIn: "3d" }
  //     );
  //     return res.status(200).json({ Logado: userLogin });
  //   } catch (err) {
  //     return res.status(500).json(err);
  //   }
  // }

  async index(req, res) {
    try {
      let allUsers = await sessions.findAll();

      return res.status(200).json(allUsers);
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

module.exports = new SessionController();
