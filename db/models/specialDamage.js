const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Special_Damage extends Model {
    static associate(models) {
      this.belongsTo(models.characters, { foreignKey: "charID" });
      this.belongsTo(models.specials, { foreignKey: "specID" });
    }
  }
  Special_Damage.init(
    {
      charID: {
        type: DataTypes.INTEGER,
        references: {
          model: "characters",
          key: "id",
        },
      },
      specID: {
        type: DataTypes.INTEGER,
        references: {
          model: "specials",
          key: "id",
        },
      },
      min_multiplier: DataTypes.INTEGER,
      max_multiplier: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "special_Damage",
      underscored: true,
    }
  );
  return Special_Damage;
};
