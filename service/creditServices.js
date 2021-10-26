const { billingcycles, sessions } = require("../models");

module.exports = {
  store: async (req) => {
    const { session_id } = req.data;
    console.log(session_id);
    const userPk = await sessions.findByPk(session_id);

    if (!userPk) throw new Error("usuario nao encontrado");

    // if (decoded.sub !== userPk)
    //   return res.status(401).json({ error: "vinculo invalido" });

    try {
      let createBilling = await billingcycles.create(req.data);

      return createBilling;
    } catch (err) {
      throw new Error(err);
    }
  },
};
