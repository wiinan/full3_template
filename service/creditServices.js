const { billingCycles, sessions } = require("../models");

module.exports = {
  store: async (req) => {
    const { sessionId } = req.data;
    console.log(sessionId);
    const userPk = await sessions.findByPk(sessionId);

    if (!userPk) throw new Error("usuario nao encontrado");

    // if (decoded.sub !== userPk)
    //   return res.status(401).json({ error: "vinculo invalido" });

    try {
      let createBilling = await billingCycles.create(req.data);

      return createBilling;
    } catch (err) {
      throw new Error(err);
    }
  },
};
