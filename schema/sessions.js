const Yup = require("yup");

module.exports = {
  store: {
    body: Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required().min(6),
    }),
  },

  login: {
    body: Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required().min(6),
    }),
  },
};
