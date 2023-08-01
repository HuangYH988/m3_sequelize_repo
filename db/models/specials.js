const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specials extends Model {
    static associate(models) {
      this.belongsTo(models.characters, { foreignKey: "charID" });
    }
  }
  Specials.init(
    {
      charID: {
        type: DataTypes.INTEGER,
        references: {
          model: "characters",
          key: "id",
        },
      },
      type: DataTypes.INTEGER,
      effect: DataTypes.STRING,
      is_grapple: DataTypes.BOOLEAN,
      min_multiplier: DataTypes.FLOAT,
      max_multiplier: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "specials",
      underscored: true,
    }
  );
  return Specials;
};
