const Yup = require("yup");

module.exports = {
  store: {
    body: Yup.object().shape({
      name: Yup.string().required(),
      month: Yup.number().required(),
      year: Yup.number().required(),
      credits: Yup.number(),
    }),
    params: Yup.object().shape({
      sessionId: Yup.number(),
    }),
  },
};
