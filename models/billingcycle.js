"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class billingCycles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.sessions, { foreignKey: "sessionId" });
      this.hasMany(models.debitUser, { foreignKey: "billingDebitId" });
      this.hasMany(models.creditUser, { foreignKey: "billingCreditId" });
    }
  }
  billingCycles.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      sessionId: { type: DataTypes.INTEGER },
      month: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      credits: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "billingCycles",
    }
  );
  
  return billingCycles;
};
