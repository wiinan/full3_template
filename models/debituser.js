"use strict";
const { Model } = require("sequelize");
const { billingCycles } = require("./");
module.exports = (sequelize, DataTypes) => {
  class debitUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.billingCycles, { foreignKey: "billingDebitId" });
    }
  }
  debitUser.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "digite algo" } },
      },
      value: { type: DataTypes.INTEGER, allowNull: false },
      status: { type: DataTypes.BOOLEAN, default: true },
      pedencies: { type: DataTypes.STRING },
      billingDebitId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "debitUser",
    }
  );
  freezeTableName: true;

  debitUser.afterCreate(async (user) => {
    billingCycles.update(
      {
        name: user.name,
        month: 2,
        year: 2021,
        credits: user.value,
      },
      {
        where: {
          sessionId: user.id,
        },
      }
    );
  });

  return debitUser;
};
