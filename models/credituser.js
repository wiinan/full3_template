"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class creditUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.billingcycles, { foreignKey: "billingCreditId" });
    }
  }
  creditUser.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "digite algo" } },
      },
      value: DataTypes.INTEGER,
      billingCreditId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "creditUser",
    }
  );
  return creditUser;
};
