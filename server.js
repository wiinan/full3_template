const app = require("./app");
const { sequelize } = require("./models");

app.listen(process.env.PORT || 8000, async () => {
  console.log("HELLo world");
  await sequelize.sync();
});
