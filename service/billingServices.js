const { billingCycles, sessions } = require("../models");

module.exports = {
  store: async (req) => {
    const { userId } = req.userId;

    const ActualUser = await sessions.findByPk(userId);

    if (!ActualUser) throw new Error("usuario nao encontrado");

    try {
      let createBilling = await billingCycles.create({
        sessionId: userId,
        ...req.data,
      });

      return createBilling;
    } catch (err) {
      throw new Error(err);
    }
  },
};
